import React from 'react'
import {Logoutbtn,Container,Logo} from '../index'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../Backend/Auth'
function Header() {
  const authStatus = useSelector((state)=>(state.auth.status))
  const userData= useSelector((state)=>(state.auth.userData))
  const navigate= useNavigate()
  const navitems=[
    {
      id:"01",
      name:"Home",
      slug:"/",
      active:true
    },
    {
      id:"02",
      name:"All Post",
      slug:"/all-Post",
      active:authStatus
    },
    {
      id:"03",
      name:"My Posts",
      slug:'/my-post',
      active:authStatus
    },
    {
      id:"04",
      name:"Login",
      slug:"/login",
      active:!authStatus
    },
    {
      id:"05",
      name:"Signup",
      slug:"/signup",
      active:!authStatus
    },{
      id:"05",
      name:"Add Post",
      slug:'/add-post',
      active:authStatus
    },]
  return (
    <><Container> <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-orange-200 backdrop-blur-md border-b border-x-amber-950">
  <div className="text-2xl font-bold text-emerald-900">BrandName</div>
  <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
    <Link to="/"><Logo /></Link>
    <ul>{navitems.map((item)=>item.active ? (<li 
    key={item.id}>
      <button
      className="hover:text-emerald-800 transition"
      onClick={()=>navigate(item.slug)}
      >{item.name}</button>
      </li>) : null)}</ul>
  </div>
  {authStatus && userData ? <Logoutbtn />: null}
    

</nav></Container></>
  )
}

export default Header