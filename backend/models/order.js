import { model } from "mongoose";
import ordersSchema from "../schemas/ordersSchema";

const Order = new model("Order", ordersSchema);
module.exports = Order;
