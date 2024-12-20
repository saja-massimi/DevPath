import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CourseBox from "./courseBox";
import axiosInstance from "../api/axiosInstance";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get("/courses");
        console.log("Full Response:", response);

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

  useEffect(() => {
    console.log("Courses state updated:", courses);
  }, [courses]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="section-area section-sp2 popular-courses-bx">
      <div className="container">
        <div className="row">
          <div className="col-md-12 heading-bx left">
            <h2 className="title-head">
              Popular <span>Courses</span>
            </h2>
          </div>
        </div>
        {loading ? (
          <p>Loading courses...</p>
        ) : courses.length > 0 ? (

          <Slider {...settings} >

            {courses.map((course) => (
              <CourseBox
                key={course.course_id}
                id={course.course_id}
                image={course.course_image}
                title={course.course_title}
                category={course.category}
              />
            ))}
          </Slider>
        ) : (
          <p>No courses available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
