import React, { useEffect, useState } from 'react'
import { Container,  } from '../components'
import databaseServices from '../Backend/Database'
import { Query } from 'appwrite'
import { useSelector } from 'react-redux'
import {Post} from '../components'
function MyPosts() {
  const [post, setPost] = useState([])
  const userData = useSelector((state)=>state.auth.userData)
  const id = userData.$Id
  useEffect(()=>{
    databaseServices.postList([Query.equal("userId",userData.$id)]).then((post)=>{
      if(post){
        setPost(post)
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