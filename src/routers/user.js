//const {require, response} = require('express')
const express = require('express');

const userRouter = express.Router();

const ContrlUser = require('../controllers/usercontroler')

userRouter.get("/users",ContrlUser.findAllUsers);
userRouter.post("/signup", ContrlUser.newUser);
userRouter.post("/sigin", ContrlUser.findUser);



module.exports = userRouter;
