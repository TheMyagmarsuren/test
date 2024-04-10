import express from "express";
import mongoose from "mongoose";
import { food } from "./src/router/food.js";
import { category } from "./src/router/category.js";
import { user } from "./src/router/user.js";
import { order } from "./src/router/order.js";
const PORT = "8080";
const app = express();

const MONGO_CONNECTION_STRING =
  "mongodb+srv://mygmar090:Fi1L3iR90s3Cz2oL@leap-test.q3ptkvy.mongodb.net/";
mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.error(err));

app.use("/categories", category);
app.use("/foods", food);
app.use("/users", user);
app.use("/orders", order);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
