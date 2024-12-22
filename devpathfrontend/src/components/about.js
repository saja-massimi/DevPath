import bgImage from '../assets/images/background/bg1.jpg';
import WOW from 'wow.js';
import 'animate.css';
import { useEffect } from 'react';

function About() {
    useEffect(() => {
        const wow = new WOW({
            boxClass: 'wow', // Default class for triggering animations
            animateClass: 'animate__animated', // Animate.css default class prefix
            offset: 0,
            mobile: true, // Enable animations on mobile
            live: true, // Act on asynchronously loaded content
        });
        wow.init();
    }, []);
    return (
        <>
            <>
                <div
                    className="section-area section-sp2 bg-fix ovbl-dark join-bx text-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="join-content-bx text-white">
                                    <h2 className="wow animate__slideInDown" data-wow-delay="0.5s">
                                        Learn Coding online on <br /> your time
                                    </h2>
                                    <h4>
                                        <span className="counter wow animate__slideInUp" >57,000</span> Online Courses
                                    </h4>
                                    <p className='wow animate__slideInUp'>
                                        An e-learning platform designed for coding education and instruction. It offers a user-friendly interface for learners to access diverse courses, from basic programming concepts to advanced software development.
                                    </p>
                                    <a href="#" className="btn button-md">
                                        Join Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Form END */}
            </>

        </>

    );
}

export default About;