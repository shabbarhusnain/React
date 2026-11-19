import React,{useEffect, useState} from 'react'
import {Container,PostCard} from '../components'
import databaseServices from '../Backend/Database'
function AllPost() {
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{databaseServices.postList([]).then((posts)=>{
        if(posts) {setPosts(posts.documents)}
    })},[])
    return(<Container>
        { posts.map((post)=>{
            <div key={post.$id} value={post}>
                <PostCard {...post} />
            </div>})}
    </Container>)
}

export default AllPost