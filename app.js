const { request } = require('express');
const express = require('express');
const morgan = require('morgan');
const app = express();
const router = require('./src/routers/route');
require('dotenv').config();

const port = process.env.PORT || 3000;



//require('doenv').config();
app.use(morgan('dev'));
app.use(express.json());
app.listen(port, () => {
app.use(router);
app.use(express.urlencoded({ extended: false }));
    console.log('Server app listening on port ' + port);
});