
import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import Profilepic from '../assets/img/profilePic.png';
import Banner from '../components/aboutusComponents/banner';
import Dashboard from '../components/teacherDashboardComponents/Dashboard';
import MyCourses from '../components/teacherDashboardComponents/myCourses';
import AddCourse from '../components/teacherDashboardComponents/addCourse';
import AddContent from '../components/teacherDashboardComponents/addContent';

function TeacherDashboard() {
    const [activeTab, setActiveTab] = useState("dashboard");
    const isLoggedIn = !!sessionStorage.getItem("authToken");
    const userId = JSON.parse(sessionStorage.getItem("user")).id;
    const [teacherID, setTeacherID] = useState("");

    const [userData, setUserData] = useState({

        name: "",
        email: "",
        role: "",
    });



    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = sessionStorage.getItem("authToken");
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




    useEffect(() => {
        const fetchTeacherData = async () => {
            try {
                const response = await axiosInstance.get(`/teachers/${userId}`);
                setTeacherID(response.data.teacher.teacher_id);
            } catch (error) {
                console.error("Error fetching profile:", error);
                if (error.response && error.response.status === 401) {
                    console.warn("Unauthorized. Redirecting to login.");
                    window.location.href = "/login";
                }
            }
        };




        fetchTeacherData();
    }, []);


    const TabContent = {
        dashboard: teacherID ? <Dashboard id={teacherID} /> : <div>Loading dashboard...</div>,
        "my-courses": teacherID ? <MyCourses id={teacherID} /> : <div>Loading courses...</div>,
        "add-course": teacherID ? <AddCourse id={teacherID} /> : <div>Loading courses...</div>,
        "add-content": teacherID ? <AddContent id={teacherID} /> : <div>Loading courses...</div>


    };


    const tabs = [
        { id: "dashboard", label: "Dashboard", icon: "book" },
        { id: "my-courses", label: "My Courses", icon: "bookmark-alt" },
        { id: "add-course", label: "Add New Course", icon: "pencil-alt" },
        { id: "add-content", label: "Add Content", icon: "file-alt" },


    ];




    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (

        <div className="page-content bg-white">
            <Banner title="Dashboard" />
            <div className="content-block">
                <div className="section-area section-sp1">
                    <div className="container">
                        <div className="row">



                            <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
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
                                                    className={`nav-link ${activeTab === "dasboard" ? "active" : ""}`}
                                                    onClick={() => handleTabClick("dashboard")}
                                                    href="#dashboard"
                                                >
                                                    <i className="ti-book" />
                                                    Dashbaord
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link ${activeTab === "my-courses" ? "active" : ""}`}
                                                    onClick={() => handleTabClick("my-courses")}
                                                    href="#my-courses"
                                                >
                                                    <i className="ti-bookmark-alt" />
                                                    My Courses
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link ${activeTab === "add-course" ? "active" : ""}`}
                                                    onClick={() => handleTabClick("add-course")}
                                                    href="#add-course"
                                                >
                                                    <i className="ti-pencil-alt" />
                                                    Add New Course
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link ${activeTab === "add-content" ? "active" : ""}`}
                                                    onClick={() => handleTabClick("add-content")}
                                                    href="#add-content"
                                                >
                                                    <i className="ti-video-camera" />
                                                    Add Content
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-9 col-md-8 col-sm-12">
                                <div className="profile-content-bx">
                                    {TabContent[activeTab]}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
}

export default TeacherDashboard;