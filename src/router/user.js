import { Router } from "express";
import { addUser } from "../controller/user.js";
const user = Router();
user.route("/", user).post(addUser);
export { user };
