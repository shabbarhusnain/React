import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import AuthService from '../Backend/Auth'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Logo,Button,Input} from './index'
import { login } from '../store/authSlice'
function Signup() {
    const {register,handleSubmit,getValues} =useForm()
    const [error,setError] = useState()
    const dispatch = useDispatch()
    const selector =useSelector()
    const navigate = useNavigate()
    const SignupHandle = async(data)=>{
        setError("")
        try {
            const session = await AuthService.createAccount(
                name=data.name,email=data.email, password=data.password
            )
            if (session){
                const userData =await AuthService.getCurrentUser()
                if (userData){
                    dispatch(login(userData))
                    navigate('/')}}
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className='flex flex-col w-1/2 border-2 rounded-2xl border-orange-300 shadow-lg bg-orange-200 hover:bg-amber-200 text-emerald-950 font-semibold font-serif'>
        <form onSubmit={handleSubmit(SignupHandle)}>
            
            <div className='mt-2 px-3'>
                 <Logo />
            </div>
            
            <div className='mt-3 px-3'>
               <h1 className='text-2xl font-bold'>Create Your Account</h1>
            </div>
            {error && <div className='mt-3 px-3 border-2 rounded-lg border-red-400 bg-red-100 shadow-md'>
                <p className='text-red-600 '>{error}</p></div>}
            <hr/>
            <div className='mt-3 px-3'> 
                <Input
                className="border-emerald-950 hover:border-emerald-800"
                label="Full Name "
                type='text'
                placeholder='Enter your full name....'
            {...register("name", {required: true,}
                        )
            } />
            </div>

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
            {error.email && <p className='mt-2 px-3 text-red-600 '>{error.email.message}</p>}
            </div>
            <div className='mt-3 px-3'>
                <Input
                className="border-emerald-950 hover:border-emerald-800"
                label="New Password "
                type='password'
                placeholder='Enter new password...'
                {...register("password", {required: true,minLength:{value:8,message:"Password not less then 8 characters"}})} 
                />
                {error.password && <p className='mt-2 px-3 text-red-600 '>{error.password.message}</p>}
            </div>
            <div className='mt-3 px-3'>
                <Input
                className="border-emerald-950 hover:border-emerald-800"
                label="Confirm Password "
                type='password'
                placeholder='Confirm password...' 
                {...register("password2",{required:true,validate:(value)=>value===getValues("password") || "Password not match"})}
                />
                {error.password2 && <p className='mt-2 px-3 text-red-600 '>{error.password2.message}</p>}
            </div>
            <div className='mt-3 px-3'>
                <Button 
                className=' bg-emerald-950 text-orange-200 hover:bg-emerald-800 '
                type='submit'>Create Account </Button>
            </div>
            <div className='mb-3 mx-auto'>
                <Link to={'/login'}><p >If you already have Account? <p className='hover:text-cyan-700'>Login</p></p></Link>
            </div>
        </form>
    </div>
  )
}

export default Signup