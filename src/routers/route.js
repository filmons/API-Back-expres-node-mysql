const express = require('express');
const CalssRouter = require('../routers/classR');
const userRouter = require('../routers/user')
const MessesRouter = require('./messesRoute')
const router = express.Router();
router.use(CalssRouter);
router.use(MessesRouter);
router.use(userRouter);
router.use('*' ,(request, response) => {
    response.status(400).json({
        message:'this rout is not found'
    })
})

module.exports = router;
