import React, { useEffect, useState } from 'react'
import databaseServices from '../Backend/Database'
import {useSelector} from 'react-redux'
import {useParams,useNavigate, Link} from 'react-router-dom'
import { Button, PostForm } from '../components/index'
import parse from 'html-react-parser'
function Post() {
    const [isEdit,setIsEdit] = useState(false)
    const [post, setPost] = useState(null)
    const userData = useSelector((state)=>state.auth.userData)
    const navigate = useNavigate()
    const {slug} = useParams()
    useEffect(()=>{
                    databaseServices.singlePost(slug).then((post)=>(
                    setPost(post)))  
                    },[slug])
    const isAuth = post && userData? post.userid ===userData.$id :false

    const deletePost = ()=>{
        const postDeleted = databaseServices.deletePost(slug)
        if(postDeleted){
            databaseServices.deleteFile(slug)
            navigate('/')
        }else{
            navigate('/')
        }
    }

  return (
        <div className='flex flex-col justify-between h-96 p-5 border-2 border-orange-400 group bg-orange-200 hover:bg-orange-400 rounded-xl'>
            <div>
            {post?.featuredimage && (
                <img
                src={databaseServices.previewFile(post.featuredimage)}
                alt={post.title}
                />
            )}
            </div>
            <div className=' mt-4 font-serif font-bold text-emerald-900 group-hover:text-emerald-700'>
                <h2>{post?.title}</h2>
            </div>
            <div className='mt-4 text-emerald-900 group-hover:bg-orange-400 bg-orange-200 border-2 border-orange-400 rounded-lg p-3'>
                <p>{post?.content? parse(String(post.content)):null}</p>
            </div>
            {isAuth? <div>
                <div>
                <Button 
                type="button"
                children="Edit Blog"
                onClick={()=>(
                       setIsEdit(true))}
                /></div>
                    <div><Button 
                    type="Button"
                    children='Delete Blog'
                    onClick={deletePost}
                    className='bg-red-800 hover:bg-red-950 border-red-500'
                    /></div>
            </div> : null}
            {isEdit && isAuth?<div> <PostForm post={post}/></div>:null}
        </div>
        
  )
}

export default Post