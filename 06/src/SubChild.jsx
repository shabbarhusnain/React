import React, { useEffect } from 'react'
import useTheme from './ThemeContext'

function SubChild() {
const [themeMode,setThemeMode]=React.useState('light')
function darkTheme(){
    setThemeMode('dark')
}
function lightTheme(){
    setThemeMode('light')
}
useEffect(()=>{
document.querySelector('html').classList.remove('light','dark')
document.querySelector('html').classList.add(themeMode)
},[themeMode])
function handleTheme(){
    if (themeMode=='light'){ return darkTheme()}
        else{return lightTheme()}
}
  return (
    <>
    <input value={''}
    type='checkbox'

    onChange={handleTheme}

    />
    </>
  )
}

export default SubChild