import signupPageData from "@/signupPageData";

const AccTypeCard = () => {
	return (
		<>
			{signupPageData.accTypes.map((acc, id) => (
				<a
					key={id}
					href={acc.link}
					className="block p-7 border border-zinc-200 rounded-md relative mx-auto mb-7 hover:border-blue-700">
					<h3 className="text-lg mb-5 text-zinc-700 font-medium">
						{acc.title}
					</h3>
					<p className="text-[16.5px] mt-4 text-zinc-500 leading-7">
						{acc.description}
					</p>
				</a>
			))}
		</>
	);
};

export default AccTypeCard;
