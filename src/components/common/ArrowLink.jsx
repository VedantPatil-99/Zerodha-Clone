export default function ArrowLink({ href, children }) {
	return (
		<a href={href} className={"text-sky-600 hover:text-black"}>
			<span className="text-md font-medium font-stretch-expanded">
				{children}
			</span>
			<i className="fa-solid fa-arrow-right-long text-sm ml-2 mt-1"></i>
		</a>
	);
}
