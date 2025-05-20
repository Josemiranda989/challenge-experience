const express = require("express");
const app = express();
require("dotenv").config();

const indexRouter = require("./src/routes/index.route");
const prodRouter = require("./src/routes/products.route");
const userRouter = require("./src/routes/users.route");

app.use("/", indexRouter);
app.use("/api/products", prodRouter);
app.use("/api/users", userRouter);

const port = process.env.NODE_PORT || 4000;

app.listen(port, () => {
  console.log(`server running in http://localhost:${port}`);
});
