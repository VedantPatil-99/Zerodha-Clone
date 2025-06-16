import LinksFooter from "./LinksFooter";
import SmallprintsFooter from "./SmallprintsFooter";
import FirstMainFooter from "./FirstMainFooter";

const Footer = () => {
	return (
		<>
			<footer className="bg-zinc-50 pt-8 pb-1.5 border-t-[.1px] border-t-gray-200">
				<div className="holder">
					<div className="grid md:grid-cols-12 gap-x-14">
						{/* Main Footer - I */}
						<div className="col-span-3">
							<FirstMainFooter />
						</div>

						{/* Main Footer - II */}
						<div className="col-span-9">
							<div className="grid md:grid-cols-12 gap-6">
								<LinksFooter />
							</div>
						</div>
					</div>

					{/* Smallprint */}
					<SmallprintsFooter />
				</div>
			</footer>
		</>
	);
};

export default Footer;
