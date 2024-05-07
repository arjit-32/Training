import { useState, memo, useEffect } from 'react'
import './App.css'

function App() {
  const [id, setId] = useState(1)
  return (
    <div>
        <button onClick={()=>{
            setId(id+1)
        }}>Next</button>
        <TodoComponent id={id} />
    </div>
  )
}

function TodoComponent({id}){

    const [todo, setTodo] = useState({})
    useEffect(()=> {
        fetch("https://sum-server.100xdevs.com/todo?id="+id)
            .then(res => res.json())
            .then(data => setTodo(data.todo))
    }, [id]);
    

    return <div id={todo.id}>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
    </div>
}

export default App
