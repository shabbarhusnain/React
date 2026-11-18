import React from 'react'
import {Link} from 'react-router-dom'
import databaseServices from '../Backend/Database'
function PostCard({$id,title,featuredimage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='flex flex-col justify-between h-96 p-5 border-2 border-orange-400 group bg-orange-200 hover:bg-orange-400 rounded-xl'>
            <div>
                <img src={databaseServices.previewFile(featuredimage)} alt={title} />
            </div>
            <div className='text-emerald-900 group-hover:text-emerald-700'>
                <h2>{title}</h2>
            </div>
        </div>
    </Link>
  )
}

export default PostCard