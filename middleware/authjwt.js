const jwt = require("jsonwebtoken");
const config = require("../config/auth.js");
const db = require("../modules/master/user/model");
const User = db.ModelUser;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.send({
        status:200,
        error:true,
        data: "No token provided!, Please Login"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.send({
          status:200,
          error:true,
          data: "Unauthorized!, Please Login"
      });
    }
    next();
  });
};

const authJwt = {
  verifyToken: verifyToken
};
module.exports = authJwt;