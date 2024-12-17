import React from "react";
import Course1 from "../assets/images/courses/pic1.jpg";
import Course2 from "../assets/images/courses/pic2.jpg";
import Course3 from "../assets/images/courses/pic3.jpg";
import Course4 from "../assets/images/courses/pic4.jpg";

function Courses() {
    return (
        <div className="section-area section-sp2 popular-courses-bx">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 heading-bx left">
                        <h2 className="title-head">
                            Popular <span>Courses</span>
                        </h2>
                        <p>
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div id="coursesCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {/* Slide 1 */}
                            <div className="carousel-item active">
                                <div className="cours-bx">
                                    <div className="action-box">
                                        <img src={Course1} alt="Course 1" className="d-block w-100" />
                                        <a href="#" className="btn">
                                            Read More
                                        </a>
                                    </div>
                                    <div className="info-bx text-center">
                                        <h5>
                                            <a href="#">Introduction EduChamp – LMS plugin</a>
                                        </h5>
                                        <span>Programming</span>
                                    </div>
                                    <div className="cours-more-info">
                                        <div className="review">
                                            <span>3 Review</span>
                                            <ul className="cours-star">
                                                <li className="active">
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li className="active">
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li className="active">
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="price">
                                            <del>$190</del>
                                            <h5>$120</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 2 */}
                            <div className="carousel-item">
                                <div className="cours-bx">
                                    <div className="action-box">
                                        <img src={Course2} alt="Course 2" className="d-block w-100" />
                                        <a href="#" className="btn">
                                            Read More
                                        </a>
                                    </div>
                                    <div className="info-bx text-center">
                                        <h5>
                                            <a href="#">Advanced Web Development</a>
                                        </h5>
                                        <span>Web Development</span>
                                    </div>
                                    <div className="cours-more-info">
                                        <div className="review">
                                            <span>5 Reviews</span>
                                            <ul className="cours-star">
                                                <li className="active">
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li className="active">
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li className="active">
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li className="active">
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="price">
                                            <del>$150</del>
                                            <h5>$100</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Additional Slides */}
                            <div className="carousel-item">
                                <div className="cours-bx">
                                    <div className="action-box">
                                        <img src={Course3} alt="Course 3" className="d-block w-100" />
                                        <a href="#" className="btn">
                                            Read More
                                        </a>
                                    </div>
                                    <div className="info-bx text-center">
                                        <h5>
                                            <a href="#">Data Science Basics</a>
                                        </h5>
                                        <span>Data Science</span>
                                    </div>
                                    <div className="cours-more-info">
                                        <div className="review">
                                            <span>4 Reviews</span>
                                            <ul className="cours-star">
                                                <li className="active">
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li className="active">
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li className="active">
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="price">
                                            <del>$200</del>
                                            <h5>$150</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#coursesCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#coursesCarousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
