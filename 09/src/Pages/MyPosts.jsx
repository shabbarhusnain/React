import React, { useEffect, useState } from 'react'
import { Container,PostCard  } from '../components/index'
import databaseServices from '../Backend/Database'
import { Query } from 'appwrite'
import { useSelector } from 'react-redux'

function MyPosts() {
  const [post, setPost] = useState([])
  const userData = useSelector((state)=>state.auth.userData)
  useEffect(()=>{
    databaseServices.postList([Query.equal("userid",userData.$id)]).then((post)=>{
      if(post){
        setPost(post.documents)
      }
    })
  },[])
  return (
    <Container>{
      post?.map((post)=>
        <div key={post.$id} value={post} className='grid'>
          <PostCard {...post}/>
        </div>
      )
      }</Container>
  )
}

export default MyPosts