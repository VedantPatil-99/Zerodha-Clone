import steps_acop from "@assets/images/steps-acop.svg";

const Steps = () => {
	return (
		<>
			<section className="signup-spacing bg-gray-50 md:mt-20 font-medium text-zinc-600">
				<h2 className="text-xl md:text-4xl mb-12 mt-4 text-center  ">
					Steps to open a demat account with Zerodha
				</h2>
				<div className="holder flex flex-col md:flex-row justify-evenly items-center">
					<div className="mx-auto md:m-0">
						<img src={steps_acop} alt="Steps to open a demat account" />
					</div>
					<div className="text-[15px] md:text-xl mt-8">
						<div className="flex flex-row justify-start items-center h-14 md:h-20 border-bottom">
							<span className="block border border-zinc-300 rounded-full size-8 text-lg text-center">
								01
							</span>
							<p className="m-4 md:m-5">Enter the requested details</p>
						</div>
						<div className="flex flex-row justify-start items-center h-14 md:h-20 border-bottom">
							<span className="block border border-zinc-300 rounded-full size-8 text-lg text-center">
								02
							</span>
							<p className="m-4 md:m-5">Complete e-sign & verification</p>
						</div>
						<div className="flex flex-row justify-start items-center h-14 md:h-20 border-bottom">
							<span className="block border border-zinc-300 rounded-full size-8 text-lg text-center">
								03
							</span>
							<p className="m-4 md:m-5">Start investing!</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Steps;
