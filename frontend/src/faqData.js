const faqData = [
	{
		question: "What is a Zerodha account?",
		answer: [
			{
				type: "paragraph",
				content:
					"A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.",
			},
		],
	},
	{
		question: "What documents are required to open a demat account?",
		answer: [
			{
				type: "paragraph",
				content:
					"The following documents are required to open a Zerodha account online:",
			},
			{
				type: "list",
				content: [
					"PAN number",
					"Aadhaar Card (Linked with a phone number for OTP verification)",
					"Cancelled cheque or bank account statement (To link your bank account)",
					"Income proof (Required only if you wish to trade in Futures & options)",
				],
			},
		],
	},
	{
		question: "Is Zerodha account opening free?",
		answer: [
			{
				type: "paragraph",
				content: "Yes, It is completely free.",
			},
		],
	},
	{
		question: "Are there any maintenance charges for a demat account?",
		answer: [
			{
				type: "paragraph",
				content:
					"The account maintenance charge is applicable based on the account type.",
			},
			{
				type: "paragraph",
				content:
					"For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.\nFor non-Basic Services Demat Account: ₹300 per year + GST.",
			},
			{
				type: "paragraph",
				content: "To learn more about BSDA,",
			},
			{
				type: "link",
				content: "Click here",
				href: "https://support.zerodha.com/category/account-opening/online-account-opening/online-account-opening-process/articles/how-to-open-a-basic-service-demat-account-at-zerodha",
			},
		],
	},
	{
		question: "Can I open a demat account without a bank account?",
		answer: [
			{
				type: "paragraph",
				content:
					"To open a demat account, you must have a bank account in your name.",
			},
			{
				type: "paragraph",
				content:
					"If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.",
			},
		],
	},
];

export default faqData;
