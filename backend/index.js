import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || 8081;
const MONGO_URI = process.env.MONGO_URL;

app.use(express.json());

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
