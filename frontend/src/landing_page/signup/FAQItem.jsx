const FAQItem = ({ question, answer, isOpen, onToggle }) => {
	return (
		<div className="group border-top pb-6">
			<p className="w-20 h-1 bg-sky-600 transition-all duration-300 ease-in-out group-hover:w-24"></p>
			<button
				className="flex justify-between items-center w-full text-left pt-5 text-zinc-700"
				onClick={onToggle}>
				<h3 className="text-lg font-medium">{question}</h3>
				<i
					className={`fa-solid fa-chevron-down transition-transform duration-300 ${
						isOpen ? "rotate-180" : "rotate-0"
					}`}></i>
			</button>

			{isOpen && (
				<div className="mt-3 space-y-2 text-[16.5px] text-zinc-600 font-[490] leading-7">
					{answer.map((block, idx) => {
						switch (block.type) {
							case "paragraph":
								return (
									<p key={idx}>
										{block.content.split("\n").map((line, i, arr) => (
											<span key={i}>
												{line}
												{i !== arr.length - 1 && <br />}
											</span>
										))}
									</p>
								);
							case "list":
								return (
									<ul key={idx} className="list-disc list-inside ml-4">
										{block.content.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								);
							case "link":
								return (
									<a
										key={idx}
										href={block.href}
										target="_blank"
										rel="noreferrer"
										className="text-blue-600 underline">
										{block.content}
									</a>
								);
							default:
								return null;
						}
					})}
				</div>
			)}
		</div>
	);
};

export default FAQItem;
