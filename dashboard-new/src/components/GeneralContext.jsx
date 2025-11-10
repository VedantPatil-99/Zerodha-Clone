import React, { useState } from "react";

import BuyActWindow from "./BuyActWindow";

const GeneralContext = React.createContext({
	openBuyWindow: (uid) => {},
	closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
	const [isBuyWindowOpen, setIsBuyWindowOpen] =
		useState(false);
	const [selectedStockUID, setSelectedStockUID] =
		useState("");

	const handleOpenBuyWindow = (uid) => {
		setIsBuyWindowOpen(true);
		setSelectedStockUID(uid);
	};

	const handleCloseBuyWindow = () => {
		setIsBuyWindowOpen(false);
		setSelectedStockUID("");
	};

	return (
		<GeneralContext.Provider
			value={{
				openBuyWindow: handleOpenBuyWindow,
				closeBuyWindow: handleCloseBuyWindow,
			}}>
			{props.children}
			{isBuyWindowOpen && (
				<BuyActWindow uid={selectedStockUID} />
			)}
		</GeneralContext.Provider>
	);
};

export default GeneralContext;
