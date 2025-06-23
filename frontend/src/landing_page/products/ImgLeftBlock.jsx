import { Link } from "react-router-dom";
import ArrowLink from "@components/common/ArrowLink";

const ImgLeftBlock = ({ data }) => {
	return (
		<section className="section-spacing-reverse">
			<div className="holder flex flex-col md:flex-row justify-between sm:items-center gap-x-12">
				<div className="w-fit mb-2">
					<Link to={`/products/${data.id}`}>
						<img src={data.img} alt={data.title} className="w-fit" />
					</Link>
				</div>
				<div className="text-zinc-600 md:w-sm">
					<h2 className="text-3xl mb-5 font-medium">{data.title}</h2>
					<p className="text-lg my-4">{data.description}</p>
					{data.links && (
						<div className="prodDemo mb-5 flex flex-col justify-between gap-0.5">
							{data.links.map((link, idx) => (
								<ArrowLink key={idx} to={link.url}>
									{link.text}
								</ArrowLink>
							))}
						</div>
					)}
					{data.appLinks && (
						<div className="app-links mt-6 flex items-baseline gap-x-6">
							<a target="_blank" href={data.appLinks.google}>
								<img src={data.appLinks.googleImg} className="w-36" />
							</a>
							<a target="_blank" href={data.appLinks.apple}>
								<img src={data.appLinks.appleImg} className="w-32" />
							</a>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default ImgLeftBlock;
