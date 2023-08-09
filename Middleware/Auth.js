const jwt = require("jsonwebtoken");
const authToken = async (req, res, next) => {
  if (req.headers.token) {
    let userToken = req.headers.token;
    jwt.verify(userToken, process.env.JWT_SECRET, (err, decodedToekn) => {
      if (err) {
        res.status(401).json({
          error: "invalid token",
        });
      } else {
        req._id = decodedToekn;
        next();
      }
    });
  } else {
    res.status(401).json({
      error: "invalid token",
    });
  }
};
module.exports = authToken;
