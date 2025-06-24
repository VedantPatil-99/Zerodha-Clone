import zerodhaFundHouseImg from "@assets/images/zerodhaFundhouse.png";
import sensibullImg from "@assets/images/sensibullLogo.svg";
import tijori from "@assets/images/tijori.svg";
import streakImg from "@assets/images/streakLogo.png";
import smallcaseImg from "@assets/images/smallcaseLogo.png";
import dittoImg from "@assets/images/dittoLogo.png";

const Universe = () => {
	return (
		<>
			<div className="section-spacing-reverse text-center">
				<p className="text-xl pt-2 pb-4 text-zinc-600">
					Want to know more about our technology stack? Check out the{" "}
					<a
						href="https://zerodha.tech/"
						className="font-medium text-blue-700 hover:text-neutral-800 opacity-75">
						Zerodha.tech
					</a>{" "}
					blog.
				</p>
			</div>
			<section className="section-spacing-reverse text-center text-zinc-600 mb-24">
				<h2 className="text-3xl mb-5 font-medium leading-10">
					The Zerodha Universe
				</h2>
				<p className="text-md my-4">
					Extend your trading and investment experience even further with our
					partner platforms
				</p>
				<div className="flex flex-col md:flex-row justify-evenly items-center mt-10">
					<div className="flex justify-between flex-col md:gap-12">
						<a
							target="_blank"
							href="https://streak.tech"
							className="mt-5 mb-3.5">
							<img class="streak-logo w-48 mb-4" src={zerodhaFundHouseImg} />
							<p class="text-xs font-medium text-zinc-400 leading-4 mt-2.5">
								Options trading platform that lets you <br />
								create strategies, analyze positions, and examine <br />
								data points like open interest, FII/DII, and more.
							</p>
						</a>

						<a
							target="_blank"
							href="https://streak.tech"
							className="mt-5 mb-3.5">
							<img class="streak-logo w-[15rem]  mb-4" src={streakImg} />
							<p class="text-xs font-medium text-zinc-400 leading-4 mt-2.5">
								Investment research platform <br />
								that offers detailed insights on stocks, <br />
								sectors, supply chains, and more.
							</p>
						</a>
					</div>
					<div className="flex justify-between flex-col md:gap-12">
						<a
							target="_blank"
							href="https://streak.tech"
							className="mt-5 mb-3.5">
							<img class="streak-logo w-[15rem] mb-4" src={sensibullImg} />
							<p class="text-xs font-medium text-zinc-400 leading-4 mt-2.5">
								Systematic trading platform <br />
								that allows you to create and backtest <br />
								strategies without coding.
							</p>
						</a>
						<a
							target="_blank"
							href="https://streak.tech"
							className="mt-5 mb-3.5">
							<img class="streak-logo w-[15rem]  mb-4" src={smallcaseImg} />
							<p class="text-xs font-medium text-zinc-400 leading-4 mt-2.5">
								Thematic investing platform <br />
								that helps you invest in diversified <br />
								baskets of stocks on ETFs.
							</p>
						</a>
					</div>
					<div className="flex justify-between flex-col md:gap-12">
						<a
							target="_blank"
							href="https://streak.tech"
							className="mt-5 mb-3.5">
							<img class="streak-logo mb-4" src={tijori} />
							<p class="text-xs font-medium text-zinc-400 leading-4 mt-2.5">
								Personalized advice on life <br />
								and health insurance. No spam <br />
								and no mis-selling.
							</p>
						</a>
						<a
							target="_blank"
							href="https://streak.tech"
							className="mt-5 mb-3.5">
							<img class="streak-logo w-48 mb-4" src={dittoImg} />
							<p class="text-xs font-medium text-zinc-400 leading-4 mt-2.5">
								Systematic trading platform <br />
								that allows you to create and backtest <br />
								strategies without coding.
							</p>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Universe;
