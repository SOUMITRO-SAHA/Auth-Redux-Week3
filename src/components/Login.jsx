import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { authActions } from "../store/store";

const Login = () => {
	const { isAuthenticated, token } = useSelector((state) => state);
	const dispatch = useDispatch();
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const formSubmitHandler = async (e) => {
		e.preventDefault();

		try {
			// Server
			console.log(userName, password);
			const { data } = await axios.post("https://dummyjson.com/auth/login", {
				username: userName,
				password: password,
			});

			// Updating the State:
			dispatch(authActions.setAuthentication());
			dispatch(authActions.setToken(data));
		} catch (error) {
			return toast("Something went wrong.", {
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
		}
	};

	return (
		<main className='h-screen w-full flex justify-center items-center'>
			<div className='border p-5 px-8 flex flex-col gap-3'>
				<h4 className='text-lg font-base'>Welcome back!👋</h4>
				<h1 className='text-2xl font-semibold'>Sign to your account</h1>

				<form onSubmit={formSubmitHandler} className='flex flex-col gap-3'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='name'>Your Name</label>
						<input
							type='text'
							name='name'
							placeholder='Your Name'
							className='border-2 h-12 w-full px-3 rounded outline-none active:ring-1 active:ring-blue-500'
							onChange={(e) => setUserName(e.target.value)}
						/>
					</div>
					<div className='flex flex-col gap-2'>
						<label htmlFor='password'>Your Password</label>
						<input
							type='password'
							name='password'
							placeholder='Password'
							className='border-2 h-12 w-full px-3 rounded outline-none active:ring-1 active:ring-blue-500'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<button
						type='submit'
						className='bg-slate-900 w-full h-12 text-white text-xl font-semibold rounded mt-3'
					>
						Submit
					</button>
				</form>
			</div>
		</main>
	);
};

export default Login;
