import React, { useEffect } from 'react'
import databaseServices from '../Backend/Database'
import {Container,PostCard} from '../components'
function Home() {
  const [post, setPost] =useState([])
  useEffect(()=>{
      databaseServices.postList().then((post)=>{
        setPost(post.documents)
      })
  },[])
  if(post.length===0){
    return(
      <Container>
        <div className='flex justify-center'>
        <h1>There No Post Yet</h1>
      </div>
      </Container> 
    )
  }
  return (
    <Container>
      <div className='grid gap-4'>
        {post.map((post)=>{
          <div key={post.$id} value={post}> <PostCard {...post} /> </div>
        })}
      </div>
    </Container>
  )
}

export default Home