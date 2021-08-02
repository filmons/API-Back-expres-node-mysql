const { request } = require("express");// import express
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors"); // pour eviter que tous puissent taper sur mon API
const router = require("./src/routers/route");
require("dotenv").config();
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 8000;

app.use( cors()); // pour autoriser le fetch
app.use(morgan("dev"));
app.use(express.json());// poutr passer les données resus par le body en forma json
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use("/V1",router);

app.listen(port, () => {
console.log("Server app listening on port " + port);// 
});
