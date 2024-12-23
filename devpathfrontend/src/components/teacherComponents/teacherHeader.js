import React, { useState, useEffect } from "react";
import bgImage from '../../assets/images/background/bg1.jpg';
import axiosInstance from '../../api/axiosInstance';
import WOW from 'wow.js';
import 'animate.css';


function TeacherHeader() {
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
                            <h2>Empower Others Through Online Learning</h2>
                            <h5>Share Your Expertise and Inspire the Next Generation</h5>


                            <p className="text-center mb-2">
                                Welcome back, <strong>{name}</strong>! Ready to inspire your students?

                            </p>

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
                                    <span className="cours-search-text">Publish the course you want, in the way you want, and always have control of your own content</span>
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
                                    <span className="cours-search-text">Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</span>
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
                                    <span className="cours-search-text">Expand your professional network, build your expertise, and earn money on each paid enrollment.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeacherHeader;
