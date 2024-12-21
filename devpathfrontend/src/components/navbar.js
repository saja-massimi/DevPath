import React, { useState, useEffect } from "react";
import Logo from "../assets/img/devpath-high-resolution-logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from '../api/axiosInstance';

function Navbar() {
    const isLoggedIn = !!localStorage.getItem("authToken");
    const navigate = useNavigate();

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const handleLogout = async () => {
        try {
            const token = localStorage.getItem("authToken");
            if (token) {
                await axios.post(
                    '/logout',
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        withCredentials: true,
                    }
                );
            }

            localStorage.removeItem("authToken");
            localStorage.removeItem("user_id");

            navigate("/");
            window.location.reload();
        } catch (error) {
            console.error('Logout failed:', error.response?.data || error.message);
        }
    };


    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleSearchBar = () => {
        setSearchOpen(!isSearchOpen);
    };

    const closeSearchBar = () => {
        setSearchOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const menu = document.getElementById("menuDropdown");
            if (menu && !menu.contains(event.target) && isMenuOpen) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="header rs-nav">
            <div className="sticky-header navbar-expand-lg">
                <div className="menu-bar clearfix">
                    <div className="container clearfix">
                        {/* Header Logo */}
                        <div className="menu-logo">
                            <Link to="/">
                                <img src={Logo} alt="logo" />
                            </Link>
                        </div>
                        {/* Mobile Nav Button */}
                        <button
                            className={`navbar-toggler menuicon justify-content-end ${isMenuOpen ? "collapsed" : ""
                                }`}
                            type="button"
                            onClick={toggleMenu}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                        {/* Author Nav */}
                        <div className="secondary-menu">
                            <div className="secondary-inner">
                                <ul>
                                    <li>
                                        {isLoggedIn ? (
                                            <Link to="/profile" className="btn-link" style={{ textDecoration: "none" }}>
                                                <span>
                                                    <i className="ti-user" ></i>
                                                </span>
                                            </Link>
                                        ) : (
                                            <Link to="/register" className="btn-link" style={{ textDecoration: "none" }}>
                                                <span>Register</span>
                                            </Link>
                                        )}
                                    </li>
                                    <li className="search-btn">
                                        {isLoggedIn ? (
                                            <button onClick={handleLogout} className="btn-link" style={{ textDecoration: "none" }}>
                                                <span>
                                                    <i className="ti-power-off" ></i> Logout
                                                </span>
                                            </button>
                                        ) : (
                                            <Link to="/login" className="btn-link" style={{ textDecoration: "none" }}>
                                                <span>Login</span>
                                            </Link>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Search Box */}
                        <div
                            className={`nav-search-bar ${isSearchOpen ? "active" : ""
                                }`}
                        >
                            <form action="#">
                                <input
                                    name="search"
                                    type="text"
                                    className="form-control"
                                    placeholder="Type to search"
                                />
                                <span onClick={toggleSearchBar}>
                                    <i className="ti-search" />
                                </span>
                            </form>
                            <span
                                id="search-remove"
                                onClick={closeSearchBar}
                            >
                                <i className="ti-close" />
                            </span>
                        </div>
                        {/* Navigation Menu */}
                        <div
                            className={`menu-links navbar-collapse collapse justify-content-start ${isMenuOpen ? "show" : ""
                                }`}
                            id="menuDropdown"
                        >
                            <ul className="nav navbar-nav">
                                <li>
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/courses" className={({ isActive }) => (isActive ? "active" : "")}>
                                        Courses
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                                        Contact Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* Navigation Menu END */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
