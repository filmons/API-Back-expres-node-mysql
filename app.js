const { request } = require("express");
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const router = require("./src/routers/route");
require("dotenv").config();

const port = process.env.PORT || 8000;

//require('doenv').config();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.listen(port, () => {
app.use(express.urlencoded({ extended: true }));
app.use("/V1/",router);
console.log("Server app listening on port " + port);
});
