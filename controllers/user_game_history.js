require("dotenv").config();
const { User_game_history } = require("../models");

module.exports = {
  createHistory: async (req, res, next) => {
    try {
      const { user_id, game, score } = req.body;

      const existUser = await User_game_history.findOne({
        where: {
          user_id,
        },
      });

      if (existUser) {
        return res.status(409).json({
          status: false,
          message: "user_id already used!",
        });
      }

      const created = await User_game_history.create({
        user_id,
        game,
        score,
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
      const history = await User_game_history.findAll();

      if (history.length <= 0) {
        return res.status(404).json({
          status: false,
          message: "not-found",
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: "get data successful!",
        data: history,
      });
    } catch (err) {
      next(err);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;

      const findHistory = await User_game_history.findOne({
        where: {
          id,
        },
      });

      if (findHistory.length <= 0) {
        return res.status(404).json({
          status: false,
          message: "not-found",
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: "get data successful!",
        data: findHistory,
      });
    } catch (err) {
      next(err);
    }
  },
  updateHistory: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { user_id, game, score } = req.body;

      if (user_id && game && score) {
        const user = await User_game_history.findAll({
          where: {
            id: id,
          },
        });
        const updateData = await User_game_history.update(
          {
            user_id,
            game,
            score,
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
  deleteHistory: async (req, res, next) => {
    try {
      const { id } = req.params;

      const user = await User_game_history.findOne({
        where: {
          id,
        },
      });

      const deleted = await User_game_history.destroy({
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
