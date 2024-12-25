import React, { useState, useEffect } from "react";
import Logo from "../assets/img/devpath-high-resolution-logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "../api/axiosInstance";

function TeacherNavbar() {
    const isLoggedIn = !!sessionStorage.getItem("authToken");
    const navigate = useNavigate();
    const isTeacher = sessionStorage.getItem("user_role") === "teacher";

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem("authToken");
            if (token) {
                await axios.post(
                    "/logout",
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
            localStorage.removeItem("user_role");

            navigate("/");
            window.location.reload();
        } catch (error) {
            console.error("Logout failed:", error.response?.data || error.message);
        }
    };

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isDropdownOpen &&
                !event.target.closest("#userDropdown")
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

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
                            className={`navbar-toggler menuicon justify-content-end ${isMenuOpen ? "collapsed" : ""}`}
                            type="button"
                            onClick={toggleMenu}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                        <div className="secondary-menu">
                            <div className="secondary-inner">
                                <ul>
                                    {
                                        isLoggedIn && isTeacher && (
                                            <>
                                                <li className="dropdown" id="userDropdown">
                                                    <button
                                                        className="btn-link dropdown-toggle"
                                                        type="button"
                                                        onClick={toggleDropdown}
                                                        style={{ textDecoration: "none", backgroundColor: "transparent" }}
                                                    >
                                                        <i className="ti-user"></i>
                                                    </button>
                                                    {isDropdownOpen && (
                                                        <ul className="dropdown-menu show">
                                                            <li>
                                                                <Link to={`/teacherProfile/${localStorage.getItem("user_id")}`} className="dropdown-item">
                                                                    Profile
                                                                </Link>
                                                            </li>

                                                            <li>
                                                                <button
                                                                    onClick={handleLogout}
                                                                    className="dropdown-item"
                                                                >
                                                                    Sign Out
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    )}
                                                </li>
                                            </>
                                        )
                                    }


                                </ul>
                            </div>
                        </div>


                        <div
                            className={`menu-links navbar-collapse collapse justify-content-start ${isMenuOpen ? "show" : ""}`}
                            id="menuDropdown"
                        >
                            <ul className="nav navbar-nav">
                                <li>
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/teacherDashboard" className={({ isActive }) => (isActive ? "active" : "")}>
                                        Dashboard
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

export default TeacherNavbar;
