import React, { useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import databaseServices from '../Backend/Database'
import { Container,PostForm } from '../components'
function EditPost() {
    const [post, setPost] = React.useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        databaseServices.singlePost(slug).then((post)=>{
            if (post){
                setPost(post)
            }else{
                navigate('/')
            }
        })
    },[navigate,slug])
    return post? <Container>
        <div className='py-8'>
            <PostForm post={post} />
        </div>
    </Container>:null
  
}

export default EditPost