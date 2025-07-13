import React from "react";
import HeroSection from "./HeroSection";
import Options from "./Options";
import Steps from "./Steps";
import Benefits from "./Benefits";
import AccountTypes from "./AccountTypes";
import FAQSection from "./FAQSection";
import OpenAccount from "@components/common/OpenAccount";

const SignupPage = () => {
	return (
		<>
			<HeroSection />
			<Options />
			<Steps />
			<Benefits />
			<AccountTypes />
			<FAQSection />
			<OpenAccount />
		</>
	);
};

export default SignupPage;
