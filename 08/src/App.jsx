import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { useSelector,useDispatch } from 'react-redux'
function App() {
const todos=useSelector(state=>state.todos)

const dispatch=useDispatch()

  return (
    <>
    <AddTodo/>
    {todos.map((todo)=> <li key={todo.id}><TodoList todo={todo}/></li>)}
    
     </>
  )
}

export default App
