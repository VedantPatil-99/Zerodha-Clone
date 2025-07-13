import acop_benefits from "@assets/images/acop-benefits.svg";
import BenefitFrag from "./BenefitFrag";

const Benefits = () => {
	return (
		<>
			<section className="signup-spacing md:mt-10 flex flex-col md:flex-row md:items-center md:gap-8 mx-auto lg:justify-evenly">
				<div className="max-w-lg">
					<img
						src={acop_benefits}
						alt="benefits of Zerodha"
						className="mx-auto my-4 lg:mb-6 w-full md:max-w-3xl lg:w-sm md:mx-0 lg:mx-auto"
					/>
					<h2 className="mb-12 text-xl md:text-4xl lg:text-3xl font-medium text-zinc-700 leading-8 md:leading-14 lg:leading-12">
						Benefits of opening a Zerodha demat account
					</h2>
				</div>
				<div className="flex flex-col justify-between gap-6 max-w-lg">
					<BenefitFrag />
				</div>
			</section>
		</>
	);
};

export default Benefits;
