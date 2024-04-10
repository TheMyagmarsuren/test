import { FoodModel } from "../../model/food.model.js";
export const addFood = async (req, res) => {
  try {
    const data = await FoodModel.create({
      name: "Mygaa",
      email: "mygaa080@gmail.com",
      password: "pass",
      phoneNumber: 8844,
      role: "male",
    });
    console.log(data);
    res.send("amjilttai");
  } catch (err) {
    console.error(err);
  }
};
