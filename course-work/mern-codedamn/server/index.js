const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/mern-codedamn')

app.post('/api/register',async (req,res) => {
    console.log(req.body);
    try{
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({status: 'ok'})
    }catch(err){
        res.json({status: 'error', error: 'Duplicate email'})
    }
})

app.listen(1337, ()=>{
    console.log('server started on 1337')
})