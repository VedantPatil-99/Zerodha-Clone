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
					<div className="text-[15px] mt-8">
						<div className="flex flex-row justify-start items-center h-14 border-bottom">
							<span className="block border border-zinc-300 rounded-full size-8 text-lg text-center">
								01
							</span>
							<p className="m-4">Enter the requested details</p>
						</div>
						<div className="flex flex-row justify-start items-center h-14 border-bottom">
							<span className="block border border-zinc-300 rounded-full size-8 text-lg text-center">
								02
							</span>
							<p className="m-4">Complete e-sign & verification</p>
						</div>
						<div className="flex flex-row justify-start items-center h-14 border-bottom">
							<span className="block border border-zinc-300 rounded-full size-8 text-lg text-center">
								03
							</span>
							<p className="m-4">Start investing!</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Steps;
