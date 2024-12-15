import React from "react";
import Video from "../assets/img/header.mp4";
import Cover from "../assets/img/cover22.jpg";

function Header() {
  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5">
        <div id="headerCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <video
                className="img-fluid"
                loop
                autoPlay
                muted
                playsInline
                style={{ width: "100%", height: "auto", maxHeight: 720 }}
              >
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(24, 29, 56, .7)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-sm-10 col-lg-8">
                      <h5 className="text-primary text-uppercase mb-3">
                        Best Online Courses
                      </h5>
                      <h1 className="display-3 text-white">
                        The Best Online Learning Platform
                      </h1>
                      <p className="fs-5 text-white mb-4 pb-2">
                        Transform Your Ideas into Reality with Code
                      </p>
                      <a
                        href=""
                        className="btn btn-primary py-md-3 px-md-5 me-3"
                      >
                        Read More
                      </a>
                      <a
                        href=""
                        className="btn btn-light py-md-3 px-md-5"
                      >
                        Join Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="carousel-item">
              <img
                src={Cover}
                className="d-block w-100 img-fluid"
                alt="Cover"
                style={{ maxHeight: 720 }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(24, 29, 56, .7)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-sm-10 col-lg-8">
                      <h5 className="text-primary text-uppercase mb-3">
                        Best Online Courses
                      </h5>
                      <h1 className="display-3 text-white">
                        From Beginner to Pro: Start Your Coding Journey Here
                      </h1>
                      <p className="fs-5 text-white mb-4 pb-2">
                        No Experience? No Problem! Courses for Every Level
                      </p>
                      <a
                        href=""
                        className="btn btn-primary py-md-3 px-md-5 me-3"
                      >
                        Read More
                      </a>
                      <a
                        href=""
                        className="btn btn-light py-md-3 px-md-5"
                      >
                        Join Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#headerCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#headerCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}
    </>
  );
}

export default Header;
