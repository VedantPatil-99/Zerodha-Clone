import account_open from "@assets/images/account_open.svg";
import india_flag from "@assets/images/india-flag.svg";
import Button from "@components/common/Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<>
			<section className="pt-5 px-10">
				<div className="hidden md:block text-center section-spacing-reverse mb-12">
					<h1 className="text-[44px] font-medium text-zinc-700 mb-5 leading-14">
						Open a free demat and trading account online
					</h1>
					<p class="acop-subheading text-center text-zinc-500 text-xl mt-2.5 mb-4">
						Start investing brokerage free and join a community of{" "}
						<span class="client-count">1.6+ crore</span> investors and traders
					</p>
				</div>
				<div className="holder flex flex-col md:flex-row text-zinc-700 md:items-center md:justify-evenly lg:p-6">
					<img
						src={account_open}
						alt="Open Account"
						className="pb-7 w-sm lg:w-lg mx-auto md:mx-0"
					/>

					<div className="">
						<h1 className="block md:hidden font-medium text-2xl mb-1">
							Open a free demat & trading account online
						</h1>
						<p className="text-lg md:text-4xl font-medium pt-2.5 mb-2.5">
							Signup Now
						</p>
						<p className="text-zinc-400 text-lg hidden md:block">
							Or track your existing application
						</p>
						<form action="#" method="post" className="mt-5">
							<div className="grid grid-cols-12 mb-7 border border-zinc-400 rounded-xs focus-within:border-zinc-500">
								<div className="p-3 border-e border-e-zinc-300 rounded-xs w-full col-span-3 flex justify-between items-center md:h-14">
									<img
										src={india_flag}
										alt="India-flag"
										className="inline me-1"
									/>
									<span className="block">+91</span>
								</div>

								<input
									type="number"
									name="mobile_num"
									id="mobile_num"
									placeholder="Enter your mobile number"
									required
									className="p-3 w-full col-span-9 border-none outline-none bg-transparent placeholder:text-zinc-400 placeholder:font-[480] placeholder:opacity-80"
								/>
							</div>
							<div className="mt-7">
								<Button className="w-full mb-5 md:w-2/3" type={"submit"}>
									Get OTP
								</Button>
							</div>
						</form>
						<p className="my-3 text-xs font-medium text-zinc-400">
							By proceeding, you agree to the Zerodha{" "}
							<Link to={"/terms"} className="text-sky-700 opacity-75">
								{" "}
								terms
							</Link>{" "}
							&{" "}
							<Link to={"/privacy-policy"} className="text-sky-700 opacity-75">
								privacy policy
							</Link>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
