import React from "react";
import productsKite from "@assets/images/kite.png";
import googlePlay from "@assets/images/googlePlayBadge.svg";
import appleStore from "@assets/images/appstoreBadge.svg";
// import helpers from "@/helpers.json";
import { Link } from "react-router-dom";
import ArrowLink from "@components/common/ArrowLink";

const ImgLeftBlock = () => {
	return (
		<>
			<section className="section-spacing">
				<div className="holder flex flex-col md:flex-row justify-between sm:items-center gap-x-12">
					<div className="w-fit mb-2">
						<Link to={"/products/kite"}>
							<img src={productsKite} alt="Kite" className="w-fit" />
						</Link>
					</div>
					<div className="text-zinc-600 md:w-sm">
						<h2 className="text-3xl mb-5 font-medium">Kite</h2>
						<p className="text-lg my-4 font-">
							Our ultra-fast flagship trading platform with streaming market
							data, advanced charts, an elegant UI, and more. Enjoy the Kite
							experience seamlessly on your Android and iOS devices.
						</p>
						<div className="prodDemo mb-5 flex flex-col justify-between gap-0.5">
							<ArrowLink>Try demo </ArrowLink>
							<ArrowLink>Learn more </ArrowLink>
						</div>
						<div className="app-links mt-6 flex items-baseline gap-x-6">
							<a
								target="_blank"
								href="https://play.google.com/store/apps/details?id=com.zerodha.kite3">
								<img src={googlePlay} className="w-36" />
							</a>
							<a
								target="_blank"
								href="https://apps.apple.com/in/app/kite-zerodha/id1449453802">
								<img src={appleStore} className="w-32" />
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ImgLeftBlock;
