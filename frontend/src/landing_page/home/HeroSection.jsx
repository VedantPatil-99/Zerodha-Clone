import homeHero from "@assets/images/homeHero.png";
import Button from "@components/common/Button";
const HeroSection = () => {
	return (
		<>
			<section className="flex flex-col items-center section-spacing mt-9">
				<img
					src={homeHero}
					alt="landing-home-hero-img"
					className="w-3xl mb-10 md:mb-16"
				/>
				<div className="mx-auto text-center">
					<h1 className="text-5xl font-semibold text-black opacity-75 mb-6">
						Invest in everything
					</h1>
					<p className="text-xl text-gray-700 mb-10">
						Online platform to invest in stocks, derivatives, mutual funds,
						ETFs, bonds, and more.
					</p>
					<Button>Sign up for free</Button>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
