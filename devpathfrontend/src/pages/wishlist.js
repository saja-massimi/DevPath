import React, { useState, useEffect } from "react";
import Banner from "../components/aboutusComponents/banner";
import AxiosInstance from '../api/axiosInstance.js';
import CourseBox from "../components/courseBox.js";

function Wishlist() {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        AxiosInstance.get('/wishlist')
            .then((response) => {


                setWishlist(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Error fetching wishlist', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Banner title="Wishlist" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row">
                            {wishlist.length === 0 ? (
                                <div>No courses in your wishlist</div>
                            ) : (
                                wishlist.map((item) => (
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={item.wishlist_id}>
                                        <CourseBox
                                            id={item.course.course_id}
                                            image={item.course.course_image || 'default_image_path.jpg'}
                                            title={item.course.course_title}
                                            category={item.course.category}
                                            price={item.course.course_price}
                                            difficulty={item.course.diffculty_leve}
                                            description={item.course.course_description}
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wishlist;
