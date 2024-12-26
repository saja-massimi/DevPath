import React, { useState, useEffect } from "react";
import Fallback from "../assets/img/coding.jpg";
import { Link, useNavigate } from "react-router-dom";
import AxiosInstance from '../api/axiosInstance.js';

function CourseBox({ id, image, title, category, price, difficulty, description }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    AxiosInstance.get('/wishlist')
      .then((response) => {
        const wishlistData = response.data.data;

        if (wishlistData.some(item => item.course_id === id)) {
          setIsFavorite(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching wishlist:', error);
      });
  }, [id]);

  const toggleWishlist = (id) => {
    if (isFavorite) {
      AxiosInstance.delete(`/wishlist/${id}`)
        .then((response) => {
          console.log(response.data);
          setIsFavorite(false);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      AxiosInstance.post('/wishlist', { course_id: id })
        .then((response) => {
          console.log(response.data);
          setIsFavorite(true);
        })
        .catch((error) => {
          if (error.response?.status === 400) {
            console.log('Course already added to wishlist');
            setIsFavorite(true);
          } else if (error.response?.status === 401) {
            console.log('Unauthorized');
            navigate('/login');
          }
          console.error('Error:', error);
        });
    }
  };

  return (
    <div className="mx-2 cours-bx rounded-lg shadow-sm bg-white relative" style={{ minHeight: "400px" }}>
      {/* Action Box */}
      <div className="action-box relative">
        <img
          src={Fallback}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <Link className="btn" to={`/courseDetails/${id}`}>
          Read More
        </Link>
      </div>

      {/* Course Information */}
      <div className="info-bx text-center">
        <h5 className="font-semibold text-lg text-gray-800">
          <a href={`#course${id}`} className="hover:text-blue-500 transition-colors">
            {title}
          </a>
        </h5>
        <span className="text-sm text-gray-600">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>
      </div>

      {/* More Information */}
      <div className="cours-more-info">
        <div className="review">
          <span>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</span>
        </div>
        <div className="price">
          <h5>{price} JD</h5>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center py-3 bg-gray-100 flex justify-center items-center gap-2">
        <a
          href={`#readMore${id}`}
          className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Enroll Now
        </a>

        {/* Heart Icon */}
        <a
          className={`py-2 px-4 rounded flex items-center ml-2`}
          title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          onClick={() => toggleWishlist(id)}
        >
          <i className={`fa ${isFavorite ? 'fa-heart' : 'fa-heart-o'}`}></i>
        </a>
      </div>
    </div>
  );
}

export default CourseBox;
