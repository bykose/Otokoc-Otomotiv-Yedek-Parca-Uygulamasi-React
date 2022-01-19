import React, { useState, createContext, useContext} from "react";
import { Users } from "../fake-db/Users";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [users, setUsers] = useState(Users);
	const [user, setUser] = useState("");
	const [isLogin, setIsLogin] = useState(false);
	const [alert, setAlert] = useState(false)

	const login = (data) => {
		setIsLogin(true);
		setUsers((prev) => [...prev, data]);
		setUser(data)
	};
	const checkUser = (data) => {
		if (
			users.some(
				(user) =>
					(user.email === data.email && user.password === data.password) ||
					(user.username === data.username && user.password === data.password)
			)
		) {
			setIsLogin(true);
			setUser(data)
			
			
		} else {
			setAlert(true)
			setTimeout(() => {
				setAlert(false)
			}, 3000);
		}
	};
	const logOut=()=>{
		setIsLogin(false)
		setUser("")
	}
	const values = {
		user,
		isLogin,
		users,
		login,
		checkUser,
		alert,
		logOut,
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
