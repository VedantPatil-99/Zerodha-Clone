import React from "react";
import eduImg from "@assets/images/education.svg";
import helpers from "@/helpers.json";
import ArrowLink from "@components/common/ArrowLink";

const Education = () => {
	return (
		<>
			<section className="section-spacing">
				<div className="holder">
					<div className="flex flex-col md:flex-row gap-32 items-center justify-between">
						<div className="">
							<img
								src={eduImg}
								alt="Education"
								className="mb-8 md:mb-0 w-3xl"
							/>
						</div>
						<div className="">
							<h2 className="header-1">Free and open market education</h2>
							{helpers.eduData.map((item, idx) => (
								<React.Fragment key={idx}>
									<p className="text-lg text-slate-500 my-4 leading-8">
										{item.description}
									</p>
									<ArrowLink href={idx ? "#" : "#"} className="mb-8">
										{idx ? "TradingQ&A" : "Varsity"}
									</ArrowLink>
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Education;
