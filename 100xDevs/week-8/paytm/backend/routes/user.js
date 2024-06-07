const express = require("express");
const { User, Account } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const { userSignupValidation, userSigninValidation, userValidation } = require("../validation");
const authMiddleware = require('../middleware');
router.use(express.json());


router.post("/signup", async (req, res) => {
  // Get the body data and validate using zod
  const parsedData = userSignupValidation.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(411).json({
      message: "Validation failed",
      errors: parsedData.error.issues,
    });
  }
  // Check if a person with that email(userid) already exists
  const existingUser = await User.findOne({
    username: req.body.username
  })

  
  if(existingUser){
    return res.status(411).json({
        message: "User with this Email already exists" 
    })
  }

  try {
    const { firstname, lastname, username, password } = parsedData.data;

    const user = await User.create({
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
    });
     
    const userId = user._id;

     // Account creation of user with some random balance
     await Account.create({
      userId,
      balance: 1 + Math.random() * 10000
    })   


    let jwtToken = jwt.sign({ userId }, JWT_SECRET);

    res.status(201).json({
      msg: "User created succesfully",
      token: jwtToken,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message || "Internal Server Error",
    });
  }
});

router.post("/signin", async (req, res) => {
    
    const parsedData = userSigninValidation.safeParse(req.body);
    if(!parsedData.success){
        return res.status(500).json({
            message: "Validation Error",
            errors: parsedData.error.issues,
        })
    }

    const {username, password} = parsedData.data;

    const user = await User.findOne({
        username: username,
        password: password
    })
    if(!user){
        return res.status(411).json({
            message: "Error while loggin in !"
        })
    }
    const userId = user._id;
    let jwtToken = jwt.sign({ userId }, JWT_SECRET);
    return res.status(200).json({
        token: jwtToken
    })
});

router.put("/", authMiddleware, async (req,res) => {
    const parsedData = userValidation.safeParse(req.body);
    if(!parsedData.success){
      return res.status(500).json({
          message: "Validation Error",
          errors: parsedData.error.issues,
      })
    }

    try{
    const userUpdate = await User.updateOne({ _id: req.userId }, req.body);
      if(userUpdate.acknowledged){
        return res.status(200).json({
          message: "User updated Successfully"
        })
      }
    }catch(err){
      res.status(500).json({
        error: err.message || "Internal Server Error",
      });
    }
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
 
  const users = await User.find({
      $or: [{
          firstname: {
              "$regex": filter
          }
      }, {
          lastname: {
              "$regex": filter
          }
      }]
  })
  res.json({
      user: users.map(user => ({
          username: user.username,
          firstName: user.firstname,
          lastName: user.lastname,
          _id: user._id
      }))
  })
})

module.exports = router;
