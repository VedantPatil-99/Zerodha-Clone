import { model } from "mongoose";
import positionsSchema from "../schemas/positionsSchema";

const Position = new model(
	"Position",
	positionsSchema,
);
module.exports = Position;
