import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import AuthService from '../Backend/Auth'
import {useDispatch} from 'react-redux'
import {login as loginAction} from '../store/authSlice'
import { useNavigate,Link } from 'react-router-dom'
import {Logo,Button,Input} from './index'
function Login() {
    const {register,handleSubmit} =useForm()
    const [error,setError] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loginHandle = async(data)=>{
        setError("")
        try {
            const session = await AuthService.login(data)
            if (session){
                const userData = await AuthService.getCurrentUser()
                if (userData) dispatch(loginAction({userData}))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className='flex flex-col w-1/2 border-2 rounded-2xl border-orange-300 shadow-lg bg-orange-200 hover:bg-amber-200 text-emerald-950 font-serif'>
        <form onSubmit={handleSubmit(loginHandle)}>
            <div className='mt-3 px-3'>
               <h1 className='text-2xl font-bold'>Login Here</h1>
            </div>
            <div className='mt-2 px-3'>
                 <Logo />
            </div>
            {error && <div className='mt-3 px-3 border-2 rounded-lg border-red-400 bg-red-100 shadow-md'>
                <p className='text-red-600 '>{error}</p></div>}
            <hr/>
            <div className='mt-3 px-3'> 
                <Input
                className="border-emerald-950 hover:border-emerald-800"
                label="Email "
                type='email'
                placeholder='Enter your email here...'
            {...register("email", {required: "Email is required",
                                    pattern: { value: /^\S+@\S+\.\S+$/,
                                               message: "Invalid email" },
                                   }
                        )
            } />
            </div>
            <div className='mt-3 px-3'>
                <Input
                className="border-emerald-950 hover:border-emerald-800"
                label="Password "
                type='password'
                placeholder='Enter your account password here...'
                {...register("password", {required: true,})} 
                />
            </div>
            <div className='mt-3 px-3'>
                <Button 
                className=' bg-emerald-950 text-orange-200 hover:bg-emerald-800 '
                type='submit'>Login</Button>
            </div>
            <div className='mb-3 mx-auto'>
                <Link to={'/signup'}><p1 >If you don't have Account? <p className='hover:text-cyan-700'>Register</p></p1></Link>
            </div>
        </form>
    </div>
  )
}

export default Login