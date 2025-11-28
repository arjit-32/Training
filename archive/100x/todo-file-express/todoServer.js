const fs = require('fs');
const express = require('express');
const app = express();
const port= 3000;
const cors = require('cors');
app.use(cors());

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

app.get('/', (req,res) => {
   res.send("hello world");
})

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
