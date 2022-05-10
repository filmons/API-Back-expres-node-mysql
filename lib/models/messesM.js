//const {request} = require("express");
const db = require("../db");

exports.findAllMesse = callback => {
  //console.log(getAllUserName)
  db.query(`SELECT * FROM messes ;`, (error, result) => {
    if (error) {
      console.log("error:", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};

exports.createMesses = (messes, callback) => {
  console.log(messes);
  db.query(`INSERT INTO messes
		(jours,dates) VALUES ("${messes.jours}","${messes.dates}");`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    } else {
      callback(null, result);
    }
  });
};

exports.editMesse = (id, jours, dates, callback) => {
  console.log(jours, dates);
  db.query(`UPDATE messes SET jours  = "${jours}", dates = "${dates}" WHERE id = ${id};`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    } else {
      callback(null, result);
      console.log(result);
    }
  });
};

exports.deleteMesse = (id, callback) => {
  console.log(id);
  db.query(`DELETE FROM messes WHERE id = ${id};`, (error, result) => {
    if (error) {
      console.log("error:", error);
      callback(error, null);
      return;
    }

    callback(error, result);
  });
};