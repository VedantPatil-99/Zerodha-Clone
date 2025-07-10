const faqData = [
	{
		question: "What is a Zerodha account?",
		answer:
			"A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.",
	},
	{
		question: "What documents are required to open a demat account?",
		answer: (
			<>
				<p>
					The following documents are required to open a Zerodha account online:
				</p>
				<ul className="list-disc ml-5 mt-2">
					<li>PAN number</li>
					<li>
						Aadhaar Card (Linked with a phone number for OTP verification)
					</li>
					<li>
						Cancelled cheque or bank account statement (To link your bank
						account)
					</li>
					<li>
						Income proof (Required only if you wish to trade in Futures &
						options)
					</li>
				</ul>
			</>
		),
	},
	{
		question: "Is Zerodha account opening free?",
		answer: "Yes, It is completely free.",
	},
	{
		question: "Are there any maintenance charges for a demat account?",
		answer: (
			<>
				<p>
					The account maintaince charges is appliacable based on the account
					type.
				</p>
				<p>
					For Basic Services Demat Account: Zero charges if the holding value is
					less than ₹4,00,000.
					<br />
					For non-Basic Services Demat Account demat accounts: ₹300 per year +
					GST.
					<br />
					To learn more about BSDA,{" "}
					<a
						href="https://support.zerodha.com/category/account-opening/online-account-opening/online-account-opening-process/articles/how-to-open-a-basic-service-demat-account-at-zerodha"
						className="text-blue-600 underline"
						target="_blank"
						rel="noreferrer">
						Click here
					</a>
					.
				</p>
			</>
		),
	},
	{
		question: "Can I open a demat account without a bank account?",
		answer: (
			<p>
				To open a demat account, you must have a bank account in your name.
				<br />
				If UPI verification is completed successfully, no proof of bank is
				needed. However, if bank verification fails, you'll need to provide
				either a cancelled cheque or a bank statement to link your bank account
				to Zerodha.
			</p>
		),
	},
];

export default faqData;
