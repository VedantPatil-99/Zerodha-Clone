import { Schema } from "mongoose";

const ordersSchema = new Schema({
	name: String,
	price: Number,
	percent: String,
	isDown: Boolean,
});

export default ordersSchema;
