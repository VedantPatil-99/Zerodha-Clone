import mainLogo from "@assets/images/logo.svg";

const Navbar = () => {
	return (
		<>
			<nav className="border-b-[.1px] border-b-gray-200 h-16 md:h-16 sticky top-0 z-10 bg-white md:p-0 px-4">
				<div className="holder md:px-5 flex justify-between items-center h-full">
					<div className="logo my-4">
						<a href="#">
							<img
								src={mainLogo}
								alt="Zerodha Logo"
								className="w-32 px-2 sm:p-0"
							/>
						</a>
					</div>
					<div className="nav-links">
						<ul className="hidden md:flex md:flex-row gap-10 text-zinc-500 opacity-95">
							<li>
								<a href="#" className="hover:text-blue-500 ">
									Signup
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-500 ">
									About
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-500 ">
									Products
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-500 ">
									Pricing
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-500 ">
									Support
								</a>
							</li>
							<li>
								<a href="#" className="text-zinc-800">
									<i className="fa-solid fa-lg fa-bars"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
