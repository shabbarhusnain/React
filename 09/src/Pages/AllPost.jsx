import React,{useEffect, useState} from 'react'
import {Container,PostCard} from '../components/index'
import databaseServices from '../Backend/Database'
function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
            databaseServices.postList([]).then((post)=>{
            setPosts(post.documents)
            console.log("ye ha list wali documents post",post.documents)
        })
        
        
    },[])
    return(<Container>
        { posts?.map((post)=>{
            return(
            <div key={post.$id} value={post.title}>
                <PostCard {...post} />
            </div>)})
            }
    </Container>)
}

export default AllPost