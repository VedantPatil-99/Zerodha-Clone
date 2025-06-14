import pricingEq from "@assets/images/pricing0.svg";
import intradayEq from "@assets/images/intradayTrades.svg";
import ArrowLink from "@components/common/ArrowLink";

const Pricing = () => {
	return (
		<>
			<section className="section-spacing p-4">
				<div className="holder">
					<div className="grid md:grid-cols-12 gap-4 items-center">
						<div className="col-span-5">
							<h2 className="header-1">Unbeatable pricing</h2>
							<p className="text-lg font-normal my-4 leading-8 text-slate-700">
								We pioneered the concept of discount broking and price
								transparency in India. Flat fees and no hidden charges.
							</p>
						</div>
						<div className="col-span-7 flex flex-wrap justify-start items-start">
							<div className="pricing-box inline-block w-44 h-20 flex-none">
								<img src={pricingEq} alt="" className="h-24 absolute " />
								<p className="relative text-[10px] w-auto font-normal text-slate-800 top-11 left-28">
									Free account <br /> opening
								</p>
							</div>
							<div className="pricing-box inline-block h-20 flex-grow ">
								<img src={pricingEq} alt="" className="h-24 absolute" />
								<p className="block relative text-[10px] font-normal font-stretch-condensed text-slate-800 top-11 left-28 w-auto">
									Free equity delivery <br />
									and direct mutual funds
								</p>
							</div>
							<div className="pricing-box inline-block w-52 h-20 flex-none">
								<img src={intradayEq} alt="" className="h-24 absolute" />
								<p className="relative text-[10px] w-auto font-normal text-slate-800 top-11 left-33">
									Intraday and <br /> F&O
								</p>
							</div>
						</div>
					</div>
					<p>
						<ArrowLink href="#" className="ps-0.5">
							See pricing
						</ArrowLink>
					</p>
				</div>
			</section>
		</>
	);
};

export default Pricing;
