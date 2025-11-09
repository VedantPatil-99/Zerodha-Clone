import { model } from "mongoose";
import holdingSchema from "../schemas/holdingSchema";

const Holding = new model(
	"Holding",
	holdingSchema,
);
module.exports = Holding;
