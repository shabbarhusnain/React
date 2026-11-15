import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { store } from '../store'
import { removeTodo,updateTodo } from '../TodoSlice'
function TodoList({todo}) {

   const [isEditable,setisEditable]=useState(false)
    const dispatch=useDispatch()
    const handleUpdate=(e)=>{
    dispatch(updateTodo({id:todo.id, text:(e.target.value)}))

    }
  return (
    <>
    <div>My Todos</div>
        <input 
        readOnly={!isEditable}
        value={todo.text}
        onChange={handleUpdate}
        />{todo.text}
        <button
        onClick={()=>setisEditable(true)}
        >✏️</button>
        <button
        type="button"
        onClick={()=>dispatch(removeTodo(todo.id))}
        
        >❌</button>
    </>
  )
}

export default TodoList