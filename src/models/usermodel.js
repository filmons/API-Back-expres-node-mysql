const db = require("../db");

exports.getAllUsers = (callback) => {
	//console.log(getAllUserName)
	db.query(`SELECT * FROM users ;`, (error, result) => {
		if (error) {
			console.log("error:", error);
			callback(error, null);
			return;
		}
		callback(null, result);
	});
};

exports.AddUser = (newUser, callback) => {
	//console.log(newUser)
	db.query(
		`INSERT INTO users( first_name,last_name, email, city, password) VALUES
      ("${newUser.first_name}",
	   "${newUser.last_name}",
	    "${newUser.email}", "${newUser.city}", "${newUser.password}");`,
		(error, result) => {
			if (error) {
				console.log("error: ", error);
				callback(error, null);
				return;
			}
			callback(null, result);
		}
	);
};
exports.emailExiste = (email, Callback) => {
	db.query(
		`SELECT email FROM users where users.email = "${email}" `,
		(error, result) => {
			if (error) {
				console.log("error:", error);
				Callback(error, null);
				return;
			}
			Callback(null, result);
		}
	);
};
// chicking if the email and password exist
exports.chikingUser = (userdata, Callback) => {
	db.query(
		`SELECT * FROM users where email ="${userdata}"  ;`,
		(error, result) => {
			if (error) {
				console.log("error:", error);
				Callback(error, null);
			}
			console.log(result);
			Callback(null, result);
		}
	);
};
//  chicking email and password
exports.chikingUserData = (userdata, Callback) => {
	db.query(
		`SELECT * FROM users where email ="${userdata.email}"  ;`,
		(error, result) => {
			if (error) {
				console.log("error:", error);
				Callback(error, null);
			}
			//console.log(result)
			Callback(null, result);
		}
	);
};
