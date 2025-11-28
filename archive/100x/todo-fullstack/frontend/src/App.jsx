import { useState, useEffect } from 'react'
import './App.css'
import { Todos } from './components/Todos'
import { CreateTodo } from './components/CreateTodo'

function App() {
  
  const [todos, setTodos] = useState([]); 

  // Infinite Request to get TODOS - WRONG WAY
  // instead use useEffect hook
  fetch("http://localhost:3000/todos")
    .then(res=>res.json())
    .then(todos=>setTodos(todos)) 
  
 
  return (
    <>
      <h1>Todo Application</h1>
      <CreateTodo/>
      <br />
      <Todos todos={todos}/>
    </>
  )
}

export default App
