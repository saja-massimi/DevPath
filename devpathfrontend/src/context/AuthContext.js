import React, { createContext, useState, useEffect } from 'react';
import axios from '../api/axiosInstance';

const AuthContext = createContext({
    user: null,
    token: null,
    loading: true,
    login: () => { },

    clearSession: () => { },
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => JSON.parse(sessionStorage.getItem("user")) || null);
    const [token, setToken] = useState(() => sessionStorage.getItem("authToken") || null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const sessionToken = sessionStorage.getItem("authToken");
            if (sessionToken && !user) {
                try {
                    const { data } = await axios.post("/login", {}, {
                        headers: { Authorization: `Bearer ${sessionToken}` },
                        withCredentials: true,
                    });

                    const { user } = data;
                    setUser(user);
                    setToken(sessionToken);
                    sessionStorage.setItem("user", JSON.stringify(user));
                    sessionStorage.setItem("authToken", sessionToken);
                } catch (error) {
                    console.error("Failed to fetch user:", error.response?.data || error.message);
                    clearSession();
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchUser();
    }, [user]);


    const login = (userData, authToken) => {
        setUser(userData);
        setToken(authToken);

        sessionStorage.setItem("user", JSON.stringify(userData));
        sessionStorage.setItem("authToken", authToken);
    };



    const clearSession = () => {
        alert("Clearing session");
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("authToken");
        setUser(null);
        setToken(null);
    };


    return (
        <AuthContext.Provider value={{ user, token, loading, login, clearSession }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext };
