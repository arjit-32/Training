const express = require("express")
const { Account, User } = require("../db");
const authMiddleware = require("../middleware");
const { transferMoneyValidation } = require("../validation");
const { default: mongoose } = require("mongoose");
const router = express.Router();

router.get("/balance", authMiddleware, async (req,res)=>{
    const balance = await Account.findOne({
        userId: req.userId
    })

    res.status(200).json(balance);
})

router.post("/transfer", authMiddleware, async (req,res) => {
    // start a transaction
    const session = await mongoose.startSession();
    session.startTransaction();

    const parsedData = transferMoneyValidation.safeParse(req.body);
    const {to, amount} = parsedData.data;

    const account  = await Account.findOne({ userId: req.userId}).session(session)
    
    if(!account || account.balance<amount){
        await session.abortTransaction();
        return res.status(400).json({message: "Insufficient Balance"})
    }
    
    const toAccount = await Account.findOne({ userId: to }).session(session)
    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({message: "Invalid Account"})
    }

    // Transfer
    await Account.updateOne({ userId : to },{ $inc: { balance: amount }}).session(session);
    await Account.updateOne({ userId : req.userId },{ $inc: { balance: -amount }}).session(session);
   
    
    // Commit the transaction
    await session.commitTransaction();
    res.json({ message: "Transfer Success"})
})



module.exports = router;