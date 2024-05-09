import { useState, memo, useEffect } from 'react'
import axios from 'axios'


function App() {

    const [todos, setTodos] = useState([]); 

    useEffect(() =>{
        axios.get("https://sum-server.100xdevs.com/todos")
            .then( res => setTodos(res.data.todos))
    }, [])

    return (
        <>
            {
                todos.map( todo=> 
                    <TodoComponent key={todo.id} title={todo.title} description={todo.description} />
                )
            }
        </>
    )
}

function TodoComponent({title, description}){
    return <div>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
}

export default App
