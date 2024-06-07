const express = require("express");
const cors = require("cors")
const mainRouter = require("./routes/index")

// Express boilerplate
const app = express();
app.use(cors())
app.use(express.json())

// Routing
app.use('/api/v1',mainRouter);

app.get('/',(req,res)=>{
    res.json({msg: 'hello'})
})

// Listening to a PORT
app.listen(3000,
    console.log(`Server started listening on port 3000`)
)