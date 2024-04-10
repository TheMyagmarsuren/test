import { model, Schema } from "mongoose";
const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: Number,
  role: { type: String, enum: ["female", "male"], required: true },
});
export const UserModel = model("user", UserSchema);
