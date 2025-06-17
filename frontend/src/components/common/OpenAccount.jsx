import Button from "@components/common/Button";

const OpenAccount = () => {
	return (
		<>
			<section className="flex flex-col items-center section-spacing mt-9">
				<div className="mx-auto text-center holder">
					<h1 className="text-3xl font-semibold text-black opacity-75 mb-6">
						Open a Zerodha account
					</h1>
					<p className="text-lg text-gray-600 opacity-95 mb-10 font-normal font-stretch-condensed">
						Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
						F&O trades.
					</p>
					<Button>Sign up for free</Button>
				</div>
			</section>
		</>
	);
};

export default OpenAccount;
