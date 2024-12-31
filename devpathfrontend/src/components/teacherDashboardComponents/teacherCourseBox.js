import Fallback from "../../assets/img/coding.jpg";
import { Link, useNavigate } from "react-router-dom";
import Profile from '../../assets/img/profilePic.png';
function TeacherCourseBox({ key, id, image, title, category, price, difficulty, description }) {

    return (

        <>

            <div className="col-lg-12 m-b30">
                <div className="widget-box">

                    <div className="widget-inner">
                        <div className="card-courses-list admin-courses">
                            <div className="card-courses-media">
                                <img src={image} alt="" />
                            </div>
                            <div className="card-courses-full-dec">
                                <div className="card-courses-title">
                                    <h4>{title}</h4>
                                </div>
                                <div className="card-courses-list-bx">
                                    <ul className="card-courses-view">
                                        <li className="card-courses-user">
                                            <div className="card-courses-user-pic">
                                                <img src="assets/images/testimonials/pic3.jpg" alt="" />
                                            </div>
                                            <div className="card-courses-user-info">
                                                <h5>Difficulty</h5>
                                                <h4>{difficulty}</h4>
                                            </div>
                                        </li>
                                        <li className="card-courses-categories">
                                            <h5>Category</h5>
                                            <h4>{category}</h4>
                                        </li>
                                        <li className="card-courses-review">
                                            <h5>3 Review</h5>
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
                                        </li>

                                        <li className="card-courses-price">

                                            <h5 className="text-primary">{price} JD</h5>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row card-courses-dec">
                                    <div className="col-md-12">
                                        <h6 className="m-b10">Course Description</h6>
                                        <p>
                                            {description}
                                        </p>
                                    </div>
                                    <div className="col-md-12">
                                        <a href="#" className="btn green radius-xl outline mx-3">
                                            Edit
                                        </a>
                                        <a href="#" className="btn red outline radius-xl">
                                            Delete
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}



export default TeacherCourseBox;