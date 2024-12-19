import React from "react";

function CourseBox({ id, image, title, category }) {
  return (
    <div className="cours-bx rounded-lg shadow-md overflow-hidden bg-white">
      {/* Course Image */}
      <div className="action-box">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Course Info */}
      <div className="info-bx text-center p-4">
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

      {/* Read More Button */}
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
