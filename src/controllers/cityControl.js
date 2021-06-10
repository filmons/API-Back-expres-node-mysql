const { response, request } = require("express");
const listes = require("../models/cityModel");

exports.findAll = (request, response) => {
  listes.getByUserName((error,usersCitys ) => {
    if (error) {
        response.status(500).json({
          message: 'le servre founuction plus.'
        });
      }else { 
      response.status(200).json({
        usersCitys
      });
     }
      //console.log(name); // pour voir tout les place 
    });
  }
 