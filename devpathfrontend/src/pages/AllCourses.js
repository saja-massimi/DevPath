import { useEffect, useState } from "react";
import Banner from '../components/aboutusComponents/banner';
import CourseBox from '../components/courseBox';
import axiosInstance from "../api/axiosInstance";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";


function AllCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [diffculty_level, setDiffculty_level] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axiosInstance.get("/courses");

                if (Array.isArray(response.data.data)) {
                    setCourses(response.data.data);
                    setDiffculty_level(response.data.data.diffculty_leve);
                }


            } catch (error) {
                console.error("Error fetching courses:", error);
            } finally {
                setLoading(false);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axiosInstance.get("/categories");
                console.log(response.data.categories);
                if (Array.isArray(response.data.categories)) {
                    setCategories(response.data.categories);
                }


            } catch (error) {
                console.error("Error fetching categories:", error);
            } finally {
                setLoading(false);
            }
        }




        fetchCourses();
        fetchCategories();


    }, []);


    return (
        <div className="page-content bg-white">

            <Banner title={"Courses"} />

            {/* Main Content Section */}
            <div className="content-block">
                <div className="section-area section-sp1">
                    <div className="container">
                        <div className="row">
                            {/* Sidebar */}
                            <div className="col-lg-3 col-md-4 col-sm-12 m-b30">
                                <div className="widget courses-search-bx placeani">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <label>Search Courses</label>
                                            <input
                                                name="dzName"
                                                type="text"
                                                required=""
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="widget widget_archive">
                                    <h5 className="widget-title style-1">All Categories</h5>
                                    <ul>
                                        {categories.map((category, index) => (
                                            <li key={index} className="active">
                                                <a href="#">{category.category_name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Prices Range Widget */}
                                <div className="widget widget_archive">
                                    <h5 className="widget-title style-1">Prices Range</h5>
                                    <ul>
                                        
                                    </ul>
                                </div>

                            </div>

                            {/* Course List */}
                            <div className="col-lg-9 col-md-8 col-sm-12">
                                <div className="row">
                                    {courses.length > 0 ? (
                                        courses.map((course) => (
                                            <div
                                                className="col-md-6 col-lg-4 col-sm-6 m-b30"
                                                key={course.course_id}
                                            >
                                                <CourseBox
                                                    id={course.course_id}
                                                    image={course.course_image}
                                                    title={course.course_title}
                                                    category={course.category}
                                                    price={course.course_price}
                                                    difficulty={course.diffculty_leve}
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-12">
                                            <p>No courses available at the moment.</p>
                                        </div>
                                    )}
                                </div>

                                {/* Pagination */}
                                <div className="col-lg-12 m-b20">
                                    <div className="pagination-bx rounded-sm gray clearfix">
                                        <ul className="pagination">
                                            <li className="previous">
                                                <a href="#">
                                                    <i className="ti-arrow-left" /> Prev
                                                </a>
                                            </li>
                                            <li className="active">
                                                <a href="#">1</a>
                                            </li>
                                            <li>
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li className="next">
                                                <a href="#">
                                                    Next <i className="ti-arrow-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AllCourses;