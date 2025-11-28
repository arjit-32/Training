import { useState } from "react"

export function CreateTodo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input
        style={{
            padding: 10,
            margin: 10
        }}
        type="text" placeholder="titile" onChange={(e)=>{
            setTitle(e.target.value)
        }}/> 
        
        <br />
        
        <input 
        style={{
            padding: 10,
            margin: 10
        }}
        type="text" placeholder="description" onChange={(e)=>{
            setDescription(e.target.value)
        }}/> <br />

        <button onClick={()=>{
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async (res) => {
                    const json = await res.json();
                    alert("Todo Added");
                })   
        }}>Add</button>
    </div>
}