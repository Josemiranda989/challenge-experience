const express = require("express");
const app = express();
const port = 3000;

const prodRouter = require("./src/routes/products.route");
const userRouter = require("./src/routes/users.route");

app.use("/api/products", prodRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`server running in http://localhost:${port}`);
});
