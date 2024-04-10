import { model, Schema } from "mongoose";
import { COLLECTIONS } from "../constant/index.js";
const OrderSchema = new Schema({
  userId: { type: String, required: true, ref: COLLECTIONS.USER },
  orderNumber: Number,
  foods: [Schema.Types.ObjectId],
  totalPrice: Number,
  process: {
    type: String,
    enum: ["Hurgegdsen", "Hurgegdeegui"],
    required: true,
  },
  createdDate: String,
  district: String,
  Khoroo: String,
  Apartment: String,
});
export const OrderModel = model("order", OrderSchema);
