import helpers from "@/helpers.json";

const LinkStripFooter = () => {
	return (
		<>
			<ul className="flex flex-wrap justify-center gap-6">
				{helpers.footerStrip.map((link, linkIdx) => {
					return (
						<li key={linkIdx}>
							<a href={link.url}>{link.name}</a>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default LinkStripFooter;
