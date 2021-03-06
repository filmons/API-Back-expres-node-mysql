const userModel = require("../models/usermodel");

const {
  changeUser
} = require("../db");

const bcrypt = require("bcrypt");

const body_parser = require("body-parser");

const jwt = require("jsonwebtoken");

const SECRET = "motSecret";
const MAXAGE = Math.floor(Date.now() / 100) + 10 * 10;

exports.findAllUsers = (request, response) => {
  userModel.getAllUsers((error, users) => {
    if (error) {
      response.status(500).json({
        message: "le servre founuction plus."
      });
    } else {
      response.status(200).json({
        users
      });
    }

    console.log(users); // pour voir tout les users
  });
};

exports.newUser = (request, response) => {
  const {
    first_name,
    last_name,
    email,
    city,
    password
  } = request.body;

  if (city.length === 0) {
    response.status(400).json({
      message: "les champs ne peut pas être vide!"
    });
  } else {
    userModel.chikingUser(email, (error, result) => {
      console.log(changeUser);

      if (result.length !== 0) {
        console.log(result.length);
        response.status(409).json({
          message: "Un utilisateur utilisant cette adress email est déjà enregistré !"
        });
      } else {
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, (error, hash) => {
          if (error) {
            response.status(500).json({
              message: error
            });
          }

          const newUser = {
            first_name,
            last_name,
            email,
            city,
            password: hash
          };
          userModel.AddUser(newUser, (error, result) => {
            if (error) {
              response.status(500).json({
                message: error
              });
              response.send(error.message);
            }

            response.status(201).json({
              message: "Votre nouveau compte a été créé avec succès",
              first_name: newUser.first_name,
              last_name: newUser.last_name,
              city: newUser.city,
              email: newUser.email,
              password: newUser.password
            });
          });
        });
      }
    });
  }
}; // end of inscreption
//sign parti start here


exports.findUser = (request, response) => {
  const userdata = ({
    email,
    password
  } = request.body);
  userModel.chikingUserData(userdata, (error, result) => {
    if (result.length === 0) {
      response.status(401).json({
        message: "email n'exist pas"
      });
    } else {
      const hash = result[0].password;
      bcrypt.compare(password, hash, (error, correct) => {
        if (!correct) {
          response.status(401).json({
            message: "votre mot de pass n'est pas correct"
          });
        }

        const user = {
          id: result[0].id,
          first_name: result[0].first_name,
          last_name: result[0].last_name,
          email: result[0].email,
          password: result[0].password,
          exp: MAXAGE
        };
        jwt.sign(user, SECRET, (error, token) => {
          if (error) {
            response.status(500).json({
              message: error
            });
          }

          request.user = {
            id: result[0].id,
            first_name: result[0].first_name,
            last_name: result[0].last_name,
            email: result[0].email,
            password: result[0].password
          };
          response.cookie("authcookie", token, {
            maxAge: MAXAGE
          });
          console.log(response.cookie.authcookie);
          response.status(200).json({
            token: token,
            user: {
              id: request.user.id,
              city: request.user.city,
              first_name: request.user.first_name,
              last_name: request.user.last_name,
              email: request.user.email
            }
          });
          console.log("new infrmation", request.user.username);
          return request.user;
        });
      });
    }
  });
}; // exports.logout = (request, response) => {
// 	response.clearCookie("authcookie");
// 	response.redirect("/");
// };