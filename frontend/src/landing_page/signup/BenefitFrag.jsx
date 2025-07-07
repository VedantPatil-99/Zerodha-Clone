import signupPageData from "@/signupPageData";

const BenefitFrag = () => {
	return (
		<>
			{signupPageData.zerodhaBenefits.map((bf, id) => (
				<div key={id} className="text-zinc-600 my-2">
					<h3 className="text-xl font-medium mb-4">{bf.bfname}</h3>
					<p className="text-[15px] text-zinc-500 my-4">{bf.bfDesc}</p>
				</div>
			))}
		</>
	);
};

export default BenefitFrag;
