const express = require("express");

const userRouter = express.Router();

const ContrlUser = require("../controllers/usercontroler");

userRouter.get("/users", ContrlUser.findAllUsers);
userRouter.post("/signup", ContrlUser.newUser);
userRouter.post("/sigin", ContrlUser.findUser); //userRouter.delete("/logout", ContrlUser.logout);

module.exports = userRouter;