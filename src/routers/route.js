//const {require, response, request} = require('express')
const express = require('express');
//const userRouter = require('../routers/user');
const CalssRouter = require('../routers/classR');
const userRouter = require('../routers/user')
const router = express.Router();

router.use(CalssRouter);
router.use(userRouter);

router.use('*' ,(request, response) => {
    response.status(400).json({
        message:'this rout is not found'
    })
})


module.exports = router;
