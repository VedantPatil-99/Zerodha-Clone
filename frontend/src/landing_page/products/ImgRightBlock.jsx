import React from "react";
import productsKite from "@assets/images/kite.png";
// import helpers from "@/helpers.json";
import { Link } from "react-router-dom";
import ArrowLink from "@components/common/ArrowLink";

const ImgRightBlock = () => {
	return (
		<>
			<section className="section-spacing">
				<div className="holder flex flex-col-reverse md:flex-row justify-between sm:items-center">
					<div className="text-zinc-600 md:w-sm">
						<h2 className="text-3xl mb-5 font-medium">Console</h2>
						<p className="text-lg my-4">
							The central dashboard for your Zerodha account. Gain insights into
							your trades and investments with in-depth reports and
							visualisations
						</p>
						<div className="prodDemo mb-5">
							<ArrowLink>Learn more </ArrowLink>
						</div>
					</div>
					<div className="w-fit my-2">
						<Link to={"/products/kite"}>
							<img src={productsKite} alt="Kite" className="w-fit" />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default ImgRightBlock;
