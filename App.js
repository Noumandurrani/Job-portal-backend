const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(bodyParser.json());
app.use(cors());

const server = http.createServer(app);
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, () => {
  console.log("Mongodb connected");
});

app.use("/jobportal/api", require("./Routes/api"));
app.use("*", (req, res) => {
  res.status(404).json({
    message: "this route does not exist",
  });
});

server.listen(5000, () => {
  console.log("server running at 5000");
});
