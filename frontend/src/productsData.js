// src/helpers/productData.js

import appleStore from "@assets/images/appstoreBadge.svg";
import prodCoin from "@assets/images/coin.png";
import prodConsole from "@assets/images/console.png";
import googlePlay from "@assets/images/googlePlayBadge.svg";
import prodKite from "@assets/images/kite.png";
import prodKiteConnect from "@assets/images/kiteconnect.png";
import prodVarsity from "@assets/images/varsity.png";

const productData = [
	{
		id: "kite",
		title: "Kite",
		description:
			"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more.",
		img: prodKite,
		links: [
			{ text: "Try demo", url: "https://kite-demo.zerodha.com/" },
			{ text: "Learn more", url: "/products/kite" },
		],
		appLinks: {
			google: "https://play.google.com/store/apps/details?id=com.zerodha.kite3",
			apple: "https://apps.apple.com/in/app/kite-zerodha/id1449453802",
			googleImg: googlePlay,
			appleImg: appleStore,
		},
		layout: "left", // you can use "left" or "right"
	},
	{
		id: "console",
		title: "Console",
		description:
			"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
		img: prodConsole,
		links: [{ text: "Learn more", url: "/learn/console" }],
		layout: "right",
	},
	{
		id: "coin",
		title: "Coin",
		description:
			"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
		img: prodCoin,
		links: [{ text: "Coin", url: "https://coin.zerodha.com/" }],
		appLinks: {
			google: "https://play.google.com/store/apps/details?id=com.zerodha.coin",
			apple: "https://apps.apple.com/in/app/coin-by-zerodha/id1392892554",
			googleImg: googlePlay,
			appleImg: appleStore,
		},
		layout: "left",
	},
	{
		id: "kite api",
		title: "Kite Connect API",
		description:
			"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
		img: prodKiteConnect,
		links: [{ text: "Learn more", url: "/products/api/" }],
		layout: "right",
	},
	{
		id: "varsity mobile",
		title: "Varsity mobile",
		description:
			"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
		img: prodVarsity,
		appLinks: {
			google:
				"https://play.google.com/store/apps/details?id=com.zerodha.varsity",
			apple: "https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753",
			googleImg: googlePlay,
			appleImg: appleStore,
		},
		layout: "left",
	},
];

export default productData;
