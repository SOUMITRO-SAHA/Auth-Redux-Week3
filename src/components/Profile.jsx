import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
	const { token } = useSelector((state) => state);
	const { username, firstName, lastName, email } = token;
	console.log(token);
	return (
		<div className='h-screen w-full bg-blue-500 flex justify-center items-center'>
			<div className='w-[400px] bg-white rounded text-center py-8 flex flex-col gap-3 text-xl'>
				{/* Welcome Message */}
				<div className='font-normal'>
					Welcome, <span className='font-semibold'>{firstName}</span>
					<span className='text-2xl'>🙌</span>
				</div>
				{/* User Name */}
				<div>Your User Name is : {username}</div>

				{/* Email */}
				<div>Your Email is : {email}</div>

				{/* Full Name */}
				<div>
					Full Name: {firstName} {lastName}
				</div>
			</div>
		</div>
	);
};

export default Profile;
