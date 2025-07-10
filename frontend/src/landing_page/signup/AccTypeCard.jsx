import signupPageData from "@/signupPageData";

const AccTypeCard = () => {
	return (
		<div className="flex flex-wrap gap-x-10 gap-y-16 justify-items-center md:ms-">
			{signupPageData.accTypes.map((acc, id) => (
				<a
					key={id}
					href={acc.link}
					className="w-full md:w-xs p-7 border border-zinc-200 rounded-md relative hover:border-blue-700">
					<h3 className="text-lg mb-5 text-zinc-700 font-medium">
						{acc.title}
					</h3>
					<img
						src={acc.img}
						alt={`${acc.title.toLowerCase()} opening`}
						className="absolute top-8 -left-4 size-8 bg-blue-50 p-1 rounded-full"
					/>
					<p className="text-[16.5px] mt-4 text-zinc-500 leading-7">
						{acc.description}
					</p>
				</a>
			))}
		</div>
	);
};

export default AccTypeCard;
