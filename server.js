const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const { MONGOURI } = require("./db");
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connect successfully");
});
mongoose.connection.on("error", () => {
  console.log("Connect failure");
});

const userRouter = require("./routes/user.route");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});
app.use("/users", userRouter);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
