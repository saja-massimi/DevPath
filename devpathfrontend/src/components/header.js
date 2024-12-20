import React, { useState, useEffect } from "react";
import bgImage from '../assets/images/background/bg1.jpg';
import axiosInstance from '../api/axiosInstance';

function Header() {
  const isLoggedIn = !!localStorage.getItem("authToken");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (token) {
          const response = await axiosInstance.get('/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
     
          setName(response.data.user.name);
        } else {
          setName(""); 
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setName(""); 
      }
    };

    fetchProfile();
  }, [isLoggedIn]);

  return (
    <>
      <div
        className="mt-5 section-area section-sp1 ovpr-dark bg-fix online-cours"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-white">
              <h2>Online Courses To Learn</h2>
              <h5>Transform Your Ideas into Reality with Code</h5>

              {isLoggedIn ? (
                <p className="text-center mb-2">
                  Welcome <strong>{name}</strong>, Start Learning
                </p>
              ) : (

                <div className="d-flex justify-content-center mb-5">
                  <a className="btn btn-primary" >Join Now</a>
                </div>



              )}

            </div>
          </div>
          <div className="mw800 m-auto">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="cours-search-bx m-b30">
                  <div className="icon-box">
                    <h3>
                      <i className="ti-user" />
                      <span className="counter"></span>
                    </h3>
                  </div>
                  <span className="cours-search-text">Our instructors are passionate professionals with years of experience in programming and software development</span>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="cours-search-bx m-b30">
                  <div className="icon-box">
                    <h3>
                      <i className="ti-book" />
                      <span className="counter"></span>
                    </h3>
                  </div>
                  <span className="cours-search-text">Our online classes are designed to fit seamlessly into your schedule, letting you learn at your own pace and from the comfort of home</span>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="cours-search-bx m-b30">
                  <div className="icon-box">
                    <h3>
                      <i className="ti-layout-list-post" />
                      <span className="counter"></span>
                    </h3>
                  </div>
                  <span className="cours-search-text">Our platform’s assignments are crafted to turn theory into practice, allowing you to apply what you’ve learned and solidify your skills</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
