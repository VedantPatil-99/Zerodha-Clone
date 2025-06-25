import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/Navbar";
import OpenAccount from "@components/common/OpenAccount";
import Education from "./Education";
import HeroSection from "./HeroSection";
import Pricing from "./Pricing";
import Stats from "./Stats";

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<Stats />
			<Pricing />
			<Education />
			<OpenAccount />
		</>
	);
};

export default HomePage;
