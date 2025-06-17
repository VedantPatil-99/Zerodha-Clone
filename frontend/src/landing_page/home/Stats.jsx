import ecosystemImg from "@assets/images/ecosystem.png";
import WhyUsFrag from "./WhyUsFrag";
import helpers from "@/helpers.json";
import ArrowLink from "@components/common/ArrowLink";
import pressLogos from "@assets/images/pressLogos.png";

const Stats = () => {
	return (
		<>
			<section className="mt-[1.875rem] section-spacing flex flex-col items-center gap-8">
				<div className="md:grid md:grid-cols-12 holder flex flex-col items-center gap-8">
					<div className="col-span-5">
						<h2 className="header-2">Trust with confidence</h2>
						<div className="why-us-frag">
							{helpers.whyUsFragData.map((item, idx) => (
								<WhyUsFrag
									key={idx}
									title={item.title}
									description={item.description}
								/>
							))}
						</div>
					</div>
					<div className="col-span-7 text-center">
						<img src={ecosystemImg} alt="The Zerodha Universe" />
						<div className="my-4 flex gap-8 justify-center">
							<ArrowLink href="#">Explore our products </ArrowLink>
							<ArrowLink href="#">Try Kite demo </ArrowLink>
						</div>
					</div>
				</div>
				<img src={pressLogos} alt="press-logos-strip" className="mt-6" />
			</section>
		</>
	);
};
export default Stats;
