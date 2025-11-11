import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import Holding from "./models/holding.js";
import Position from "./models/position.js";
import Order from "./models/order.js";

import authRoute from "./routes/authRoutes.js";

const app = express();

const PORT = process.env.PORT || 8081;
const MONGO_URI = process.env.MONGO_URL;
const CLIENT_URL =
	process.env.CLIENT_URL ||
	"http://localhost:5173";

app.use(helmet());

app.use(express.json());
app.use(cookieParser());

app.use(
	cors({
		origin: [CLIENT_URL, "http://localhost:5173"],
		methods: [
			"GET",
			"POST",
			"PUT",
			"DELETE",
			"PATCH",
		],
		credentials: true,
		exposedHeaders: ["Set-Cookie"],
	}),
);

app.use("/", authRoute);
app.get("/holdings", async (req, res) => {
	try {
		const allHoldings = await Holding.find(
			{},
		).lean();
		res.status(200).json({ data: allHoldings });
	} catch (err) {
		console.error(
			"Error fetching holdings:",
			err,
		);
		res.status(500).json({
			message: "Failed to fetch holdings data.",
		});
	}
});

app.get("/positions", async (req, res) => {
	try {
		const allPositions = await Position.find(
			{},
		).lean();
		res.status(200).json({ data: allPositions });
	} catch (err) {
		console.error(
			"Error fetching positions:",
			err,
		);
		res.status(500).json({
			message: "Failed to fetch positions data.",
		});
	}
});

app.post("/order", async (req, res) => {
	const { name, qty, price, mode } = req.body;

	if (!name || !qty || !price || !mode) {
		return res.status(400).json({
			message: "Missing required order fields.",
		});
	}

	const newOrder = new Order({
		name,
		qty,
		price,
		mode,
	});

	try {
		const order = await newOrder.save();
		console.log(
			`New Order Saved: ${order.name} (${order.qty})`,
		);

		res.status(201).json({
			message: "Order placed successfully.",
			data: order,
		});
	} catch (err) {
		console.error(
			"Error in saving order:",
			err.message,
		);

		res.status(500).json({
			message: "Server failed to process order.",
			error: err.message,
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
