/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */

const fs = require('fs');
const express = require('express');
const app = express();
const port= 3000;

//  Todo Operations 

function getAllTodos(){
  return new Promise((resolve,reject) => {
    fs.readFile('todos.json','utf-8',(err,data)=>{
      if(err){
        console.error("Could'nt read File ", err);
        reject(err)
        return;
      }
      resolve(JSON.parse(data));
    });
  });
}

async function getTodoBasedOnId(id){
  todos = await getAllTodos()
  for(let todo of todos){
      if(todo.id==id) return todo;
  }
}


async function addTodo(todo) {
  todos = await getAllTodos()
  todos.push(todo);
  return new Promise((resolve, reject) => {
    fs.writeFile('todos.json', JSON.stringify(todos), err => {
      if (err) {
        console.error("Couldn't write to file ", err);
        reject(err);
        return;
      }
    resolve(todo);
    });
  });
}


async function editTodoById(id, newTodo) {
  let todos = await getAllTodos();
  
  let index;
  for(let todo of todos){
    if(todo.id==id) index = todo.id-1;
  }
  if (index !== -1) {
    todos[index] = { ...todos[index], ...newTodo };
    
    return new Promise((resolve, reject) => {
      fs.writeFile('todos.json', JSON.stringify(todos), err => {
        if (err) {
          console.error("Couldn't write to file ", err);
          reject(err);
          return;
        }
        resolve(todos);
      });
    });
  } else {
    return Promise.reject("Todo not found");
  }
}


async function deleteTodoById(id) {
  let todos = await getAllTodos();
  let index;
  for(let todo of todos){
    if(todo.id===id) index = todo.id-1;
  }

  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1);
    return new Promise((resolve, reject) => {
      fs.writeFile('todos.json', JSON.stringify(todos), err => {
        if (err) {
          console.error("Couldn't write to file ", err);
          reject(err);
          return;
        }
        resolve(deletedTodo);
      });
    });
  } else {
    return Promise.reject("Todo not found");
  }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.get('/todos', (req,res) => {
    getAllTodos().then((data)=>{
    res.send(data);
  }).catch((err)=>{
    console.log(err);
  });
})

app.get('/todos/:id', (req,res) => {
  getTodoBasedOnId(parseInt(req.params.id)).then(data =>[
    res.send(data)
  ])
})

app.post('/todos', (req,res)=> {
  addTodo(
    req.body
  ).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
})

app.put('/todos/:id', (req,res)=>{
  editTodoById(parseInt(req.params.id), req.body).then((data)=>{
    res.send(data);
  }).catch((err)=>{
    res.send(err);
  })
});

app.delete('/todos/:id', (req,res)=>{
  deleteTodoById(parseInt(req.params.id)).then((data)=>{
    res.send(data);
  }).catch((err)=>{
    res.send(err);
  });
});

app.listen(port, () => {
  console.log(`Todo HTTP server listening on port ${port}`)
})
