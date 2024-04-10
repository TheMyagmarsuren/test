import { Router } from "express";
import { addCategory } from "../controller/category.js";
const category = Router();
category.route("/", category).post(addCategory);
export { category };
