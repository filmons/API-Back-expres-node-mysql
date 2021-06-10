//const {require, response, request} = require('express')
const express = require('express');
//const userRouter = require('../routers/user');
const cityRouter = require('../routers/city');
const userRouter = require('../routers/user')
const router = express.Router();

router.use(cityRouter);
router.use(userRouter);

router.get('/V1', (req, res) => {
    //res.set('Content-Type', 'text/html');
    res.send('Hello World !!');
});

router.use('*' ,(request, response) => {
    response.status(400).json({
        message:'this rout is not found'
    })
})




module.exports = router;
