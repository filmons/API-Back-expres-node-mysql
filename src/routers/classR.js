
const express = require('express');
const isAuth = require('../middlewaires/isAuth');

const CalssRouter = express.Router();
const classController = require('../controllers/classCo');

CalssRouter.get("/cours", classController.findAllClass);
CalssRouter.post("/cours",isAuth,classController.addOneClass);
CalssRouter.put("/cours/edit/:id", classController.editOneClass);
CalssRouter.delete("/cours/delete/:id", classController.deleteOne);
    
module.exports = CalssRouter;
