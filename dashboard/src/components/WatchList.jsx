import React, { useState } from "react";
import { watchlist } from "./../data/demoData";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const WatchList = () => {
	return (
		<div className="watchlist-container">
			<div className="search-container">
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
					className="search"
				/>
				<span className="counts"> 9 / 50</span>
			</div>

			<ul className="list">
				{watchlist.map((stock, idx) => {
					return (
						<WatchListItem
							stock={stock}
							key={idx}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default WatchList;

const WatchListItem = ({ stock }) => {
	const [showActions, setShowActions] =
		useState(false);
	const handleOnMouseEnter = (e) => {
		setShowActions(true);
	};
	const handleOnMouseLeave = (e) => {
		setShowActions(false);
	};

	return (
		<li
			onMouseEnter={handleOnMouseEnter}
			onMouseLeave={handleOnMouseLeave}>
			<div className="item">
				<p
					className={
						stock.isDown ? "down" : "up"
					}>
					{stock.name}
				</p>
				<div className="item-info">
					<p className="percent">
						{stock.percent}
					</p>
					<span>
						{stock.isDown ? (
							<KeyboardArrowDownIcon className="down" />
						) : (
							<KeyboardArrowUpIcon className="up" />
						)}
					</span>
					<p className="price">{stock.price}</p>
				</div>
			</div>
		</li>
	);
};
