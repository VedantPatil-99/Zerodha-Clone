const WhyUsSection = ({ title, description }) => {
	return (
		<>
			<h2 className="text-xl font-semibold text-zinc-700">{title}</h2>
			<p className="text-lg text-slate-500 mt-1.5 mb-8">{description}</p>
		</>
	);
};

export default WhyUsSection;
