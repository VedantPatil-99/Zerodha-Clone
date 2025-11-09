import { Schema } from "mongoose";

export default positionsSchema = new Schema({
	product: String,
	name: String,
	qty: Number,
	avg: Number,
	price: Number,
	net: String,
	day: String,
	isLoss: Boolean,
});
