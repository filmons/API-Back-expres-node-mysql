
const express = require('express');
const verifyToken = require('../middlewaires/isAuth')

const CalssRouter = express.Router();
const classController = require('../controllers/classCo')
CalssRouter.get("/cours", classController.findAllClass);//ok
CalssRouter.post("/cours", classController.addOneClass);//ok
CalssRouter.put("/cours/edit/:id",  classController.editOneClass);//
CalssRouter.delete("/cours/delete/:id",classController.deleteOne);// en cours 
    
module.exports = CalssRouter;
