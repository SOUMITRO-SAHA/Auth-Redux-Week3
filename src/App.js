import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
	const { isAuthenticated } = useSelector((state) => state);

	return (
		<div className=''>
			{!isAuthenticated && <Login />}
			{isAuthenticated && <Profile />}
			<ToastContainer
				className={
					"bg-red-500 px-10 py-2 rounded-r-md text-xl absolute bottom-0 left-0 text-white"
				}
			/>
		</div>
	);
}

export default App;
