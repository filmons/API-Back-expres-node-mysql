const {
  request
} = require("express"); // import express


const express = require("express");

const morgan = require("morgan");

const app = express();

const cors = require("cors"); // pour eviter que tous puissent taper sur mon API


const router = require("./routers/route");

require("dotenv").config();

const cookieParser = require('cookie-parser');

const port = process.env.PORT;
app.use(cors()); // pour autoriser le fetch via http

app.use(morgan("dev"));
app.use(express.json()); //a method inbuilt in express to 
//recognize the incoming Request Object as a JSON Object

app.use(express.urlencoded({
  extended: true
})); // as strings or arrays.

app.use(cookieParser());
app.use("/V1", router);
app.listen(port, () => {
  console.log("Server app listening on port " + port);
});