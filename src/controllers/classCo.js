const { response, request } = require("express");
const Class = require("../models/classM");

exports.findAllClass = (request, response) => {
	//const { classs} = request;
	Class.findAll((error, cours) => {
		if (error) {
			response.status(500).json({
				message: "le servre founuction plus.",
			});
		} else {
			response.status(200).json({
				cours,
			});
		}
	});
};
exports.addOneClass = (request, response) => {
	// console.log(request.body.titre);
	// console.log(request.body.description_one);
	// console.log(request.body.description_two);
	// console.log(request.body.description_three);
	
	Class.createClass(request.body, (error, result) => {
		if (error) {
			response.status(500).json({
				message: "there is probleme on your server  Co.",
			});
		} else {
			response.status(200).json({
				message: " the Class had been add",
			});
		}
	});
};
// 39 console.log(request.body);{}
//40 console.log(request.params);
exports.editOneClass = (request, response) => {
	const { id } = request.params;
	const { titre, description_one, description_two, description_three } =
		request.body;
	Class.editClass(
		id,
		titre,
		description_one,
		description_two,
		description_three,
		(error, result) => {
			if (error) {
				response.status(500).json({
					message: "there is probleme on your server.",
				});
			} else {
				response.status(200).json({
					message: "the class has been edited ",
				});
			}
		}
	);
};
exports.deleteOneMesse = (request, response) => {
	const { id } = request.params;
	//console.log(request.params);

	Class.deleteMesse(id, (error) => {
		if (error) {
			response.status(500).json({
				message: "there is probleme on your server.",
			});
		} else
			response.status(200).json({
				message: "you have delete one class",
			});
		console.log(id);
	});
};
