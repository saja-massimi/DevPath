import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import axiosInstance from "../../api/axiosInstance";

function TeacherCourseBox({ id, image, title, category, price, difficulty, description }) {
    const navigate = useNavigate();

    const deleteCourse = async () => {
        try {
            const response = await axiosInstance.delete(`/courses/${id}`);
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Course deleted successfully",
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            console.log(response.data);
            navigate(0);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to delete the course. Please try again.",
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            console.error("Error deleting course:", error);
        }
    };

    return (
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

                                    <li className="card-courses-price">
                                        <h5 className="text-primary">{price} JD</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className="row card-courses-dec">
                                <div className="col-md-12">
                                    <h6 className="m-b10">Course Description</h6>
                                    <p>{description}</p>
                                </div>
                                <div className="col-md-12">
                                    <Link to={`/edit-course/${id}`} className="btn green radius-xl outline mx-3">
                                        Edit
                                    </Link>
                                    <button
                                        onClick={deleteCourse}
                                        className="btn red outline radius-xl"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherCourseBox;
