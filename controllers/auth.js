require("dotenv").config();
const { User_game } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { JWT_SIGNATURE_KEY } = process.env;

module.exports = {
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;

      const user = await User_game.findOne({
        where: {
          username,
        },
      });

      if (!user) {
        return res.status(400).json({
          status: "failed",
          message: "username or password doesn't match",
        });
      }

      const correct = await bcrypt.compare(
        password,
        User_game.password,
        (err, _res) => {
          if (err) {
            console.log(err);
          }
        }
      );

      payload = {
        id: User_game.id,
        username: User_game.username,
        password: User_game.password,
      };

      const token = jwt.sign(payload, JWT_SIGNATURE_KEY);

      return res.status(200).json({
        status: "success",
        message: "login successful!",
        data: {
          user,
          token: token,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
