import React from "react";
import signupPageData from "../../signupPageData";

const InvestOpts = () => {
	return (
		<>
			{signupPageData.investOptions.map((opt, id) => (
				<div className="investment-options flex justify-between gap-6" key={id}>
					<img
						src={opt.imgPath}
						alt={`invest in ${opt.name}`}
						className="w-16"
					/>
					<div>
						<h3>{opt.name}</h3>
						<p className="text-sm font-normal text-zinc-500 mt-1.5">
							{opt.description}
						</p>
					</div>
				</div>
			))}
		</>
	);
};

export default InvestOpts;
