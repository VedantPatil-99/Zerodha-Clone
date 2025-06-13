import React from "react";
import homeHero from "../../assets/images/homeHero.png";
const HeroSection = () => {
	return (
		<>
			<section className="flex flex-col items-center mt-9 px-5 py-7 md:pb-32 md:px-5">
				<img
					src={homeHero}
					alt="landing-home-hero-img"
					className="w-3xl mb-16"
				/>
				<div className="mx-auto text-center">
					<h1 className="text-5xl font-semibold text-black opacity-75 mb-6">
						Invest in everything
					</h1>
					<p className="text-xl text-gray-700 mb-10">
						Online platform to invest in stocks, derivatives, mutual funds,
						ETFs, bonds, and more.
					</p>
					<button className="bg-sky-600 text-white text-xl font-medium p-2 w-50 rounded-sm hover:bg-black ">
						Sign up for free
					</button>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
