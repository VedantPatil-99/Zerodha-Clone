import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<>
			<section className="holder text-center border-bottom py-24 px-5 md:px-0">
				<h1 className="text-3xl leading-12 font-semibold opacity-70">
					We pioneered the discount broking model in India.
					<br />
					Now, we are breaking ground with our technology.
				</h1>
			</section>
			<section className="py-8 px-5 md:pt-20 md:py-0 xl:pt-20 xl:px-0">
				<div className="holder">
					<div className="flex flex-col md:flex-row justify-between md:gap-14 max-w-4xl mx-auto font-normal text-[1.05rem] opacity-80 leading-7">
						<div className="left w-full md:w-1/2">
							<p className="my-4">
								We kick-started operations on the 15th of August, 2010 with the
								goal of breaking all barriers that traders and investors face in
								India in terms of cost, support, and technology. We named the
								company Zerodha, a combination of Zero and "Rodha", the Sanskrit
								word for barrier.
							</p>
							<p className="my-4">
								Today, our disruptive pricing models and in-house technology
								have made us the biggest stock broker in India.
							</p>
							<p className="my-4">
								Over 1.6+ crore clients place billions of orders every year
								through our powerful ecosystem of investment platforms,
								contributing over 15% of all Indian retail trading volumes.
							</p>
						</div>
						<div className="right w-full md:w-1/2">
							<p className="my-4">
								In addition, we run a number of popular open online educational
								and community initiatives to empower retail traders and
								investors.
							</p>
							<p className="my-4">
								<a
									href="https://rainmatter.com/"
									className="text-sky-700 hover:text-neutral-900 font-medium">
									Rainmatter
								</a>
								, our fintech fund and incubator, has invested in several
								fintech startups with the goal of growing the Indian capital
								markets.
							</p>
							<p className="my-4">
								And yet, we are always up to something new every day. Catch up
								on the latest updates on our{" "}
								<a
									href="https://zerodha.com/media"
									className="text-sky-700 hover:text-neutral-900 font-medium">
									blog{" "}
								</a>
								or see what the media is{" "}
								<a
									href="https://zerodha.com/z-connect"
									className="text-sky-700 hover:text-neutral-900 font-medium">
									saying about us{" "}
								</a>
								or learn more about our business and product{" "}
								<Link
									to="/about"
									className="text-sky-700 hover:text-neutral-900 font-medium">
									philosophies
								</Link>
								.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
