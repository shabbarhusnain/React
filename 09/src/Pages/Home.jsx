import React, { useState,useEffect } from 'react'
import databaseServices from '../Backend/Database'
import {Container,PostCard} from '../components/index'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
function Home() {
  const [post, setPost] =useState([])
  const userData = useSelector((state)=>state.auth.userData)
  useEffect(()=>{
      databaseServices.postList().then((post)=>{
        setPost(post.documents)
      })
  },[])
if(!userData){
  return <Container>
        <Link to='/login'> 
          <div className='flex justify-center'>
            <h1>Please Login First</h1>
          </div>
        </Link>
      </Container> 
}else if(!userData && post.length===0){
    return(
      <Container>
        <div className='flex justify-center'>
        <h1>There is No Post Yet</h1>
      </div>
      </Container> 
    )
  }else if(post){
  return (
    <Container>
      <div className='grid gap-4'>
        {post?.map((post)=>{
          return(
          <div key={post.$id} value={post}> <PostCard {...post} /> </div>
        )})}
      </div>
    </Container>
  )}
}

export default Home