const express = require('express')
const userRouter = require('./user')
const accountRouter = require('./account')
const router = express.Router()

// Routing to /api/v1/user
router.use("/user",userRouter);
router.use("/account",accountRouter);


module.exports = router;