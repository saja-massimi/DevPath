import React, { useEffect, useState } from 'react';
import axioInstace from '../../api/axiosInstance';
import CourseBox from '../courseBox';
import axiosInstance from '../../api/axiosInstance';

function ProfileCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axiosInstance.get('/user/courses', {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
                    },
                });

                if (Array.isArray(response.data.data)) {
                    setCourses(response.data.data);
                }


            } catch (error) {
                console.error("Error fetching courses:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);



    return (
        <>
            <div className="tab-pane active" id="courses">
                <div className="profile-head">
                    <h3>My Courses</h3>
                    <div className="feature-filters style1 ml-auto">
                        <ul className="filters" data-toggle="buttons">
                            <li data-filter="" className="btn active">
                                <input type="radio" />
                                <a href="#">
                                    <span>All</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="courses-filter">
                    <div className="clearfix">
                        <ul id="masonry" className="list-unstyled ttr-gallery-listing magnific-image row">



                            {courses.map((course) => (

                                <li className="action-card col-xl-4 col-lg-6 col-md-12 col-sm-6 publish">
                                    <CourseBox
                                        key={course.course_id}
                                        id={course.course_id}
                                        image={course.course_image}
                                        title={course.course_title}
                                        category={course.category}
                                        price={course.course_price}
                                        difficulty={course.diffculty_leve}
                                    />

                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProfileCourses;