import { Router } from "express";
import { addOrder } from "../controller/order.js";

const order = Router();

order.route("/").post(addOrder);
export { order };
