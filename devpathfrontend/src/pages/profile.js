import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import Profilepic from "../assets/img/profilePic.png";
import ProfileCourses from "../components/profileComponents/profileCourses";
import ProfileQuizResult from "../components/profileComponents/profileQuizResult";
import EditProfile from "../components/profileComponents/editProfile";
import ChangePassword from "../components/profileComponents/changePassword";
import Banner from "../components/aboutusComponents/banner";

function Profile() {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [activeTab, setActiveTab] = useState("courses");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = sessionStorage.getItem("authToken");
        if (token) {
          const response = await axiosInstance.get("/profile", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUserData(response.data.user);
        } else {
          console.warn("No token found in session.");
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        if (error.response && error.response.status === 401) {
          console.warn("Unauthorized. Redirecting to login.");
          window.location.href = "/login";
        }
      }
    };

    fetchProfile();
  }, []);

  const TabContent = {
    courses: <ProfileCourses />,
    "quiz-results": <ProfileQuizResult />,
    "edit-profile": <EditProfile />,
    "change-password": <ChangePassword />,
  };

  const tabs = [
    { id: "courses", label: "Courses", icon: "book" },
    { id: "quiz-results", label: "Completed Courses", icon: "bookmark-alt" },
    { id: "edit-profile", label: "Edit Profile", icon: "pencil-alt" },
    { id: "change-password", label: "Change Password", icon: "lock" },
  ];

  return (
    <div className="page-content bg-white">
      <Banner title="Profile" />
      <div className="content-block">
        <div className="section-area section-sp1">
          <div className="container">
            <div className="row">
              {/* Profile Sidebar */}
              <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
                <div className="profile-bx text-center">
                  <img src={Profilepic} alt="Profile" className="user-profile-thumb" />

                  <div className="profile-info">
                    <h4 className="mt-3">{userData.name}</h4>
                    <span className="text-muted">{userData.email}</span>
                  </div>


                  <div className="profile-tabnav">
                    <ul className="nav nav-tabs flex-column mt-4">
                      {tabs.map(({ id, label, icon }) => (

                        <li key={id} className="nav-item">
                          <a
                            className={`nav-link ${activeTab === id ? "active" : ""}`}
                            onClick={() => setActiveTab(id)}
                            href={`#${id}`}
                            style={{
                              cursor: "pointer",
                              border: activeTab === id ? "1px" : "1px solid transparent",
                              borderRadius: "5px",
                              marginBottom: "10px",
                            }}
                          >
                            <i className={`ti-${icon} me-2`} />
                            {label}
                          </a>
                        </li>
                      ))}
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

export default Profile;
