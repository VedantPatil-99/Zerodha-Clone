import React from "react";
import signupPageData from "../../signupPageData";

const InvestOpts = () => {
	return (
		<>
			{signupPageData.investOptions.map((opt, id) => (
				<div
					className="investment-options flex justify-between gap-6 items-center"
					key={id}>
					<img
						src={opt.imgPath}
						alt={`invest in ${opt.name}`}
						className="md:w-auto md:h-auto w-16 sm:h-20"
					/>
					<div>
						<h3>{opt.name}</h3>
						<p className="text-[15px] font-normal text-zinc-500 mt-1.5 leading-6">
							{opt.description}
						</p>
					</div>
				</div>
			))}
		</>
	);
};

export default InvestOpts;
