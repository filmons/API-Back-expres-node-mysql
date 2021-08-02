const jwt = require('jsonwebtoken');

const SECRET = 'motSecret';

const isAuth = (request, response, next) => {
  const token = request.cookies.authcookie;

  jwt.verify(token, SECRET, (error, user) => {
    if (error) {
      response.send(error.message);
    } else {
      const { id, email, password, first_name, last_name, city, exp } = user;

      // Useless or not ?!
      if (Date.now() / 1000 >= exp) {
        response.clearCookie('authcookie');
        response.json({
          message: 'Session expired. Try to reconnect you.',
        });
      }

      request.user = {
        id,
        email,
        password,
        first_name,
        last_name,
        city,
        
      };
      next();
    }
  });
};

module.exports = isAuth;

// const cookieParser = require("cookie-parser");
// const { response } = require("express");
// const jwt = require("jsonwebtoken");

// const SECRET = "see_you_in_1M_years";

// const isAuth = (request, response, next) => {
//   const unproccessedAuthorization = request.headers;

//   if (!unproccessedAuthorization) {
//     response.status(500).json({
//       message: `Token needed.`,
//     });
//   } else {
//     // I_if authorization we retreive the token when an user try to access
//     const token = request.headers.authorization.split(" ")[1];

//     // II_We check if the token is valid or not
//     jwt.verify(token, SECRET, (error, admin) => {
//       /*a_error managment*/

//       if (error) {
//         response.send(error.message);
//       } else {
//         /*b_checking of token validity*/
//         const { id } = admin; // where do we retreive the name?

//         request.admin = { id };
//         next();
//       }
//     });
//   }
// };

// module.exports = isAuth;