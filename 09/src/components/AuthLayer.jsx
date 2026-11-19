import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
export default function Protection({children,authentication=true}) {
    const [isloading, setIsLoading] = useState(true)
    const authStatus = useSelector((state)=>state.auth.status)
    const navigate=useNavigate()
    useEffect(()=>{
        if (authentication && authStatus !== authentication){
            navigate('/login')
        }else if (!authentication && authStatus !== authentication){
            navigate('/')
        }
        setIsLoading(false)
    },[authStatus,authentication,navigate])
  return isloading ? <h1>Loading...</h1> : <>{children} </>
}

