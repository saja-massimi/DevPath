import {useEffect} from 'react';
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
                        <h4>
                        </h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type.
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
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
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
                                        <h5 className="ttr-tilte">Kingster's Principle</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
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
                                        <h5 className="ttr-tilte">Key Of Success</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
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
                                        <h5 className="ttr-tilte">Our Philosophy</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
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