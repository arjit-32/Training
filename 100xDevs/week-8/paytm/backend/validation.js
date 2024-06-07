const zod = require("zod");

const userSignupValidation = zod.object({
  firstname: zod.string(),
  lastname: zod.string(),
  username: zod.string().email(),
  password: zod.string().min(5),
});

const userSigninValidation = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

const userValidation = zod.object({
  password: zod.string().optional(),
  firstname: zod.string().optional(),
  lastname: zod.string().optional()
})

const transferMoneyValidation = zod.object({
  to: zod.string(),
  amount: zod.number() 
})


module.exports = {
    userSignupValidation,
    userSigninValidation,
    userValidation,
    transferMoneyValidation
}