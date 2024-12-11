import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            api.get("/auth/verify") // Endpoint to verify the token
                .then(response => {
                    setAuthState({
                        isAuthenticated: true,
                        user: response.data.user,
                    });
                })
                .catch(() => {
                    localStorage.removeItem("token");
                    setAuthState({
                        isAuthenticated: false,
                        user: null,
                    });
                });
        }
    }, []);

    const login = (token, user) => {
        localStorage.setItem("token", token);
        setAuthState({
            isAuthenticated: true,
            user,
        });
        navigate("/dashboard");
    };

    const logout = () => {
        localStorage.removeItem("token");
        setAuthState({
            isAuthenticated: false,
            user: null,
        });
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
