import { useState } from "react";
import helpers from "@/helpers.json";

const TeamMember = () => {
	const [openBio, setOpenBio] = useState({});

	const toggleBio = (idx) => {
		setOpenBio((prev) => ({
			...prev,
			[idx]: !prev[idx],
		}));
		console.log({ ...openBio });
	};

	return (
		<>
			{helpers.teamMembers.map((mem, idx) => (
				<div
					className="place-items-center leading-8 px-0 py-5 md:px-12"
					key={idx}>
					<img
						src={mem.image}
						alt={mem.name + mem.position}
						className="rounded-full w-3xs mb-4"
					/>
					<h5 className="text-xl text-zinc-700">{mem.name}</h5>
					<p className="text-zinc-600 text-[0.95rem]">{mem.position}</p>

					{/* Toggle Button */}
					<label
						className="cursor-pointer flex items-center gap-2 text-zinc-500 font-semibold mt-2"
						onClick={() => toggleBio(idx)}>
						Bio
						<i
							className={`fa-solid mt-1 ${
								openBio[idx] ? "fa-angle-up" : "fa-angle-down"
							}`}></i>
					</label>

					{/* Bio paragraph */}
					{openBio[idx] && (
						<p className="text-zinc-600 text-[1.1rem] text-left leading-8 mt-4">
							{mem.bio}
						</p>
					)}
				</div>
			))}
		</>
	);
};

export default TeamMember;
