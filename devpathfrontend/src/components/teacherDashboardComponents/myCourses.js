import axiosInstance from '../../api/axiosInstance';
import { useEffect, useState } from 'react';
import TeacherCourseBox from './teacherCourseBox';
import '../../componentsCSS/dashboard.css';


function MyCourses({ id }) {

    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axiosInstance.get(`/teacherCourses/${id}`);
                setCourseData(response.data.courses);
                console.log(response.data.courses);
            } catch (error) {
                console.error("Error fetching profile:", error);
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

                <div class="row">


                    {courseData.map((course) => (

                        <TeacherCourseBox
                            key={course.course_id}
                            id={course.course_id}
                            image={course.course_image}
                            title={course.course_title}
                            category={course.category}
                            price={course.course_price}
                            difficulty={course.diffculty_leve}
                            description={course.course_description}


                        />


                    ))}


                </div>
            </div>
        </>
    );

}

export default MyCourses;