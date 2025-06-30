import stocks_acop from "@assets/images/stocks-acop.svg";
import mf_acop from "@assets/images/mf-acop.svg";
import ipo_acop from "@assets/images/ipo-acop.svg";
import fo_acop from "@assets/images/fo-acop.svg";

const investOptions = [
	{
		name: "Stocks",
		description: "Invest in all exchange-listed securities",
		imgPath: stocks_acop,
	},
	{
		name: "Mutual funds",
		description: "Invest in commission-free direct mutual funds",
		imgPath: mf_acop,
	},
	{
		name: "IPO",
		description: "Apply to the latest IPOs instantly via UPI",
		imgPath: ipo_acop,
	},
	{
		name: "Futures & options",
		description:
			"Hedge and mitigate market risk through simplified F&O trading",
		imgPath: fo_acop,
	},
];

export default {
	investOptions,
};
