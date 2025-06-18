import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/Navbar";
import AboutPage from "./landing_page/about/AboutPage";
import HomePage from "./landing_page/home/HomePage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import SignupPage from "./landing_page/signup/SignupPage";
import SupportPage from "./landing_page/support/SupportPage";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/products" element={<ProductsPage />} />
			<Route path="/pricing" element={<PricingPage />} />
			<Route path="/support" element={<SupportPage />} />
			{/* <Routes path="*" element={ } /> */}
		</Routes>
		<Footer />
	</BrowserRouter>,
);
