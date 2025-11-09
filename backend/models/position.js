import { model } from "mongoose";
import positionsSchema from "../schemas/positionsSchema.js";

const Position = new model(
	"Position",
	positionsSchema,
);
export default Position;
