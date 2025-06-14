import React from "react";
import HeroSection from "./HeroSection";
import Options from "./Options";
import Steps from "./Steps";
import Benefits from "./Benefits";
import AccountTypes from "./AccountTypes";
import FAQs from "./FAQs";
import OpenAccount from "./../OpenAccount";

const SignupPage = () => {
	return (
		<>
			<HeroSection />
			<Options />
			<Steps />
			<Benefits />
			<AccountTypes />
			<FAQs />
			<OpenAccount />
		</>
	);
};

export default SignupPage;
