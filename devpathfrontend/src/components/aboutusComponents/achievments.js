import WOW from 'wow.js';
import 'animate.css';
import { useEffect } from "react";
//<img src="assets/images/icon/icon1.png" alt="" />
import Icon1 from '../../assets/images/icon/icon1.png';
import Icon2 from '../../assets/images/icon/icon2.png';
import Icon3 from '../../assets/images/icon/icon3.png';
import Icon4 from '../../assets/images/icon/icon4.png';



function Achievements() {
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
                    <div className="col-lg-6 m-b30 wow animate__fadeInLeft" data-wow-duration="2s">
                        <h2 className="title-head">
                            Learn a new skill online
                            <br /> <span className="text-primary"> on your time</span>
                        </h2>
                        <h4>
                        </h4>
                        <p>
                            Expand your horizons with access to a vast array of courses. Explore subjects tailored to inspire and elevate
                            your learning journey.
                        </p>
                        <a href="#" className="btn button-md">
                            Join Now
                        </a>
                    </div>
                    <div className="col-lg-6 wow animate__fadeInRight" data-wow-duration="2s">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                <div className="feature-container">
                                    <div className="feature-md text-white m-b20">
                                        <a href="#" className="icon-cell">
                                            <img src={Icon1} alt="" />
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-title">Our Vision</h5>
                                        <p>
                                            To revolutionize education by making it accessible, engaging,
                                            and transformative for everyone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                <div className="feature-container">
                                    <div className="feature-md text-white m-b20">
                                        <a href="#" className="icon-cell">
                                            <img src={Icon2} alt="" />
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-title">Guiding Principles</h5>
                                        <p>
                                            Excellence, innovation, and a commitment to nurturing talent
                                            in every learner.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                <div className="feature-container">
                                    <div className="feature-md text-white m-b20">
                                        <a href="#" className="icon-cell">
                                            <img src={Icon3} alt="" />
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-title">Path to Success</h5>
                                        <p>
                                            Combining passion, discipline, and the right tools to help
                                            you achieve your dreams.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                <div className="feature-container">
                                    <div className="feature-md text-white m-b20">
                                        <a href="#" className="icon-cell">
                                            <img src={Icon4} alt="" />
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-title">Innovative Tools</h5>
                                        <p>
                                            Leveraging the latest technology to create an immersive and
                                            interactive learning experience.
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

export default Achievements;
