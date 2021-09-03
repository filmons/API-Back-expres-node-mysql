const express = require('express');
const CalssRouters = require('./classR');
const userRouter = require('./user')
const MessesRouter = require('./messesRoute')
const router = express.Router();
router.use(CalssRouters);
router.use(MessesRouter);
router.use(userRouter);
router.use('*' ,(request, response) => {
    response.status(400).json({
        message:'this rout is not found'
    })
})

module.exports = router;
