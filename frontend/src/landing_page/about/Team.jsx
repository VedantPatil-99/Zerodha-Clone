import nithinImg from "@assets/images/nithinKamath.jpg";
import TeamMember from "./TeamMember";

const Team = () => {
	return (
		<>
			<section className="py-8 px-5 md:pt-20 md:py-0 xl:pt-20 xl:px-0">
				<div className="holder">
					<h3 className="text-center text-zinc-700 text-4xl font-semibold mb-5">
						People
					</h3>
					<div className="flex flex-col md:flex-row md:gap-14 justify-between max-w-4xl mx-auto leading-7 text-zinc-600 md:pt-10 md:pb-24 py-5">
						<div className="text-center w-full">
							<img
								src={nithinImg}
								alt="Nithin Kamat CEO Zerodha"
								className="rounded-full mb-4 w-2xs mx-auto"
							/>
							<h5 className="text-xl">Nithin Kamath</h5>
							<p className="text-gray-500 my-3.5">Founder, CEO</p>
						</div>
						<div className="text-[1.03rem]">
							<p className="my-4">
								Nithin bootstrapped and founded Zerodha in 2010 to overcome the
								hurdles he faced during his decade long stint as a trader.
								Today, Zerodha has changed the landscape of the Indian broking
								industry.
							</p>
							<p className="my-4">
								He is a member of the SEBI Secondary Market Advisory Committee
								(SMAC) and the Market Data Advisory Committee (MDAC).
							</p>
							<p className="my-4">Playing basketball is his zen.</p>
							<p className="my-4">
								Connect on{" "}
								<a
									href="https://nithinkamath.me/"
									className="text-sky-700 font-medium">
									Homepage
								</a>{" "}
								/{" "}
								<a
									href="https://tradingqna.com/u/nithin/summary"
									className="text-sky-700 font-medium">
									TradingQnA
								</a>{" "}
								/{" "}
								<a
									href="https://twitter.com/Nithin0dha"
									className="text-sky-700 font-medium">
									Twitter
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="holder">
				<div className="grid md:grid-cols-3 gap-10 text-center place-items-center">
					<TeamMember />
					<TeamMember />
					<TeamMember />
					<TeamMember />
				</div>
			</section>
		</>
	);
};

export default Team;
