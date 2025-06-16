import helpers from "@/helpers.json";

const LinksFooter = () => {
	return (
		<>
			{helpers.footerLinks.map((sections, idx) => (
				<div key={idx} className="col-span-3">
					<ul className="mb-6">
						<h3 className="text-lg font-semibold text-zinc-700 mb-2.5">
							{sections.title}
						</h3>
						{sections.links.map((link, linkIdx) => (
							<li key={linkIdx} className="mb-2.5 py-0.5">
								<a
									href={link.url}
									className="text-zinc-600 hover:text-blue-500 text-[0.9rem]">
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			))}
		</>
	);
};

export default LinksFooter;
