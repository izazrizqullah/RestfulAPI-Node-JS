require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const app = express();

const { HTTP_PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  return res.status(200).json({
    status: true,
    message: "success, welcome to our API",
  });
});

app.use((err, _req, res, _next) => {
  return res.status(500).json({
    status: false,
    message: `Internal Server Error, ${err.message}`,
    data: null,
  });
});

app.use((_req, res, _next) => {
  return res.status(404).json({
    status: false,
    message: "Not-Found",
    data: null,
  });
});

app.listen(HTTP_PORT, () => {
  console.log(`listening on port ${HTTP_PORT}`);
});
