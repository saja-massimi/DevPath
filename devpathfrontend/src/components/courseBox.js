import React from "react";

function CourseBox({ id, image, title, category }) {
  return (


    <div className=" mx-2 cours-bx rounded-lg shadow-md bg-white">

      <div className="action-box">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <a href="#" class="btn">Read More</a>
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
          <span>3 Review</span>
          <ul className="cours-star">
            <li className="active"><i className="fa fa-star"></i></li>
            <li className="active"><i className="fa fa-star"></i></li>
            <li className="active"><i className="fa fa-star"></i></li>
            <li><i className="fa fa-star"></i></li>
            <li><i className="fa fa-star"></i></li>
          </ul>
        </div>
        <div className="price">
          <del>$190</del>
          <h5>$120</h5>
        </div>
      </div>
      <div className="text-center py-3 bg-gray-100">
        <a
          href={`#readMore${id}`}
          className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default CourseBox;
