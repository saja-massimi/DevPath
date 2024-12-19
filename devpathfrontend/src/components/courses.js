import React from "react";
import Slider from "react-slick";
import CourseBox from "./courseBox"; // Import the CourseBox component

import Course1 from "../assets/images/courses/pic1.jpg";
import Course2 from "../assets/images/courses/pic2.jpg";
import Course3 from "../assets/images/courses/pic3.jpg";
import Course4 from "../assets/images/courses/pic4.jpg";

const Courses = () => {
  const courseData = [
    { id: 1, image: Course1, title: "Course 1", category: "Programming" },
    { id: 2, image: Course2, title: "Course 2", category: "Design" },
    { id: 3, image: Course3, title: "Course 3", category: "Marketing" },
    { id: 4, image: Course4, title: "Course 4", category: "Business" },
  ];

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
        {/* Slider */}
        <Slider {...settings}>
          {courseData.map((course) => (
            <CourseBox
              key={course.id}
              id={course.id}
              image={course.image}
              title={course.title}
              category={course.category}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
