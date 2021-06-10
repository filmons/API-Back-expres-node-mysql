//const {require, response} = require('express')
const express = require('express');

const userRouter = express.Router();

const ContrlUser = require('../controllers/usercontroler')

userRouter.get("/V1/users",ContrlUser.findAllUsers);
userRouter.post("/V1/signup", ContrlUser.newUser);
userRouter.post("/V1/sigin", ContrlUser.findUser);



module.exports = userRouter;
