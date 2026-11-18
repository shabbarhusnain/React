import React,{useState,useCallback, useEffect} from 'react'
import {Button,Input,RTE,Select} from '../index'
import databaseServices from '../../Backend/Database'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

function PostForm(post) {
   const [register,handleSubmit,watch,setValue,getValues,control] = useForm({
      defaultValues:{
        title:post?post.title:"",
        slug:post?post.slug:"",
        content:post?post.content:"",
        status:post?post.status:"active"
      }
    })
    const navigate =useNavigate()
    const userData = useSelector((state)=>state.auth.userData)

    const submit = async (data)=>{
      //for update
      if (post){ //agr user na post prop diya ha to
        const image = data.image[0]? await databaseServices.uploadFile(data.image[0]) : undefined;
        if (image){
            await databaseServices.deleteFile(data.featuredimage)
        }
        const fileId=image.$id
        await databaseServices.updatePost(userData.$id,{...data,featuredimage:image? fileId :undefined})
        navigate(`/post/${userData.$id}`)
      }else{
        const image = data.image[0]? await databaseServices.uploadFile(data.image[0]):undefined;
        if (image){
          const fileId=image.$id
          data.featuredimage=fileId
          const newPost = await databaseServices.createPost({...data,userid:userData.$id})
          if (newPost){
            navigate(`/post/${userData.$id}`)
          }
        }
      }    
    }

    const slugTransform = useCallback((value)=>{
      if(value && typeof value === String){
        return value
          .trim()
          .toLowerCase()
          .replace(/^[a-zA-Z\d\s]+/g,'-')
          .replace(/s\+/g,"-")
      }
      return ""
    },[])

   useEffect(()=>{
    const subscription = watch((value,{name})=>{
      if(name=="title"){
        setValue("slug",slugTransform(value.title,{shouldValidate:truee}))
      }
      subscription.unsubscribe()
    },[watch,slugTransform,])
  })
  return (
   <div className="max-w-6xl mx-auto my-8 p-6 bg-orange-200 text-emerald-950 font-serif font-semibold border-orange-400 border-4 hover:bg-orange-300">
  <form onSubmit={handleSubmit(submit)} className="flex flex-col lg:flex-row gap-8">
    
    {/* Left Column (Main Content: Title, Slug, RTE Editor) */}
    <div className="w-full lg:w-2/3 space-y-5">
      <Input
        label="Title"
        type="text"
        placeholder="Title"
        className="w-full px-4 py-2.5 rounded-lg"
        {...register("title", { required: true })}
      />

      <Input
        // readOnly
        label="Slug"
        placeholder="Slug"
        className="w-full px-4 py-2.5 rounded-lg"
        {...register("slug", { required: true })}
        onInput={(e) => setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })}
      />

      <RTE
        label="Write your blog here..."
        name="content"
        control={control}
        defaultValue={post ? getValues("content") : ""}
      />
    </div>

    {/* Right Column (Sidebar: Image Preview, File Upload, Status, Submit Button) */}
    <div className="w-full lg:w-1/3 space-y-5">
      {post && (
        <div className="w-full h-48 rounded-xl overflow-hidden">
          <img
            src={databaseServices.previewFile(post.featuredimage)}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <Input
        type="file"
        label="Image"
        accept="image/png, image/jpg, image/jpeg, image/gif"
        className="w-full px-3 py-2 rounded-lg"
        {...register("image", { required: !post })}
      />

      <Select
        options={["active", "inactive"]}
        label="Status"
        className="w-full px-4 py-2.5 rounded-lg"
        {...register("status")}
      />

      <Button
        type="submit"
        className="btn-primary w-full py-3 px-6 rounded-lg cursor-pointer"
        children={post ? "Update Blog" : "Post Blog"}
      />
    </div>

  </form>
</div>

  )
}

export default PostForm