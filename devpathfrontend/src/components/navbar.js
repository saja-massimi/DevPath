import React, { useState, useEffect, useContext } from "react";
import Logo from "../assets/img/devpath-high-resolution-logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from '../api/axiosInstance';

function Navbar() {

    const navigate = useNavigate();



    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const user = JSON.parse(sessionStorage.getItem("user"));


    const handleLogout = async () => {
        try {

            await axiosInstance.post("/logout", {}, {

                withCredentials: true,
            });
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("authToken");
            navigate("/");
            window.location.reload();
        } catch (error) {
            console.error("Failed to logout:", error);
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


    if (user) {
        if (user.role == "teacher")
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
                                                user && (
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
                                                                        <Link to={`/teacherProfile/${user.id}`} className="dropdown-item">
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



                        {/* User Section */}
                        <div className="secondary-menu">
                            <div className="secondary-inner">
                                <ul>
                                    {user ? (
                                        <>
                                            <li>
                                                <Link to="/wishlist" className="btn-link" style={{ textDecoration: "none" }}>
                                                    <i className="ti-heart"></i>
                                                </Link>
                                            </li>

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
                                                            <Link to="/profile" className="dropdown-item">
                                                                Profile
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <button
                                                                onClick={handleLogout}
                                                                className="dropdown-item "
                                                            >
                                                                Sign Out
                                                            </button>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>

                                        </>
                                    ) : (
                                        <>
                                            <li className="search-btn">
                                                <Link to="/register" className="btn-link mr-3" style={{ textDecoration: "none" }}>
                                                    Register
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/login" className="btn-link" style={{ textDecoration: "none" }}>
                                                    Login
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                </ul>


                            </div>
                        </div>



                        {/* Navigation Links */}
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










                    </div>
                </div>
            </div>
        </header >
    );
}

export default Navbar;
