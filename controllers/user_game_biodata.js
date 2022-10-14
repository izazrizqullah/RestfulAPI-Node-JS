require("dotenv").config();
const { User_game_biodata } = require("../models");

module.exports = {
  createBio: async (req, res, next) => {
    try {
      const { user_id, nama, alamat } = req.body;

      const existUser = await User_game_biodata.findOne({
        where: {
          user_id,
        },
      });

      const created = await User_game_biodata.create({
        user_id,
        nama,
        alamat,
      });

      if (existUser) {
        return res.status(409).json({
          status: false,
          message: "user_id already used!",
        });
      }

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
      const user = await User_game_biodata.findAll();

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
      next(err);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;

      const findBio = await User_game_biodata.findOne({
        where: {
          id,
        },
      });

      if (findBio.length <= 0) {
        return res.status(404).json({
          status: false,
          message: "not-found",
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: "get data successful!",
        data: findBio,
      });
    } catch (err) {
      next(err);
    }
  },
  updateBio: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { user_id, nama, alamat } = req.body;

      if (user_id && nama && alamat) {
        const user = await User_game_biodata.findAll({
          where: {
            id: id,
          },
        });
        const updateData = await User_game_biodata.update(
          {
            user_id,
            nama,
            alamat,
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
  deleteBio: async (req, res, next) => {
    try {
      const { id } = req.params;

      const user = await User_game_biodata.findOne({
        where: {
          id,
        },
      });

      const deleted = await User_game_biodata.destroy({
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
