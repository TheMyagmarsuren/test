import { OrderModel } from "../../model/order.model.js";
export const addOrder = async (req, res) => {
  try {
    const orderData = await OrderModel.create({
      userId: "660ea486eda91a4b203771d7",
      orderNumber: 8844,
      foods: [],
      totalPrice: 123,
      process: "Hurgegdeegui",
      createdDate: Date(),
      district: "Bzd",
      Khoroo: "horoo",
      Apartment: "Apartment",
    });
    res.send(orderData);
    console.log("bolloo");
  } catch (err) {
    console.error(err);
  }
};
