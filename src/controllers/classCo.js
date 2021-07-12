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
  const { titre, description_one, description_two, description_three } = request.body; 
  //console.log(request.body);{}
  //console.log(request.params);

  Class.editClass(id, titre, description_one, description_two, description_three, (error, result) => {
      if (error) {
        response.status(500).json({
          message: 'there is probleme on your server.'
        });
      }
      else { 
        response.status(200).json({
          message:"the class has been edited "
        });
       }
    
  });
}
exports.deleteOne = (request, response) => {
  
   const{ id} = request.params;
  // console.log(request.params);

  Class.delete(id, ( error) => {
    if (error) {
      response.status(500).json({
        message: 'there is probleme on your server.'
      });
    }else 
    response.status(200).json({
    message: "you have delete one class"
    });
    console.log(id);
  });
}
 