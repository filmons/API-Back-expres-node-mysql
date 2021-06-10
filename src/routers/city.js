//const {require, response} = require('express')
const express = require('express');

const cityRouter = express.Router();

const ContrlUser = require('../controllers/cityControl')

//router.get('/signup',ContrlUser.signup)
cityRouter.get("/V1/city", ContrlUser.findAll);
//userRouter.get("/api/user", ContrlUser.findAll);



module.exports = cityRouter;
