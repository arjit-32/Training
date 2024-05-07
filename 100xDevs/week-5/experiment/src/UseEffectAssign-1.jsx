import { useState, memo, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const res = fetch("https://sum-server.100xdevs.com/todos")
      .then(res => res.json())
      .then(data => setTodos(data.todos))
  }, [])

  return (
    <>
    {
      todos.map( todo => {
        return <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </div>
      })
    }
    </>
  )
}

export default App
