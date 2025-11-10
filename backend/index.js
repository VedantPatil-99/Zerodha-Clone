import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import Holding from "./models/holding.js";
import Position from "./models/position.js";
import Order from "./models/order.js";

const app = express();

const PORT = process.env.PORT || 8081;
const MONGO_URI = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

app.get("/holdings", async (req, res) => {
	const allHoldings = await Holding.find({});
	// console.log(allHoldings);
	res.json(allHoldings);
});

app.get("/positions", async (req, res) => {
	const allPositions = await Position.find({});
	// console.log(allPositions);
	res.json(allPositions);
});

app.post("/order", async (req, res) => {
	const newOrder = new Order({
		name: req.body.name,
		qty: req.body.qty,
		price: req.body.price,
		mode: req.body.mode,
	});

	try {
		const order = await newOrder.save();
		console.log(order);
		res.status(201).json({
			message: "New Order saved.",
			data: req.data,
		});
	} catch (err) {
		console.log("Error in saving order.");
		res.status(402).json({
			message: "Error in saving order.",
			data: req.data,
		});
	}
});

async function startServer() {
	if (!MONGO_URI) {
		console.error(
			"FATAL ERROR: MONGO_URL is not defined in environment variables.",
		);
		process.exit(1);
	}

	try {
		await mongoose.connect(MONGO_URI);
		console.log("MongoDB Connection successful.");

		app.listen(PORT, () => {
			console.log(
				`Server listening on PORT: ${PORT}`,
			);
		});
	} catch (error) {
		console.error(
			"Error connecting to MongoDB or starting server:",
		);
		console.error(error.message);
		process.exit(1);
	}
}

startServer();
