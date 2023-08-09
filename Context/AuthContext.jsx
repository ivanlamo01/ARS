"use client"

import React, { useState, useContext } from "react";
import { registerRequest } from "../services/userServices";

export const AuthContext = React.createContext();

export const useAuthContext = () =>{ 
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuthContext debe estar dentro del proveedor AuthContext")
    return context
}

const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(
        localStorage.getItem("login") ? true : false
    );
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || {}
    );
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    
    const [errors,setErrors] = useState([])
    
    const reg = async (user)=>{
        try {
            const res = await registerRequest(user)
            setUser(res.data)
            setIsAuthenticated(true)
            setTimeout(() => {
                setIsAuthenticated(false)
            }, 1000);
        } catch (error) {
            console.log(error);
            setErrors(error.response.data)
        }
    }
    const handleLogin = (userInfo ) => {
        localStorage.setItem("login", "true");
        setLogin(true);
        if (userInfo) {
            setUser(userInfo);
            localStorage.setItem("user", JSON.stringify(userInfo));
        }
    };
    const handleLogout = () => {
        localStorage.removeItem("login");
        localStorage.removeItem("user");
        setLogin(false)
        ;
    };
    return (
        <AuthContext.Provider value={{ login,setLogin, handleLogin, handleLogout, user,reg, isAuthenticated, errors }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
