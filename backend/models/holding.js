import { model } from "mongoose";
import holdingSchema from "../schemas/holdingSchema.js";

const Holding = model("Holding", holdingSchema);
export default Holding;
