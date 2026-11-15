import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLenght] = useState(8)
  const [password, setPassword] = useState("")
  const [isNum, setIsNum] = useState(false)
  const [isChar, setIsChar] = useState(false)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "asdfghjklpoiuytrewqzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if (isNum) str += "0987654321"
    if (isChar) str += "[]-=!@#$%^&*()<>?:{}|~"
    for (let i = 1; i<=length; i++) {
      let randomIndex=Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(randomIndex)   
    }
    setPassword(pass)
  },[length,setPassword,isChar,isNum])
useEffect(()=>{
  passwordGenerator()
},[passwordGenerator,length,isChar,isNum])
const passwordRef=useRef(null)
const copyToClipbord=useCallback(()=>{
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
},[password])

  return (
    <div className='w-full max-w mx-auto shadow-xl rounded-xl px-4 my-8 text-black bg-gray-800 Card'>
      <h1>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 passwordinput'>
        <input 
          className='outline-none w-full py-1 px-3 '
          type="text"
          placeholder='password'
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={copyToClipbord}
        type='button'
        className='outline-none bg-blue-400 px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='shadow-xl mb-4 p-3 m-3 text-white '>
        <input
        className='ml-3 cursor-pointer'
        type="range"
        value={length}
        min={1}
        max={100}
        onChange={(e)=>{setLenght(e.target.value)}}
        />
        <label className='p-3'> 
          Length {length}</label>
        
        <input
        className='ml-3'
        type='checkbox'
        defaultChecked={isNum}
        onChange={()=>{setIsNum((prev) => !prev)}}
        />
        <label className='p-1' >
           Numbers </label>
        <input
        className='ml-3'
        type='checkbox'
        defaultChecked={isChar}
        onChange={()=>{setIsChar((prev) => !prev)}}
        />
        <label className='p-1'>Special characters </label>
      </div>
    </div>
  )
}

export default App
