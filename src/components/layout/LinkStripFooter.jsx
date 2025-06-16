import helpers from "@/helpers.json";

const LinkStripFooter = () => {
	return (
		<>
			<ul className="flex flex-wrap justify-center gap-6">
				{helpers.footerStrip.map((link, linkIdx) => {
					return (
						<li key={linkIdx}>
							<a
								href={link.url}
								className="text-zinc-500 hover:text-blue-500 opacity-70 font-medium">
								{link.name}
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default LinkStripFooter;
