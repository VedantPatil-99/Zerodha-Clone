import eduImg from "@assets/images/education.svg";
import helpers from "@/helpers.json";
import WhyUsFrag from "@pages/home/WhyUsFrag";
const Education = () => {
	return (
		<>
			<section className="section-spacing holder">
				<div className="flex flex-col md:flex-row gap-8 items-center justify-between">
					<div className="mb-8 md:mb-0">
						<img src={eduImg} alt="Education" className="w-full" />
					</div>
					<div className="">
						<h2 className="header-1">Free and open market education</h2>
						{helpers.eduData.map((item, idx) => (
							<WhyUsFrag key={idx} description={item.description} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Education;
