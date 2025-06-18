export default function Button({ children, type = "button", className = "" }) {
	return (
		<button
			type={type}
			className={`bg-sky-600 text-white text-xl font-stretch-condensed font-medium p-2 w-50 rounded-sm hover:bg-neutral-800 ${className}`}>
			{children}
		</button>
	);
}
