import WOW from 'wow.js';
import 'animate.css';
import { useEffect } from "react";
import Img from '../../assets/img/ourStory.webp';

function OurStory() {

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
    <div className="section-area bg-gray section-sp1 our-story">
      <div className="container">
        <div className="row align-items-center d-flex">
          <div
            className="col-lg-5 col-md-12 heading-bx wow animate__fadeInLeft"
            data-wow-duration="2s"
          >
            <h2 className="m-b10">Our Story</h2>
            <h5 className="fw4">Empowering learners and educators worldwide.</h5>
            <p>
              Our platform was built with a simple yet powerful idea: to connect aspiring learners
              with passionate educators. We believe education should be accessible to everyone,
              anywhere, at any time. From coding enthusiasts to expert developers, we aim to provide
              a space where knowledge flows freely, and growth knows no bounds.
            </p>
            <p>
              For students, it’s about exploring their potential through diverse, hands-on courses.
              For teachers, it’s a chance to inspire and share their expertise with a global audience.
              Together, we’re creating a community that transforms education into a collaborative and
              engaging experience.
            </p>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
          <div
            className="col-lg-7 col-md-12 heading-bx p-lr wow animate__fadeInRight"
            data-wow-duration="2s"
          >
            <div className="video-bx">
              <img src={Img} alt="Our Story" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
