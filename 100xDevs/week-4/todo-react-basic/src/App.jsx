import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([])

  function addTodo(){
    let newTodo = {
      id: todos.length + 1,
      title: 'Learn Everything',
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {
        todos.map(function(todo) {
          return <Todo key={todo.id} title={todo.title} completed={todo.completed} />
        })
      }
    </>
  )
}


function Todo(props){
  return (
    <div id={props.id}>
      <h1>{props.title}</h1>
      <p>{JSON.stringify(props.completed)}</p>
    </div>
  )
}

export default App
