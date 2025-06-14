export default function Button({ children, type = "button", className = "" }) {
	return (
		<button
			type={type}
			className={`bg-sky-600 text-white text-xl font-medium p-2 w-50 rounded-sm hover:bg-black ${className}`}>
			{children}
		</button>
	);
}
