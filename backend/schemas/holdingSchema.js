const { Schema } = require("mongoose");

export default holdingsSchema = new Schema({
	name: String,
	qty: Number,
	avg: Number,
	price: Number,
	net: String,
	day: String,
});
