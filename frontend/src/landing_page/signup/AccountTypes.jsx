import AccTypeCard from "./AccTypeCard";

const AccountTypes = () => {
	return (
		<>
			<section className="signup-spacing">
				<div className="holder">
					<h2 className="text-xl md:text-4xl text-center text-zinc-700 font-medium mb-12">
						Explore different account types
					</h2>
				</div>
				<div className="holder md:py-5">
					<AccTypeCard />
				</div>
			</section>
		</>
	);
};

export default AccountTypes;
