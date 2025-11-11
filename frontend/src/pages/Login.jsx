import React, { useState } from "react";
import {
	Link,
	useNavigate,
} from "react-router-dom";
import axios from "axios";
import {
	ToastContainer,
	toast,
} from "react-toastify";

const Login = () => {
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState({
		email: "",
		password: "",
	});
	const { email, password } = inputValue;
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setInputValue({
			...inputValue,
			[name]: value,
		});
	};

	const handleError = (err) =>
		toast.error(err, {
			position: "bottom-left",
		});
	const handleSuccess = (msg) =>
		toast.success(msg, {
			position: "bottom-left",
		});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				"http://localhost:8081/login",
				{
					...inputValue,
				},
				{ withCredentials: true },
			);
			console.log(data);
			const { success, message } = data;
			if (success) {
				handleSuccess(message);
				setTimeout(() => {
					navigate("/authHome");
				}, 1000);
			} else {
				handleError(message);
			}
		} catch (error) {
			console.log(error);
		}
		setInputValue({
			...inputValue,
			email: "",
			password: "",
		});
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl">
				<h2 className="text-2xl font-bold text-center text-gray-900">
					Login Account
				</h2>
				<form
					onSubmit={handleSubmit}
					className="space-y-6">
					<div className="space-y-2">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							name="email"
							value={email}
							placeholder="Enter your email"
							onChange={handleOnChange}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
						/>
					</div>
					<div className="space-y-2">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							type="password"
							name="password"
							value={password}
							placeholder="Enter your password"
							onChange={handleOnChange}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
						/>
					</div>
					<button
						type="submit"
						className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150">
						Submit
					</button>
					<span className="text-sm text-center block text-gray-600">
						Don't have an account?
						<Link
							to={"/sign-up"}
							className="font-medium text-indigo-600 hover:text-indigo-500">
							Signup
						</Link>
					</span>
				</form>
				<ToastContainer />
			</div>
		</div>
	);
};
export default Login;
