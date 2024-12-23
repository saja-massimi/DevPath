import { useEffect } from 'react';
import WOW from 'wow.js';
import 'animate.css';
import Icon1 from '../../assets/images/icon/icon1.png';
import Icon2 from '../../assets/images/icon/icon2.png';
import Icon3 from '../../assets/images/icon/icon3.png';
import Icon4 from '../../assets/images/icon/icon4.png';

function TeacherAbout2() {
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
                            Share Your Expertise <br />
                            <span className="text-primary">Teach with Confidence</span>
                        </h2>
                        <p>
                            Empower learners worldwide by creating and delivering impactful courses.
                            Our platform provides you with the tools to share your knowledge, build
                            your brand, and inspire the next generation of coders and creators.
                        </p>
                        <a href="#" className="btn button-md">
                            Start Teaching Now
                        </a>
                    </div>
                    <div className="col-lg-6 wow animate__fadeInRight" data-wow-delay="0.5s">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                <div className="feature-container">
                                    <div className="feature-md text-white m-b20">
                                        <a href="#" className="icon-cell">
                                            <img src={Icon1} alt="Empower Learners" />
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-tilte">Empower Learners</h5>
                                        <p>
                                            Inspire students by delivering impactful, high-quality content that drives results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                <div className="feature-container">
                                    <div className="feature-md text-white m-b20">
                                        <a href="#" className="icon-cell">
                                            <img src={Icon2} alt="Flexible Tools" />
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-tilte">Flexible Tools</h5>
                                        <p>
                                            Use our intuitive platform to create courses, host live sessions, and track performance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                <div className="feature-container">
                                    <div className="feature-md text-white m-b20">
                                        <a href="#" className="icon-cell">
                                            <img src={Icon3} alt="Earn Recognition" />
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-tilte">Earn Recognition</h5>
                                        <p>
                                            Build your reputation and become a trusted authority in your field of expertise.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                <div className="feature-container">
                                    <div className="feature-md text-white m-b20">
                                        <a href="#" className="icon-cell">
                                            <img src={Icon4} alt="Global Reach" />
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-tilte">Global Reach</h5>
                                        <p>
                                            Connect with a global audience and inspire learners from all corners of the world.
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

export default TeacherAbout2;
