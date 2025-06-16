import eduImg from "@assets/images/education.svg";
const Education = () => {
	return (
		<>
			<section>
				<div className="grid md:grid-cols-12">
					<div className="col-span-5">
						<img src={eduImg} alt="Education" />
					</div>
					<div className="col-span-7"></div>
				</div>
			</section>
		</>
	);
};

export default Education;
