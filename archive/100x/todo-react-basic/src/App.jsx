import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([])
  const[userInput, setUserInput] = useState()

  function addTodo(){
    let newTodo = {
      id: todos.length + 1,
      title: userInput,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <textarea value={userInput} onChange={(x)=>setUserInput(x.target.value)} name="userInput" id="userInput" />
      <button onClick={addTodo}>Add Todo</button>
      {
        todos.map(function(todo) {
          return <Todo key={todo.id} title={todo.title} completed={todo.completed} />
        })
      }
    </>
  )
}


function Todo({id, title, completed}){
  return (
    <div id={id}>
      <h1>{title}</h1>
      <p>{JSON.stringify(completed)}</p>
    </div>
  )
}

export default App
