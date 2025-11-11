import { useEffect, useState } from "react";
import {
	Link,
	useNavigate,
} from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import {
	ToastContainer,
	toast,
} from "react-toastify";

const Home = () => {
	const navigate = useNavigate();
	const [cookies, removeCookie] = useCookies([]);
	const [username, setUsername] = useState("");
	useEffect(() => {
		const verifyCookie = async () => {
			if (!cookies.token) {
				navigate("/login");
			}
			const { data } = await axios.post(
				"http://localhost:8081/",
				{},
				{ withCredentials: true },
			);
			const { status, user } = data;
			setUsername(user);
			return status
				? toast(`Hello ${user}`, {
						position: "top-right",
				  })
				: (removeCookie("token"),
				  navigate("/login"));
		};
		verifyCookie();
	}, [cookies, navigate, removeCookie]);
	const Logout = () => {
		removeCookie("token");
		navigate("/signup");
	};
	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
				<h4 className="text-3xl font-bold text-gray-800 mb-8">
					Welcome
					<span className="text-indigo-600 ms-2">
						{username}
					</span>
				</h4>

				<div className="flex flex-row justify-between items-center max-w-lg gap-8">
					<button
						onClick={Logout}
						className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
						LOGOUT
					</button>
					<Link
						to={"/"}
						className="px-6 py-2 bg-cyan-600 text-white font-medium rounded-lg shadow-md hover:bg-cyan-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50">
						Explore
					</Link>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default Home;
