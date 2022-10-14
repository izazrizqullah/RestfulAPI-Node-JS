const { User_game } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { JWT_SIGNATURE_KEY } = process.env;

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      console.log(req.body);

      const existUser = await User_game.findOne({
        where: {
          username,
        },
      });

      if (existUser) {
        return res.status(409).json({
          status: failed,
          message: "username already used!",
        });
      }

      const encryptedPassword = await bcrypt.hash(password, 10);

      const created = await User_game.create({
        username,
        password: encryptedPassword,
      });

      return res.status(201).json({
        status: true,
        message: "create data successful!",
        data: created,
      });
    } catch (err) {
      next(err);
    }
  },
  getAll: async (_req, res, next) => {
    try {
      const user = await User_game.findAll();

      if (user.length <= 0) {
        return res.status(404).json({
          status: false,
          message: "not-found",
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: "get data successful!",
        data: user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;

      const findUser = await User_game.findOne({
        where: {
          id,
        },
      });

      if (findUser.length <= 0) {
        return res.status(404).json({
          status: false,
          message: "not-found",
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: "get data successful!",
        data: findUser,
      });
    } catch (err) {
      next(err);
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { username, password } = req.body;

      if (username && password) {
        const user = await User_game.findAll({
          where: {
            id: id,
          },
        });
        const updateData = await User_game.update(
          {
            username,
            password,
          },
          {
            where: {
              id,
            },
          }
        );

        res.status(200).json({
          status: "success",
          message: "update data successfull",
          data: user,
        });
      } else {
        return res.status(404).json({
          status: "failed",
          message: "data was not found",
          data: null,
        });
      }
    } catch (err) {
      next(err);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const { id } = req.params;

      const user = await User_game.findOne({
        where: {
          id,
        },
      });

      const deleted = await User_game.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({
        status: true,
        message: "delete data successful!",
        data: user,
      });
    } catch (err) {
      next(err);
    }
  },
};
