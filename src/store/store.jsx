// 3 Main Topics
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const initialState = {
	isAuthenticated: false,
	token: {},
};

const authSlice = createSlice({
	name: "authentication",
	initialState,
	reducers: {
		setAuthentication(state) {
			state.isAuthenticated = true;
		},
		setToken(state, action) {
			state.token = action.payload;
		},
	},
});

const store = configureStore({
	reducer: authSlice.reducer,
});

const StoreProvider = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

export const authActions = authSlice.actions;
export default StoreProvider;
