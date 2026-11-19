import React, { useEffect, useState } from 'react'
import databaseServices from '../Backend/Database'
import {useParams,useNavigate, Link} from 'react-router-dom'
import { Button, PostForm } from '../components'
function Post() {
    const [isEdit,setIsEdit] = useState(false)
    const [post, setPost] = useState(null)
    const userData = useSelector((state)=>state.auth.userData)
    const navigate = useNavigate()
    const {$id} = useParams()
    useEffect(()=>{
        databaseServices.singlePost($id).then((post)=>setPost(post))
    },[])
    const isAuth = post && userData? post.userId ===userData.$id :false

    const deletePost = ()=>{
        const postDeleted = databaseServices.deletePost($id)
        if(postDeleted){
            databaseServices.deleteFile(post.featuredimage)
            navigate('/')
        }else{
            navigate('/')
        }
    }

  return (
        <div className='flex flex-col justify-between h-96 p-5 border-2 border-orange-400 group bg-orange-200 hover:bg-orange-400 rounded-xl'>
            <div>
                <img src={databaseServices.previewFile(post.featuredimage)} alt={title} />
            </div>
            <div className='font-serif font-bold text-emerald-900 group-hover:text-emerald-700'>
                <h2>{post.title}</h2>
            </div>
            <div className='text-emerald-900 group-hover:bg-orange-400 bg-orange-200 border-2 border-orange-400 rounded-lg p-3'>
                <p>{parse(post.content)}</p>
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