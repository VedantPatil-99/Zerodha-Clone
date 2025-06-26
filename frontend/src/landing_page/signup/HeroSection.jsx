import account_open from "@assets/images/account_open.svg";
import india_flag from "@assets/images/india-flag.svg";
import Button from "@components/common/Button";

const HeroSection = () => {
	return (
		<>
			<section className="pt-5 px-10">
				<div className="flex flex-col">
					<img src={account_open} alt="Open Account" className="pb-7" />
					<h1 className="block md:hidden font-medium text-4xl">
						Open a free demat & trading account online
					</h1>
					<p>Signup Now</p>
					<form action="#" method="post">
						<div className="flex">
							<span>
								<img src={india_flag} alt="India-flag" className="inline" /> +91
							</span>

							<input
								type="number"
								name="mobile_num"
								id="mobile_num"
								placeholder="Enter your mobile number"
							/>
						</div>
					</form>
					<Button>Get OTP</Button>
					<p>By proceeding, you agree to the Zerodha terms & privacy policy</p>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
