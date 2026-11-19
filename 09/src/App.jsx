import './App.css'
import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import AuthService from './Backend/Auth'
import {login,logout} from './store/authSlice'
import {Header,Footer} from './components/index'
import { Outlet } from 'react-router-dom'
function App() {
  const [isloading,setIsloading]=useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    AuthService.getCurrentUser()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setIsloading(false))
  },[]);
  if (!isloading){
   return  <>
    <div className='bg-slate-900'><Header/></div>
    <div className='text-cyan-50 text-center font-bold font-serif text-3xl '><Outlet/></div>
    <div className='bg-slate-900'><Footer/></div>
    </>
  }else{
    return(
      <div>
        <h1>Loading 🔄</h1>
      </div>
    )
  }
}


export default App
