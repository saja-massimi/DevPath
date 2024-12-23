import React, { useState, useEffect } from "react";
import bgImage from '../assets/images/background/bg1.jpg';
import axiosInstance from '../api/axiosInstance';
import WOW from 'wow.js';
import 'animate.css';
import '../componentsCSS/header.css';

function Header() {
  const isLoggedIn = !!localStorage.getItem("authToken");
  const [name, setName] = useState("");

  const isTeacher = localStorage.getItem("user_role") === "teacher";



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

  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow", // Default class for triggering animations
      animateClass: "animate__animated", // Animate.css default class prefix
      offset: 0,
      mobile: true, // Enable animations on mobile
      live: true, // Act on asynchronously loaded content
    });
    wow.init();
  }, []);

  return (
    <>


      <div
        className="mt-5 section-area section-sp1 ovpr-dark bg-fix online-cours"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container">
          <div className="row wow animate__slideInDown" data-wow-delay="0.5s">
            <div className="col-md-12 text-center text-white">
              <h2>Explore Online Learning</h2>
              <h5>Bring Your Creative Vision to Life with Coding</h5>

              {isLoggedIn ? (
                <p className="text-center mb-2">
                  Welcome back, <strong>{name}</strong>! Let’s continue your journey.
                </p>
              ) : (

                <>

                  <>
                    <div className="d-flex justify-content-center mb-5">
                      <a className="btn btn-primary mx-2" href="/register">Start Teaching Now</a>
                      <a className="btn btn-primary mx-2" href="/register">Start Learning Now</a>
                    </div>
                  </>

                </>


              )}

            </div>


          </div>
          <div className="mw800 m-auto wow animate__fadeInUp" data-wow-delay="0.5s">
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
