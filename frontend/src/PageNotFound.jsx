import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "@assets/images/kiaan404.jpg";

const PageNotFound = () => {
	return (
		<>
			<div className="holder section-spacing">
				<div className="flex flex-col md:flex-row justify-between items-center holder gap-1 font-semibold w-4xl text-zinc-600">
					<div className="left w-1/2">
						<h2 className="text-2xl mb-4">404</h2>
						<h3 className="text-5xl mb-6">Kiaan couldn’t find that page</h3>
						<h4 className="text-xl font-normal leading-8">
							We couldn’t find the page you were looking for. Visit{"  "}
							<Link to="/" className="text-blue-500">
								Zerodha’s home page
							</Link>
						</h4>
					</div>
					<div className="right p-2">
						<img src={notFoundImg} alt="Page Not Found" />
					</div>
				</div>
			</div>
		</>
	);
};

export default PageNotFound;
