import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CourseBox from "./courseBox";
import axiosInstance from "../api/axiosInstance";
import WOW from 'wow.js';
import 'animate.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get("/courses");

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

    const wow = new WOW({
      boxClass: "wow", // Default class for triggering animations
      animateClass: "animate__animated", // Animate.css default class prefix
      offset: 0,
      mobile: true, // Enable animations on mobile
      live: true, // Act on asynchronously loaded content
    });
    wow.init();
  }, []);


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
    <div className="section-area section-sp2 vh-100">
      <div className="container">
        <div className="row wow animate__slideInLeft" data-wow-delay="0.5s">
          <div className="col-md-12 heading-bx left">
            <h2 className="title-head">
              Popular <span>Courses</span>
            </h2>
          </div>
        </div>
        {loading ? (
          <p>Loading courses...</p>
        ) : courses.length > 0 ? (

          <Slider {...settings} className="wow animate__slideInRight" data-wow-delay="0.5s">

            {courses.map((course) => (
              <CourseBox
                key={course.course_id}
                id={course.course_id}
                image={course.course_image}
                title={course.course_title}
                category={course.category}
                price={course.course_price}
                difficulty={course.diffculty_leve}
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
