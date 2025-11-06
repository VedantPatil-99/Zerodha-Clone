import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { watchlist } from "./../data/demoData";
// import Button from "@mui/material/Button";
import InsightsIcon from "@mui/icons-material/Insights";
import { Grow } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

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
			{showActions && (
				<WatchListActionBar uid={stock.name} />
			)}
		</li>
	);
};

const WatchListActionBar = ({ uid }) => {
	return (
		<div className="actions">
			<div>
				<Tooltip
					title="Buy"
					placement="top"
					TransitionComponent={Grow}
					arrow>
					<button className="buy">B</button>
				</Tooltip>
				<Tooltip
					title="Sell"
					placement="top"
					TransitionComponent={Grow}
					arrow>
					<button className="sell">S</button>
				</Tooltip>
				<Tooltip
					title="Analystics"
					placement="top"
					TransitionComponent={Grow}
					arrow>
					<button className="chart action">
						<InsightsIcon className="icon" />
					</button>
				</Tooltip>
				<Tooltip
					title="More"
					placement="top"
					TransitionComponent={Grow}
					arrow>
					<button className="action">
						<MoreHorizOutlinedIcon className="icon" />
					</button>
				</Tooltip>
			</div>
		</div>
	);
};
