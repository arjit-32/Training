export function Todos({todos}){

    return <div>
        { // Start of a Javascript expression 
        
        // Creating JSX element for each todo and finally map() function returns all this
        todos.map((todo) => {
            return <div>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
                <button>{todo.completed == true ? "Completed": "Mark as Completed"}</button>
            </div>
        })
        
        }
    </div>
}