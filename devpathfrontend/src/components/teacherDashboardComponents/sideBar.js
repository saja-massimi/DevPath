import { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import Profilepic from '../../assets/img/profilePic.png';

function SideBar({ activeTab, setActiveTab }) {
    const isLoggedIn = !!localStorage.getItem("authToken");
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        role: "",
    });


    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (token) {
                    const response = await axiosInstance.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUserData(response.data.user);
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        fetchProfile();
    }, [isLoggedIn]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="col-lg-3 col-md-4 col-sm-12 m-b30">
            <div className="profile-bx text-center">
                <div className="user-profile-thumb">
                    <img src={Profilepic} alt="Profile" />
                </div>
                <div className="profile-info">
                    <h4>{userData.name}</h4>
                    <span>{userData.email}</span>
                </div>

                <div className="profile-tabnav">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === "Dashbaord" ? "active" : ""}`}
                                onClick={() => handleTabClick("courses")}
                                href="#courses"
                            >
                                <i className="ti-book" />
                                Dashbaord
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === "quiz-results" ? "active" : ""}`}
                                onClick={() => handleTabClick("quiz-results")}
                                href="#quiz-results"
                            >
                                <i className="ti-bookmark-alt" />
                                My Courses
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === "edit-profile" ? "active" : ""}`}
                                onClick={() => handleTabClick("edit-profile")}
                                href="#edit-profile"
                            >
                                <i className="ti-pencil-alt" />
                                Add New Course
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === "change-password" ? "active" : ""}`}
                                onClick={() => handleTabClick("change-password")}
                                href="#change-password"
                            >
                                <i className="ti-lock" />
                                Reviews
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default SideBar;
