const db = require("../db");

 
exports.findAll = (callback) => {
  db.query("SELECT * FROM cours;", (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
    //console.log(result);
  })
}
exports.createClass = (cours, callback) => { 
 // console.log(cours);
  db.query(
    `INSERT INTO cours  (titre, description_one, description_two, description_three ) 
  VALUES ("${cours.titre}", "${cours.description_one}", "${cours.description_two}", "${cours.description_three}");`,
  // ${cours.description_one}", "${cours.description_two}", "${cours.description_three}")
    (error, result) => {
      if (error) {
        console.log('error: ', error);
        callback(error, null);
        return;
      } else {

        callback(null, result);
      }
    });
};


exports.editClass = (id, text, callback) => { 
    
  db.query(`UPDATE ccoues SET text = "${text}" WHERE id = ${id};`, (error, result) => {
      if (error) {
          console.log("error: ", error);
          callback(error, null);
          return;
      }
      callback(null, result);
      console.log(result);
  })
}
exports.deleteCours = (id, callback) => {
  console.log(id);
  db.query(`DELETE FROM cours WHERE id = ${id};`, (error, result) => {
    if (error) {
      console.log('error: ', error);

      callback(error, null);
      return;
    }

    callback(error, null);
  });
};
