export default function ArrowLink({ href, children, className = "" }) {
	return (
		<a
			href={href}
			className={`text-blue-500 hover:text-black pr-8 ${className}`}>
			<span className="text-md font-medium font-stretch-expanded">
				{children}
			</span>
			<i className="fa-solid fa-arrow-right-long text-sm ml-2 mt-1"></i>
		</a>
	);
}
