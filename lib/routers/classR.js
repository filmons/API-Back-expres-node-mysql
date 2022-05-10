const express = require('express'); //const isAuth = require('../middlewaires/isAuth');


const CalssRoute = express.Router();

const classController = require('../controllers/classCo');

CalssRoute.get("/cours", classController.findAllClass);
CalssRoute.post("/cours", classController.addOneClass);
CalssRoute.put("/cours/edit/:id", classController.editOneClass);
CalssRoute.delete("/cours/delete/:id", classController.deleteOne);
module.exports = CalssRoute;