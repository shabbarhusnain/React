import React from 'react'
import {useState,useContext} from 'react'
import UserContext from '../UseContext'

function Login() {
  const [username, setUsername]=useState('')
  const [password, setPassword]=useState('')
  const {setUser} =useContext(UserContext)
  const handle=(e)=>{
      e.preventDefault()
      setUser({username,password})
  }
  return (
    <>
    <form>
      <label>name</label>
      <input
      type='text'
      value={username}
      onChange={(e)=>(setUsername(e.target.value))}      />
       <label>password</label>
    <input
    type='password'
      value={password}
      onChange={(e)=>(setPassword(e.target.value))}   
    />
    <button 
    type='submit'
    onClick={handle}>Submit</button>
    </form>
    </>
    
  )
}

export default Login