import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import AuthService from '../Backend/Auth'
import {logout} from '../store/authSlice'
function Logoutbtn() {
    const dispatch=useDispatch()
    const Handler=()=>{
        AuthService.logoutFromThis()
        .then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='btn btn-primarypx-5 py-2 bg-red-900 hover:bg-red-700 text-white font-medium rounded-lg transition cursor-pointer' onClick={Handler}>Logout</button>
  )
}

export default Logoutbtn