/**
 * * @param {string} str - The input string (e.g., "TCS", "HDFCBANK").
 * @param {number} opacity
 * @returns {string}
 */
export const stringToColor = (
	str,
	opacity = 1,
) => {
	let hash = 0;

	for (let i = 0; i < str.length; i++) {
		hash =
			str.charCodeAt(i) + ((hash << 10) - hash);
	}

	let color = "";

	for (let i = 0; i < 3; i++) {
		const value = Math.abs(
			(hash >> (i * 8)) & 0xff,
		);

		const component = Math.max(value, 70);
		color += (i > 0 ? "," : "") + component;
	}

	return `rgba(${color}, ${opacity})`;
};
