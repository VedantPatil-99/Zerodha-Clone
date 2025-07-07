import acop_benefits from "@assets/images/acop-benefits.svg";
import BenefitFrag from "./BenefitFrag";

const Benefits = () => {
	return (
		<>
			<section className="signup-spacing">
				<div className="flex-flex-col">
					<img
						src={acop_benefits}
						alt="benefits of Zerodha"
						className="mx-auto my-5 w-full"
					/>
					<h2 className="mb-12 text-xl font-medium text-zinc-600 leading-8">
						Benefits of opening a Zerodha demat account
					</h2>
				</div>
				<div className="flex flex-col justify-between gap-6">
					<BenefitFrag />
				</div>
			</section>
		</>
	);
};

export default Benefits;
