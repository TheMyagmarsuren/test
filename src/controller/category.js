import { CategoryModel } from "../../model/category.model.js";
export const addCategory = async (req, res) => {
  try {
    const categoryData = await CategoryModel.create({
      name: "breakFast",
      foodId: "660ea486eda91a4b203771d7",
    });
    res.send("category nemlee");
    console.log(categoryData);
  } catch (err) {
    console.error(err);
  }
};
