import { Link } from "react-router-dom";
import ArrowLink from "@components/common/ArrowLink";

const ImgRightBlock = ({ data }) => {
	return (
		<>
			<section className="section-spacing">
				<div className="holder flex flex-col-reverse md:flex-row justify-between sm:items-center">
					<div className="text-zinc-600 md:w-sm">
						<h2 className="text-3xl mb-5 font-medium">{data.title}</h2>
						<p className="text-lg my-4">{data.description}</p>
						{data.links && (
							<div className="prodDemo mb-5">
								<ArrowLink>Learn more </ArrowLink>
							</div>
						)}
					</div>
					<div className="w-fit my-2">
						<Link to={`/products/${data.id}`}>
							<img src={data.img} alt={data.title} className="w-fit" />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default ImgRightBlock;
