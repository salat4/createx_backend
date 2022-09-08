const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const blogRouter = require("./routes/blog");
const authRouter = require("./routes/auth");
app.use(cors());
app.use(express.json());
const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log(`Database connection successful`);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

app.get("/", (req, res, next) => {
  res.json({ message: "CORS is activated" });
});
app.use("/createx/blog", blogRouter);
// app.use("/createx/createblog", createBlogRouter);
app.use("/createx/auth", authRouter);
// app.post("/createx/blog", addBlogRouter);

app.listen(3001, function () {
  console.log("CORS-enabled web server listening on port 3001");
});
