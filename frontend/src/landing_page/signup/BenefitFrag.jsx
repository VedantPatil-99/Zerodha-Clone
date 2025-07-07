import signupPageData from "@/signupPageData";

const BenefitFrag = () => {
	return (
		<>
			{signupPageData.zerodhaBenefits.map((bf, id) => (
				<div key={id} className="text-zinc-600 leading-7">
					<h3 className="text-xl font-medium mb-3">{bf.bfName}</h3>
					<p className="text-[16px] text-zinc-500 my-4">{bf.bfDesc}</p>
				</div>
			))}
		</>
	);
};

export default BenefitFrag;
