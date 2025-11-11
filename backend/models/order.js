import { model } from "mongoose";
import ordersSchema from "../schemas/ordersSchema.js";

const Order = new model("Order", ordersSchema);
export default Order;
