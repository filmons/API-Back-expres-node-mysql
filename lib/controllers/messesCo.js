const {
  response,
  request
} = require("express");

const Messe = require("../models/messesM");

exports.findAllMesses = (request, response) => {
  //const { classs} = request;
  Messe.findAllMesse((error, messes) => {
    if (error) {
      response.status(500).json({
        message: "le servre founuction plus."
      });
    } else {
      response.status(200).json({
        messes
      });
    }
  });
};

exports.addOneMesse = (request, response) => {
  Messe.createMesses(request.body, (error, result) => {
    if (error) {
      response.status(500).json({
        message: "there is probleme on your calnder adding server  Controller."
      });
    } else {
      response.status(200).json({
        message: "the Calader had been add"
      });
    }
  });
};

exports.editOneMesse = (request, response) => {
  const {
    id
  } = request.params;
  const {
    jours,
    dates
  } = request.body;
  Messe.editMesse(id, jours, dates, (error, result) => {
    if (error) {
      response.status(500).json({
        message: "there is probleme on your editeing server Controler."
      });
    } else {
      response.status(200).json({
        message: "the class has been edited "
      });
    }
  });
};

exports.deleteOneMess = (request, response) => {
  const {
    id
  } = request.params; //console.log(request.params);

  Messe.deleteMesse(id, error => {
    if (error) {
      response.status(500).json({
        message: "there is probleme on your  delete clander server controler."
      });
    } else response.status(200).json({
      message: "you have delete a calander"
    }); //console.log(id);

  });
};