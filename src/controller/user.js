import { UserModel } from "../../model/user.model.js";
export const addUser = async (req, res) => {
  try {
    const userData = await UserModel.create({
      name: "Mygaa",
      email: "mygaa080@gmail.com",
      password: "sdfaf23",
      phoneNumber: 8844,
      role: "male",
    });
    res.send(userData);
  } catch (err) {
    console.error(err);
  }
};
