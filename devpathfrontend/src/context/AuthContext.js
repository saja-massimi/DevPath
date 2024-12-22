import React, { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadAuthData = async () => {
            const token = localStorage.getItem("authToken");
            if (token) {
                setAuthToken(token);

                // const userData = await fetchUserProfile(token);
                // setUser(userData);
            }
            setIsLoading(false);
        };

        loadAuthData();
    }, []);

    const login = (token, userData) => {
        setAuthToken(token);
        setUser(userData);
        localStorage.setItem("authToken", token);
    };

    const logout = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem("authToken");
    };

    return (
        <AuthContext.Provider
            value={{
                authToken,
                user,
                isLoading,
                login,
                logout,
            }}
        >
            {!isLoading && children}
        </AuthContext.Provider>
    );
};
