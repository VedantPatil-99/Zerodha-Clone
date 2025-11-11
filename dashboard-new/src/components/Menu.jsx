import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
	const [isOptActive, setIsOptActive] =
		useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const handleActiveOption = (index) => {
		setIsOptActive(index);
	};

	const handleProfileOpen = (index) => {
		setIsOpen(!isOpen);
	};

	const menu = "menu";
	const activeMenu = "menu selected";
	return (
		<div className="menu-container">
			<img
				src="logo.png"
				style={{ width: "50px" }}
				alt="logo"
			/>
			<div className="menus">
				<ul>
					<li>
						<Link
							to="/"
							style={{ textDecoration: "none" }}
							onClick={() =>
								handleActiveOption(0)
							}>
							<p
								className={
									isOptActive === 0
										? activeMenu
										: menu
								}>
								Dashboard
							</p>
						</Link>
					</li>
					<li>
						<Link
							to="/orders"
							style={{ textDecoration: "none" }}
							onClick={() =>
								handleActiveOption(1)
							}>
							<p
								className={
									isOptActive === 1
										? activeMenu
										: menu
								}>
								Orders
							</p>
						</Link>
					</li>
					<li>
						<Link
							to="/holdings"
							style={{ textDecoration: "none" }}
							onClick={() =>
								handleActiveOption(2)
							}>
							<p
								className={
									isOptActive === 2
										? activeMenu
										: menu
								}>
								Holdings
							</p>
						</Link>
					</li>
					<li>
						<Link
							to="/positions"
							style={{ textDecoration: "none" }}
							onClick={() =>
								handleActiveOption(3)
							}>
							<p
								className={
									isOptActive === 3
										? activeMenu
										: menu
								}>
								Positions
							</p>
						</Link>
					</li>
					<li>
						<Link
							to="/funds"
							style={{ textDecoration: "none" }}
							onClick={() =>
								handleActiveOption(4)
							}>
							<p
								className={
									isOptActive === 4
										? activeMenu
										: menu
								}>
								Funds
							</p>
						</Link>
					</li>
					<li>
						<Link
							to="/apps"
							style={{ textDecoration: "none" }}
							onClick={() =>
								handleActiveOption(5)
							}>
							<p
								className={
									isOptActive === 5
										? activeMenu
										: menu
								}>
								Apps
							</p>
						</Link>
					</li>
				</ul>
				<hr />
				<div
					className="profile"
					onClick={handleProfileOpen}>
					<div className="avatar">ZU</div>
					<p className="username">USERID</p>
				</div>
			</div>
		</div>
	);
};

export default Menu;
