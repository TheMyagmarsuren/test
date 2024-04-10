import { Schema, model } from "mongoose";

const FoodSchema = new Schema({
  name: String,
  image: String,
  ingeredient: String,
  price: Number,
});
export const FoodModel = model("food", FoodSchema);
