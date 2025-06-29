import account_open from "@assets/images/account_open.svg";
import india_flag from "@assets/images/india-flag.svg";
import Button from "@components/common/Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<>
			<section className="pt-5 px-10">
				<div className="flex flex-col text-zinc-700">
					<img src={account_open} alt="Open Account" className="pb-7" />
					<h1 className="block md:hidden font-medium text-2xl mb-1">
						Open a free demat & trading account online
					</h1>
					<p className="text-lg font-medium pt-2.5">Signup Now</p>
					<form action="#" method="post" className="mt-5">
						<div className="grid grid-cols-12 mb-7 border border-zinc-400 rounded-xs focus-within:border-zinc-500">
							<div className="p-3 border-e border-e-zinc-300 rounded-xs w-full col-span-3 flex justify-between items-center">
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
			</section>
		</>
	);
};

export default HeroSection;
