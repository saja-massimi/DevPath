import React from "react";
import Fallback from "../assets/img/coding.jpg";


function CourseBox({ id, image, title, category, price, difficulty }) {


  return (


    <div className=" mx-2 cours-bx rounded-lg shadow-sm bg-white">

      <div className="action-box">
        <img
          src={Fallback}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />

        <a href="#" className="btn">Read More</a>
      </div>

      <div className="info-bx text-center">
        <h5 className="font-semibold text-lg text-gray-800">
          <a
            href={`#course${id}`}
            className="hover:text-blue-500 transition-colors"
          >
            {title}
          </a>
        </h5>
        <span className="text-sm text-gray-600">{category}</span>
      </div>

      <div className="cours-more-info">
        <div className="review">
          <span>{difficulty}</span>
        </div>
        <div className="price">
          <h5>{price} JD</h5>
        </div>
      </div>
      <div className="text-center py-3 bg-gray-100">
        <a
          href={`#readMore${id}`}
          className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
}

export default CourseBox;
