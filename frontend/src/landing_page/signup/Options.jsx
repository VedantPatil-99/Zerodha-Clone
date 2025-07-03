import InvestOpts from "./InvestOpts";
import Button from "@components/common/Button";
import { Link } from "react-router-dom";

const Options = () => {
	return (
		<>
			<section className="signup-spacing text-xl md:text-3xl font-medium text-zinc-700 md:mt-0 mt-10 lg:mx-32 xl:mx-52">
				<h2 className="mb-12 text-center lg:text-4xl">
					Investment options with Zerodha demat account
				</h2>
				<div className="grid md:grid-cols-2 gap-10 lg:gap-x-36 lg:gap-y-20 place-items-start lg:mt-20">
					<InvestOpts />
				</div>
				<div className="text-center my-4">
					<Button className="px-10 w-fit mt-8">
						<Link to={"/investments"}>Explore Investments</Link>{" "}
					</Button>
				</div>
			</section>
		</>
	);
};

export default Options;
