import nikhilImg from "@assets/images/Nikhil.jpg";

const TeamMember = () => {
	return (
		<>
			<div className="">
				<img src={nikhilImg} alt="" className="rounded-full w-3xs mb-4" />
				<h5 className="text-xl text-zinc-700">Nikhil Kamath</h5>
				<p className="text-zinc-600 text-sm leading-8">Co-founder & CFO</p>
				<p className="text-zinc-600 text-sm">Bio</p>
			</div>
		</>
	);
};

export default TeamMember;
