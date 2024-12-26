import bgImage from '../../assets/images/background/bg1.jpg';
import WOW from 'wow.js';
import 'animate.css';
import { useEffect } from 'react';


function TeacherAbout() {

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
            <div
                className="section-area section-sp2 bg-fix ovbl-dark join-bx text-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="join-content-bx text-white">
                                <h2 className="wow animate__slideInDown" data-wow-delay="0.5s">
                                    Empower Others to Code <br /> on Their Time
                                </h2>
                                <p className="wow animate__slideInUp">
                                    Join our e-learning platform to share your coding expertise with eager learners. Create courses, host live sessions, and inspire the next generation of developers.
                                </p>
                                <a href="#" className="btn button-md">
                                    Start Teaching
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default TeacherAbout;