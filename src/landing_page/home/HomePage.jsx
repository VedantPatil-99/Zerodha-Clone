import Footer from "../Footer";
import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Education from "./Education";
import HeroSection from "./HeroSection";
import Pricing from "./Pricing";
import Stats from "./Stats";

const HomePage = () => {
	return (
		<>
			<Navbar />

			<HeroSection />
			<Stats />
			<Pricing />
			<Education />
			<OpenAccount />

			<Footer />
		</>
	);
};

export default HomePage;
