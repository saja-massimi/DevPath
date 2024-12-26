import bgImage from '../../assets/images/background/bg1.jpg';
import { useEffect } from 'react';
import WOW from 'wow.js';
import 'animate.css';

function Banner({ title }) {
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
                className="page-banner ovbl-dark"
                style={{ backgroundImage: `url(${bgImage})`, marginTop: '50px' }}
            >
                <div className="container">
                    <div className="page-banner-entry">
                        <h1 className="text-white wow animate__slideInDown">{title}</h1>
                    </div>
                </div>
            </div>
            <div className="breadcrumb-row">
                <div className="container">
                    <ul className="list-inline">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>{title}</li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Banner;