const express = require('express');

const MessesRouter = express.Router();

const messesController = require("../controllers/messesCo");

MessesRouter.get("/messes", messesController.findAllMesses);
MessesRouter.post("/messes", messesController.addOneMesse);
MessesRouter.put("/messes/edit/:id", messesController.editOneMesse);
MessesRouter.delete("/messes/delete/:id", messesController.deleteOneMess);
module.exports = MessesRouter;