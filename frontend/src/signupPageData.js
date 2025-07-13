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

const zerodhaBenefits = [
	{
		bfName: "Unbeatable pricing",
		bfDesc:
			"Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.",
	},

	{
		bfName: "Best investing experience",
		bfDesc:
			"Simple and intuitive trading platform with an easy-to-understand user interface.",
	},
	{
		bfName: "No spam or gimmicks",
		bfDesc:
			'Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.',
	},

	{
		bfName: "The Zerodha universe",
		bfDesc:
			"More than just an app — gain free access to the entire ecosystem of our partner products.",
	},
];

import acop_individual from "@assets/images/acop-individual.svg";
import acop_huf from "@assets/images/acop-huf.svg";
import acop_nri from "@assets/images/acop-nri.svg";
import acop_minor from "@assets/images/acop-minor.svg";
import acop_corporate from "@assets/images/acop-corporate.svg";

const accTypes = [
	{
		title: "Individual Account",
		description: "Invest in equity, mutual funds and derivatives",
		link: "https://signup.zerodha.com/",
		img: acop_individual,
	},
	{
		title: "HUF Account",
		description: "Make tax-efficient investments for your family",
		link: "https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening/huf",
		img: acop_huf,
	},
	{
		title: "NRI Account",
		description: "Invest in equity, mutual funds, debentures, and more",
		link: "https://zerodha.com/open-account/nri",
		img: acop_nri,
	},
	{
		title: "Minor Account",
		description:
			"Teach your little ones about money & invest for their future with them",
		link: "https://signup.zerodha.com/minor/",
		img: acop_minor,
	},
	{
		title: "Corporate / LLP/ Partnership",
		description: "Manage your business surplus and investments easily",
		link: "https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening",
		img: acop_corporate,
	},
];

export default {
	investOptions,
	zerodhaBenefits,
	accTypes,
};
