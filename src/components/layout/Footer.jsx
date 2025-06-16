import mainLogo from "@assets/images/logo.svg";

const Footer = () => {
	return (
		<>
			<footer className="bg-zinc-50 pt-8 pb-1.5">
				<div className="holder">
					<div className="grid md:grid-cols-12">
						<div className="col-span-3">
							<div className="footer-logo">
								<img src={mainLogo} alt="footer logo" className="w-40 py-2.5" />
							</div>
							<p className="text-zinc-700 text-sm leading-6">
								&copy; 2010 - 2025, Zerodha Broking Ltd.
							</p>
							<p className="text-zinc-700 text-sm">All rights reserved.</p>
							<ul class="flex flex-wrap gap-6 mt-4 pb-4">
								<li>
									<a target="_blank" href="https://twitter.com/zerodhaonline">
										<i class="fa-brands fa-lg fa-x-twitter opacity-70"></i>
									</a>
								</li>
								<li>
									<a target="_blank" href="https://facebook.com/zerodha.social">
										<i class="fa-brands fa-lg fa-square-facebook opacity-70"></i>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://instagram.com/zerodhaonline/">
										<i class="fa-brands fa-lg fa-instagram opacity-70"></i>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://linkedin.com/company/zerodha">
										<i class="fa-brands fa-lg fa-linkedin opacity-70"></i>
									</a>
								</li>
							</ul>
							<hr class="opacity-5 my-1" />
							<ul class="social flex flex-wrap gap-6 mt-4 pb-2">
								<li>
									<a
										target="_blank"
										href="https://www.youtube.com/@zerodhaonline">
										<i class="fa-brands fa-youtube fa-lg opacity-65"></i>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g">
										<i class="fa-brands fa-whatsapp fa-lg opacity-65"></i>
									</a>
								</li>
								<li>
									<a target="_blank" href="https://t.me/zerodhain">
										<i class="fa-brands fa-telegram fa-lg opacity-65"></i>
									</a>
								</li>
							</ul>
						</div>
						<div className="col-span-9"></div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
