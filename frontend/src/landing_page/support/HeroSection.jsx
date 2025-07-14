const HeroSection = () => {
	return (
		<>
			<section className="section-spacing h-screen md:h-96 bg-sky-600 text-white">
				<div className="flex justify-between holder">
					<a href="#" className="text-lg md:text-xl font-medium">
						Support Portal
					</a>
					<a href="#" className="underline decoration-1 underline-offset-6">
						Track tickets
					</a>
				</div>
				<div className="flex flex-col md:flex-row  holder">
					<div className="flex flex-col">
						<form
							action=""
							method="get"
							className="relative w-full max-w-xl my-5">
							<input
								type="text"
								name="support-search"
								id="support-search"
								placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
								autoComplete="off"
								autoFocus
								className="w-full h-10 pl-6 rounded-sm bg-slate-200 text-zinc-800 placeholder:w-5/6 placeholder:text-zinc-600 focus:outline-none"
							/>
							<i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600"></i>
						</form>
						<div className="flex flex-col md:flex-row  md:gap-x-5 flex-wrap">
							<p className="quick-links w-fit ju">
								<a href="https://zrd.sh/signup">Track account opening</a>
							</p>
							<p className="quick-links">
								<a href="https://zrd.sh/segment-activation">
									Track segment activation
								</a>
							</p>
							<p className="quick-links">
								<a href="https://zrd.sh/latest-leverage">Intraday margins</a>
							</p>
							<p className="quick-links">
								<a
									className="kite-manual-link"
									href="https://zrd.sh/kite-manual">
									Kite user manual
								</a>
							</p>
						</div>
					</div>
					<div className="my-4">
						<h3 className="text-xl font-medium mb-4">Featured</h3>
						<ol className="list-decimal list-inside ps-5 mb-4">
							<li>
								<a
									href="https://zerodha.com/marketintel/bulletin/419005/quarterly-settlement-of-funds-july-2025"
									target="_blank"
									className="underline">
									Quarterly Settlement of Funds - July 2025
								</a>
							</li>
							&nbsp;
							<li>
								<a
									href="https://zerodha.com/marketintel/bulletin/418412/exclusion-of-fo-contracts-on-8-securities-from-august-29-2025"
									target="_blank"
									className="underline">
									Exclusion of F&amp;O contracts on 8 securities from August 29,
									2025
								</a>
							</li>
						</ol>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
