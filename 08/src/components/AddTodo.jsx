import React from 'react'
import {addTodo} from '../TodoSlice'
import {useDispatch} from 'react-redux'
function AddTodo() {
    const [todo,setTodo]=React.useState([])
    const dispatch = useDispatch()
    const addHandle = (e)=>{
        e.preventDefault()
        dispatch(addTodo(todo))
        setTodo("")
    }
  return (
    <form  onSubmit={addHandle}className="flex">
            <input
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
  )
}

export default AddTodo