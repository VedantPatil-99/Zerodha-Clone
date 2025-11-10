import { Schema } from "mongoose";

const ordersSchema = new Schema({
	name: String,
	qty: Number,
	price: Number,
	mode: String,
});

export default ordersSchema;
