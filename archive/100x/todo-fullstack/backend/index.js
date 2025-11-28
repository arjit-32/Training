const express = require('express')
const { Todos } = require("./db")
const { TodoParam, TodoValidator, updateTodoValidator } = require("./types")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())
app.get('/todos', async (req, res) => {
    try{
        const alltodos = await Todos.find({});
        res.send(alltodos)
    }catch(err){
        res.status(411).json({
            msg: "You sent the wrong input"
        })
    }
})

app.post('/todos', async (req, res) => {
    const payload = req.body;
    const parsedPayload = TodoValidator.safeParse(payload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong input"
        })
        return;
    }

    try{
        await Todos.create(parsedPayload.data)
        res.send("Todo created successfully")
    }catch(err){
        res.send("Error creating todo")
    }
})

app.put('/todos/:id', async (req, res) => {
   const paramId = req.params.id;
   const parsedparamId = TodoParam.safeParse(paramId);

   const payload = req.body;
   const parsedPayload = updateTodoValidator.safeParse(payload);

   if(!parsedparamId.success){
    res.status(411).json({
        msg: "You sent the wrong Todo Id"
    })
   }
   if(!parsedPayload.success){
    res.status(411).json({
        msg: "You sent the wrong input"
    })
   }

   try{
        await Todos.findByIdAndUpdate( parsedparamId.data, parsedPayload.data)
        res.send("Todo Updated Successfully")
   }catch(err){
        res.send("Error updating Todo")
   }
})

app.delete('/todos/:id',async (req, res) => {
    const deleteParamId = req.params.id;
    const parseDeleteParamId = TodoParam.safeParse(deleteParamId)
 
    if(!parseDeleteParamId.success){
        res.status(411).json({
            msg: "You sent the wrong Todo Id"
        })
    }

    try{
        await Todos.deleteOne({ _id: parseDeleteParamId.data });
        res.send("Todo Deleted successfully")
    }catch(err){
        res.send("Error deleting Todo")
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
