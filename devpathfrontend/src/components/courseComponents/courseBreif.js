import React from 'react';
import { useNavigate } from 'react-router-dom';
import Img from '../../assets/img/profilePic.png';

function CourseBreif({ id, price, teacher, difficulty, category }) {
    const navigate = useNavigate();

    const navigateToCheckout = (id, price) => {
        navigate(`/checkout/${id}`, { state: { id, price } });
    };


    return (
        <div className="col-lg-3 col-md-4 col-sm-12 m-b30">
            <div className="course-detail-bx">
                <div className="course-price">
                    <h4 className="price">{price} JD</h4>
                </div>
                <div className="course-buy-now text-center">
                    
                    <button
                        onClick={() => navigateToCheckout(id, price)}
                        className="btn radius-xl text-uppercase"
                    >
                        Buy This Course
                    </button>
                </div>
                <div className="teacher-bx">
                    <div className="teacher-info">
                        <div className="teacher-thumb">
                            <img src={Img} alt="" />
                        </div>
                        <div className="teacher-name">
                            <h5>{teacher}</h5>
                            <span>Teacher</span>
                        </div>
                    </div>
                </div>
                <div className="cours-more-info">
                    <div className="review">
                        <span>Level</span>
                        <h5 className="text-primary">{difficulty}</h5>
                    </div>
                    <div className="price categories">
                        <span>Categories</span>
                        <h5 className="text-primary">{category}</h5>
                    </div>
                </div>
                <div className="course-info-list scroll-page">
                    <ul className="navbar">
                        <li>
                            <a className="nav-link" href="#overview">
                                <i className="ti-zip" />
                                Overview
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#curriculum">
                                <i className="ti-bookmark-alt" />
                                Curriculum
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#instructor">
                                <i className="ti-user" />
                                Instructor
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CourseBreif;
