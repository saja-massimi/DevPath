import React, { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";

function AddContent() {
    const [courses, setCourses] = useState([]);
    const [sections, setSections] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [videoFile, setVideoFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [courseID, setCourseID] = useState("");
    const [sectionID, setSectionID] = useState("");

    // Fetch courses
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axiosInstance.get("/courses");
                const fetchedCourses = response.data?.data || [];
                setCourses(fetchedCourses);
                console.log("Courses fetched:", fetchedCourses);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, []);

    useEffect(() => {
        const fetchSections = async () => {
            if (!selectedCourse) return;

            try {
                const response = await axiosInstance.get(`/sections/${selectedCourse}`);
                const fetchedSections = response?.data || [];
                setSections(fetchedSections);
                console.log("Sections fetched:", fetchedSections);
            } catch (error) {
                console.error("Error fetching sections:", error);
            }
        };

        fetchSections();
    }, [selectedCourse]);

    const handleFileChange = (e) => {
        setVideoFile(e.target.files[0]);
    };

    const validateForm = (data) => {
        const newErrors = {};

        if (!data.title) newErrors.title = "Title is required.";
        if (!data.description) newErrors.description = "Description is required.";
        if (!data.content_type) newErrors.content_type = "Content type is required.";
        if (!videoFile) newErrors.video = "Video upload is required.";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            course_id: courseID,
            section_id: sectionID,
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            content_type: document.getElementById("content_type").value,
        };

        const formErrors = validateForm(data);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => formData.append(key, value));
        formData.append("video", videoFile);

        try {
            const response = await axiosInstance.post("/course-content", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("Content added:", response.data);
            alert("Content added successfully!");
            setErrors({});
        } catch (error) {
            console.error("Error adding content:", error);
            alert("Failed to add content.");
        }
    };


    return (
        <div className="container">
            <div className="row">

                <div className="col-md-12">
                    <h1 className="text-center">Add Content</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit}>
                        {/* Course Dropdown */}
                        <div className="form-group">
                            <label htmlFor="course">Course</label>
                            <select
                                className="form-control"
                                id="course"
                                onChange={(e) => {
                                    setSelectedCourse(e.target.value);
                                    setCourseID(e.target.value);
                                    setErrors((prev) => ({ ...prev, course_id: "" }));
                                }}

                            >
                                <option value="">Select Course</option>
                                {courses.map((course) => (
                                    <option key={course.course_id} value={course.course_id}>
                                        {course.course_title}
                                    </option>
                                ))}
                            </select>
                            {errors.course_id && <small className="text-danger">{errors.course_id}</small>}
                        </div>

                        {/* Section Dropdown */}
                        {selectedCourse && (
                            <div className="form-group">
                                <label htmlFor="section">Section</label>
                                <select
                                    className="form-control"
                                    id="section"
                                    onChange={(e) => {
                                        setSectionID(e.target.value);
                                        setErrors((prev) => ({ ...prev, section_id: "" })); // 
                                    }}

                                >
                                    <option value="">Select Section</option>
                                    {sections.map((section) => (
                                        <option key={section.section_id} value={section.section_id}>
                                            {section.title}
                                        </option>
                                    ))}
                                </select>
                                {errors.section_id && <small className="text-danger">{errors.section_id}</small>}
                            </div>
                        )}

                        <hr />
                        {/* Topic Input */}
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                onChange={() => setErrors((prev) => ({ ...prev, title: "" }))}
                            />
                            {errors.title && <small className="text-danger">{errors.title}</small>}
                        </div>

                        {/* Content Description */}
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                rows="3"
                                onChange={() => setErrors((prev) => ({ ...prev, description: "" }))}
                            ></textarea>
                            {errors.description && <small className="text-danger">{errors.description}</small>}
                        </div>

                        {/* Content Type */}
                        <div className="form-group">
                            <label htmlFor="content_type">Content Type</label>
                            <input
                                type="text"
                                className="form-control"
                                id="content_type"
                                onChange={() => setErrors((prev) => ({ ...prev, content_type: "" }))}
                            />
                            {errors.content_type && <small className="text-danger">{errors.content_type}</small>}
                        </div>

                        {/* Upload Video */}
                        <div className="form-group">
                            <label htmlFor="video_url">Upload Video</label>
                            <input
                                type="file"
                                className="form-control"
                                id="video_url"
                                onChange={handleFileChange}
                            />
                            {errors.video && <small className="text-danger">{errors.video}</small>}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary">
                            Add Content
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddContent;
