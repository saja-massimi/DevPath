import { useEffect, useState } from "react";
import Banner from "../components/aboutusComponents/banner";
import CourseBox from "../components/courseBox";
import axiosInstance from "../api/axiosInstance";
import Slider from "@mui/material/Slider";

function AllCourses() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get("/courses");
        if (Array.isArray(response.data.data)) {
          setCourses(response.data.data);
          setFilteredCourses(response.data.data);
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
        if (Array.isArray(response.data.categories)) {
          setCategories(response.data.categories);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCourses();
    fetchCategories();
  }, []);

  useEffect(() => {
    const result = courses.filter(
      (course) =>
        (selectedCategory === "All" || course.category === selectedCategory) &&
        course.course_price >= priceRange[0] &&
        course.course_price <= priceRange[1] &&
        course.course_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCourses(result);
    setCurrentPage(1);
  }, [courses, priceRange, searchQuery, selectedCategory]);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  return (
    <div className="page-content bg-white">
      <Banner title={"Courses"} />
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
                        className="form-control"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="widget widget_archive">
                  <h5 className="widget-title style-1">All Categories</h5>
                  <ul>
                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        className={selectedCategory === "All" ? "active" : ""}
                        onClick={() => setSelectedCategory("All")}
                      >
                        All
                      </a>
                    </li>
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          style={{ cursor: "pointer" }}

                          className={
                            selectedCategory === category.category_name ? "active" : ""
                          }
                          onClick={() => setSelectedCategory(category.category_name)}
                        >
                          {category.category_name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="widget widget_archive">
                  <h5 className="widget-title style-1">Prices Range</h5>
                  <div className="price-slider-container">
                    <Slider
                      value={priceRange}
                      min={0}
                      max={500}
                      onChange={(event, newValue) => setPriceRange(newValue)}
                      valueLabelDisplay="auto"
                    />
                    <div className="price-range-display">
                      <span>JD {priceRange[0]}</span> - <span>JD {priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Course List */}
              <div className="col-lg-9 col-md-8 col-sm-12">
                <div className="row">
                  {currentCourses.length > 0 ? (
                    currentCourses.map((course) => (
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
                          description={course.course_description}
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
                {totalPages > 1 && (
                  <div className="col-lg-12 m-b20">
                    <div className="pagination-bx rounded-sm gray clearfix">
                      <ul className="pagination">
                        <li className={currentPage === 1 ? "disabled" : ""}>
                          <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                          >
                            Prev
                          </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <li
                            key={page}
                            className={page === currentPage ? "active" : ""}
                          >
                            <button onClick={() => setCurrentPage(page)}>{page}</button>
                          </li>
                        ))}
                        <li className={currentPage === totalPages ? "disabled" : ""}>
                          <button
                            onClick={() =>
                              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                            }
                          >
                            Next
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCourses;
