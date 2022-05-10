const jwt = require("jsonwebtoken");

const SECRET = "motSecret";

const isAuth = (request, response, next) => {
  const {
    authorization
  } = request.headers;

  if (!authorization) {
    return response.status(400).json({
      message: "vous devez etre conecter autant que admin "
    });
  }

  const token = authorization.replace("Bearer ", "");
  console.log("middiler", token);
  jwt.verify(token, SECRET, (error, user) => {
    if (error) {
      return response.status(400).json({
        error
      });
    } else {
      const {
        id,
        email,
        password,
        first_name,
        last_name,
        city,
        exp
      } = user;

      if (id !== 50) {
        return response.status(400).json({
          message: "vous devez etre connecter en tant que admin"
        });
      }

      console.log(id);

      if (Date.now() / 1000 >= exp) {
        //response.clearCookie('authcookie');
        response.json({
          message: "Session expired. Try to reconnect you."
        });
      }

      request.user = {
        id,
        email,
        password,
        first_name,
        last_name,
        city
      };
      next();
    }
  });
};

module.exports = isAuth;