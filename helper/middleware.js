const jwt = require("jsonwebtoken");

const { JWT_SIGNATURE_KEY } = process.env;

module.exports = {
  mustLogin: async (req, res, next) => {
    try {
      const token = await req.headers["authorization"];

      if (!token) {
        return res.status(401).json({
          status: "failed",
          message: "you are not verified!",
          data: null,
        });
      }

      const decoded = jwt.verify(token, JWT_SIGNATURE_KEY);
      req.user = decoded;

      next();
    } catch (err) {
      if (error.message == "jwt malformed") {
        return res.status(401).json({
          status: false,
          message: error.message,
          data: null,
        });
      }

      next(error);
    }
  },
};
