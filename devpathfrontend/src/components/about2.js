import { useEffect } from 'react';
import WOW from 'wow.js';
import 'animate.css';

function About2() {
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
        <div className="section-area section-sp1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 m-b30 wow animate__fadeInLeft" data-wow-delay="0.5s">
                        <h2 className="title-head ">
                            Learn a new skill online
                            <br /> <span className="text-primary"> on your time</span>
                        </h2>
                        <p>
                            Unlock the doors to endless possibilities with our flexible online courses.
                            Whether you're a beginner or looking to enhance your skills, we provide
                            comprehensive resources to help you achieve your goals from the comfort
                            of your own home.
                        </p>
                        <a href="#" className="btn button-md">
                            Join Now
                        </a>
                    </div>
                    <div className="col-lg-6 wow animate__fadeInRight" data-wow-delay="0.5s">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                <div className="feature-container">
                                    <div className="feature-md text-white m-b20">
                                        <a href="#" className="icon-cell">
                                            <img src="assets/images/icon/icon1.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-tilte">Our Philosophy</h5>
                                        <p>
                                            Empowering learners through innovation and dedication to
                                            quality education.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                <div className="feature-container">
                                    <div className="feature-md text-white m-b20">
                                        <a href="#" className="icon-cell">
                                            <img src="assets/images/icon/icon2.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-tilte">Core Principles</h5>
                                        <p>
                                            Integrity, creativity, and persistence drive our learning
                                            environment forward.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                <div className="feature-container">
                                    <div className="feature-md text-white m-b20">
                                        <a href="#" className="icon-cell">
                                            <img src="assets/images/icon/icon3.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-tilte">Keys to Success</h5>
                                        <p>
                                            A blend of dedication, expert guidance, and consistent practice
                                            unlocks the path to success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                <div className="feature-container">
                                    <div className="feature-md text-white m-b20">
                                        <a href="#" className="icon-cell">
                                            <img src="assets/images/icon/icon4.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-tilte">Innovative Learning</h5>
                                        <p>
                                            Utilizing cutting-edge tools and techniques to deliver an
                                            engaging and effective educational experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About2;
