import { Router } from "express";
import { addFood } from "../controller/food.js";
const food = Router();

food.route("/").post(addFood);

export { food };
