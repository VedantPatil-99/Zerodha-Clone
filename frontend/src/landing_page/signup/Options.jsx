import InvestOpts from "./InvestOpts";

const Options = () => {
	return (
		<>
			<section className="section-spacing-reverse text-xl font-medium text-zinc-700 mt-10">
				<h2 className="mb-12 text-center">
					Investment options with Zerodha demat account
				</h2>
				<div className="grid md:grid-cols-2 py-4 gap-10">
					<InvestOpts />
				</div>
			</section>
		</>
	);
};

export default Options;
