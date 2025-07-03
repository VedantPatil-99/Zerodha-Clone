import steps_acop from "@assets/images/steps-acop.svg";

const Steps = () => {
	return (
		<>
			<section className="section-spacing-reverse bg-zinc-50 mt-4 font-medium text-zinc-600">
				<h2 className="text-xl mb-12 text-center  ">
					Steps to open a demat account with Zerodha
				</h2>
				<div className="flex flex-col justify-around px-5 ">
					<div className="">
						<img src={steps_acop} alt="Steps to open a demat account" />
					</div>
					<div className="text-[15px]">
						<div className="flex flex-row mt-8 justify-start items-center h-12 border-bottom">
							<span className="border rounded-full size-6 text-lg text-center">
								01
							</span>
							<p className="m-4">Enter the requested details</p>
						</div>
						<div className="flex flex-row">
							<span>02</span> <p>Complete e-sign & verification</p>
						</div>
						<div className="flex flex-row">
							<span>03</span> <p>Start investing!</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Steps;
