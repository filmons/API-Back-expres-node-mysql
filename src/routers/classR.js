//const {require, response} = require('express')
const express = require('express');

const CalssRouter = express.Router();

const classController = require('../controllers/classCo')

//router.get('/signup',ContrlUser.signup)
//cityRouter.get("/V1/", ContrlUser.findAll);
CalssRouter.get("/cours", classController.findAllClass);//ok
CalssRouter.post("/cours", classController.addOneClass);//ok
CalssRouter.post("/cours/edit/:id", classController.editOneClass);//
CalssRouter.post("/cours/:id", classController.deleteOne);//
    
//userRouter.get("/api/user", ContrlUser.findAll);



module.exports = CalssRouter;
