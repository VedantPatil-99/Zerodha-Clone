import { Schema } from "mongoose";

export default ordersSchema = new Schema({
	name: String,
	price: Number,
	percent: String,
	isDown: Boolean,
});
