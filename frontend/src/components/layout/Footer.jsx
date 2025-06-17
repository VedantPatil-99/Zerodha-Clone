import LinksFooter from "./LinksFooter";
import SmallprintsFooter from "./SmallprintsFooter";
import FirstMainFooter from "./FirstMainFooter";
import LinkStripFooter from "./LinkStripFooter";

const Footer = () => {
	return (
		<>
			<footer className="bg-zinc-50 p-4 pt-8 pb-1.5 border-t-[.1px] border-t-gray-200">
				<div className="holder">
					<div className="flex flex-col md:flex-row gap-4 justify-between items-start ">
						{/* Main Footer - I */}
						<div>
							<FirstMainFooter />
						</div>

						{/* Main Footer - II */}
						<div>
							<div className="grid md:grid-cols-4 gap-x-2 md:gap-x-6">
								<LinksFooter />
							</div>
						</div>
					</div>

					{/* Smallprint */}
					<SmallprintsFooter />

					{/* Link Strip */}
					<div className="text-center text-sm text-zinc-500 my-4">
						<LinkStripFooter />
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
