const db = require("/home/filmon/example Doker app/app-expres/db")

exports.getByUserName = (callback) => {
    //console.log(getByUserName)
  db.query(`SELECT * FROM city ;`,
   (error, result) => { 
  if(error){
    console.log("error:", error);
    callback(error, null);
    return;
  }

     callback(null, result);
  
    })
  }