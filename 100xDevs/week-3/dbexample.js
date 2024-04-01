const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://admin:1234@cluster0.jsqhj.mongodb.net/",
);

const userSchema = mongoose.model("Users", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

async function userExists(username, password) {
    const user = await userSchema.findOne({ username: username });
    return user!==null;
}

app.post("/signup",function (req, res) {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
  
    const userDetails = new userSchema({
        name: name,
        username: username,
        password: password,
    });
    
    userDetails.save().then(doc => {
        res.send(doc);
    }).catch(err => console.error(err));
})

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    const allUsers = await userSchema.find({});
    for(let i=0; i<allUsers.length; i++) {
        if(allUsers[i].username === username) {
            allUsers.splice(i, 1);
            break;
        }
    }
    return res.json({
      users: allUsers,
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);