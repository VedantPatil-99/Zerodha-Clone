import ecosystemImg from "../../assets/images/ecosystem.png";
import WhyUsFrag from "./WhyUsFrag";
import helpersWhyUsData from "../../helpers.json";

const Stats = () => {
	return (
		<>
			<section className="px-5">
				<div className="md:grid md:grid-cols-12 xl:mx-24 flex flex-col items-center gap-8">
					<div className="col-span-5">
						<h2 className="header-2">Trust with confidence</h2>
						<div className="why-us-frag">
							{helpersWhyUsData.map((item, idx) => (
								<WhyUsFrag
									key={idx}
									title={item.title}
									description={item.description}
								/>
							))}
						</div>
					</div>
					<img
						src={ecosystemImg}
						alt="The Zerodha Universe"
						className="col-span-7"
					/>
				</div>
			</section>
		</>
	);
};

//
//
//

// No spam or gimmicks
// No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.

// The Zerodha universe
// Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.

// Do better with money
// With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
export default Stats;
