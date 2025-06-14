import ecosystemImg from "@assets/images/ecosystem.png";
import WhyUsFrag from "./WhyUsFrag";
import helpersWhyUsData from "@/helpers.json";
import ArrowLink from "@components/common/ArrowLink";
import pressLogos from "@assets/images/pressLogos.png";

const Stats = () => {
	return (
		<>
			<section className="p-5 mt-7 flex flex-col items-center gap-8">
				<div className="md:grid md:grid-cols-12 xl:mx-24 flex flex-col items-center gap-8">
					<div className="col-span-5">
						<h2 className="header-2">Trust with confidence</h2>
						<div className="why-us-frag">
							{helpersWhyUsData.map((item, idx) => (
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
						<ArrowLink href="#">Explore our products</ArrowLink>
						<ArrowLink href="#">Try Kite demo </ArrowLink>
					</div>
				</div>
				<img src={pressLogos} alt="press-logos-strip" className="mt-8" />
			</section>
		</>
	);
};
export default Stats;
