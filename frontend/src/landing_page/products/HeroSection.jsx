import ArrowLink from "@components/common/ArrowLink";

const HeroSection = () => {
	return (
		<>
			<section className="flex flex-col items-center md:py-24 px-5 lg:px-0 holder border-bottom">
				<div className="mx-auto text-center">
					<h1 className="text-5xl font-semibold text-black opacity-75 mb-5">
						Zerodha Products
					</h1>
					<p className="text-xl text-gray-700 mb-4">
						Sleek, modern, and intuitive trading platforms
					</p>
					<p className="text-lg text-gray-700">
						Check out our <ArrowLink>investment offerings </ArrowLink>
					</p>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
