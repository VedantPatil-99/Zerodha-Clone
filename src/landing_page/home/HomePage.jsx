import React from "react";
import HeroSection from "./HeroSection";
import Awards from "./Awards";
import Pricing from "./Pricing";
import Education from "./Education";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";
import Header from "../Header";
import Footer from "../Footer";

const HomePage = () => {
	return (
		<>
			<Header />

			<HeroSection />
			<Awards />
			<Stats />
			<Pricing />
			<Education />
			<OpenAccount />

			<Footer />
		</>
	);
};

export default HomePage;
