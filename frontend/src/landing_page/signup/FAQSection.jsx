import { useState } from "react";
import faqData from "@/faqData";
import FAQItem from "./FAQItem";

const FAQSection = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const handleToggle = (index) => {
		setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
	};
	return (
		<section className="signup-spacing holder">
			<h2 className="text-xl md:text-3xl mb-12 text-zinc-700 font-medium">
				FAQs
			</h2>

			{faqData.map((faq, index) => (
				<FAQItem
					key={index}
					question={faq.question}
					answer={faq.answer}
					isOpen={openIndex === index}
					onToggle={() => handleToggle(index)}
				/>
			))}
		</section>
	);
};

export default FAQSection;
