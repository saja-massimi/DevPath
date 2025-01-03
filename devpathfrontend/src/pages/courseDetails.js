import Banner from '../components/aboutusComponents/banner';
import CourseBreif from '../components/courseComponents/courseBreif';
import CourseContent from '../components/courseComponents/courseContent';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
function CourseDetails() {
    const { courseId } = useParams();

    const [course, setCourse] = useState({});
    const [teacher, setTeacher] = useState({});
    const [loading, setLoading] = useState(true);
    const isLogged = sessionStorage.getItem('authToken') !== null;

    useEffect(() => {
        const fetchCourseDetails = async () => {
            try {
                const response = await axiosInstance.get(`/courses/${courseId}`);
                setTeacher(response.data.data.teacher);
                setCourse(response.data.data);

                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching course details:', error);
            }
        };

        fetchCourseDetails();
    }, [courseId]);
    return (
        <div className="page-content bg-white">
            <Banner title="Course Details" />
            <div className="section-area section-sp1">
                <div className="container">
                    <div className="row d-flex flex-row-reverse">

                        <CourseBreif
                            id={courseId}
                            price={course.course_price}
                            difficulty={course.diffculty_leve}
                            teacher={teacher.name}
                            category={course.category}
                            isLogged={isLogged} />


                        <CourseContent
                            id={courseId}
                            img={course.course_image}
                            title={course.course_title}
                            description={course.course_description}
                            duration={course.course_duration}
                            teacher_name={teacher.name}
                            teacher_skills={teacher.experiene}
                            difficulty={course.diffculty_leve}
                            language={course.language}
                            learning_outcomes={course.learning_outcomes}
                            lectures={course.lectures}
                            quizzes={course.quizzes}

                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails;