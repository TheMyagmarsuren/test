import { Schema, model } from "mongoose";
import { COLLECTIONS } from "../constant/index.js";
const CategorySchema = new Schema({
  name: String,
  foodId: [Schema.Types.ObjectId],
});
export const CategoryModel = model("categoty", CategorySchema);
