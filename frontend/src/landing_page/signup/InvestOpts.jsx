import signupPageData from "@/signupPageData";

const InvestOpts = () => {
	return (
		<>
			{signupPageData.investOptions.map((opt, id) => (
				<div
					className="investment-options flex justify-between md:justify-normal items-center gap-6 md:h-44 lg:h-auto"
					key={id}>
					<img
						src={opt.imgPath}
						alt={`invest in ${opt.name}`}
						className="md:w-24 md:h-full w-16 sm:h-20"
					/>
					<div>
						<h3 className="lg:text-nowrap">{opt.name}</h3>
						<p className="text-[15px] md:text-[16px] font-normal text-zinc-500 mt-1.5 leading-7">
							{opt.description}
						</p>
					</div>
				</div>
			))}
		</>
	);
};

export default InvestOpts;
