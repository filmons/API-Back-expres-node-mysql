const { response, request } = require("express");


const Class = require("../models/classM");

exports.findAllClass= (request, response) => {
  //const { classs} = request;
 Class.findAll((error, corss) => {
  if (error) {
    response.status(500).json({
      message: 'le servre founuction plus.'
    });
  }else { 
  response.status(200).json({
   corss
  });
 }
    
  //response.render("index.ejs", { classs ,Class});
  });
}
exports.addOneClass = (request, response) => {
  console.log(request.body.titre);
  Class.createClass(request.body, (error, result) => {
    if (error) {
      response.status(500).json({
        message: 'there is probleme on your server.'
      });
    } else {

      response.status(200).json({
        message:" the Class had been add"
      });
    }
     
})

}

exports.editOneClass = (request, response) => {
  
  const { id } = request.params; 
  const { titre } = request.body; 

  Class.editClass(id, titre, (error, result) => {
      if (error) {
          response.send(error.message);
      }
      else { 
        response.status(200).json({
         result
        });
       }
    
      //response.redirect("index.ejs");
  });
}
exports.deleteOne = (request, response) => {
  
  const{ id} = request.params;
  Class.deletePlace(id, ( error) => {
    if (error) {
      response.status(500).json({
        message: 'there is probleme on your server.'
      });
    }else 
    response.status(200).json({
    message: "you have delete one place"
    });
    console.log(id);
  });
}
 