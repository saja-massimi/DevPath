import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";
import axiosInstance from "../../api/axiosInstance";
import Steps from "./steps";
import AddSection from "./addSections";

function AddCourse({ id }) {


    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        course_title: "",
        course_duration: "",
        diffculty_leve: "",
        category: "",
        teacher_id: id,
        course_description: "",
        course_price: "",
        language: "",
        learning_outcomes: "",
        lectures: "",
        quizzes: "",
        course_image: "",
    });

    const [courseId, setCourseId] = useState(null);
    const [file, setFile] = useState(null);
    const [validationErrors, setValidationErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setValidationErrors({ ...validationErrors, [name]: "" });

    };

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];

        setFile(file);

        const formDataWithFile = new FormData();
        formDataWithFile.append('course_image', file);

        setFormData({
            ...formData,
            course_image: file.name,
        });
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            setFile(file);
            setValidationErrors({ ...validationErrors, course_image: "" });
        },
        accept: "image/*",
    });

    const handleGoBack = () => {
        window.location.href = "/teacherDashboard";
    }

    const validateForm = () => {
        const errors = {};
        if (!formData.course_title.trim()) errors.course_title = "Course Title is required.";
        if (!formData.course_price.trim() || formData.course_price <= 0)
            errors.course_price = "Price must be a positive number.";
        if (!formData.course_duration.trim()) errors.course_duration = "Course Duration is required.";
        if (!formData.lectures.trim() || formData.lectures <= 0)
            errors.lectures = "Number of Lectures must be a positive number.";
        if (!formData.language.trim()) errors.language = "Language is required.";
        if (!formData.category.trim()) errors.category = "Category is required.";
        if (!formData.diffculty_leve.trim()) errors.diffculty_leve = "Difficulty Level is required.";
        if (!formData.learning_outcomes.trim()) errors.learning_outcomes = "Learning Outcomes are required.";
        if (!formData.course_description.trim()) errors.course_description = "Course Description is required.";
        if (!file) errors.course_image = "Course Image is required.";

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleNext = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        if (currentStep === 1) {
            const formDataWithFile = new FormData();
            if (file) {
                formDataWithFile.append("course_image", file);
            }
            Object.keys(formData).forEach((key) => {
                formDataWithFile.append(key, formData[key]);
            });

            try {
                const response = await axiosInstance.post("/courses", formDataWithFile, {
                    headers: { "Content-Type": "multipart/form-data" },
                }).then((response) => {
                    const course_id = response.data.data.course_id;
                    setCourseId(course_id);

                });




                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Course added successfully",
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
            } catch (error) {
                console.error("Error submitting form:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops!",
                    text: "Something went wrong while adding the course.",
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
                return;
            }
        }

        setCurrentStep((prev) => prev + 1);
    };

    const handlePrevious = () => setCurrentStep((prev) => Math.max(prev - 1, 1));




    return (
        <main className="ttr-wrapper">
            <div className="container-fluid">
                <div className="db-breadcrumb">
                    <h4 className="breadcrumb-title">Add Course</h4>
                    <ul className="db-breadcrumb-list">
                        <li>
                            <a href="#">
                                <i className="fa fa-home" />
                                Home
                            </a>
                        </li>
                        <li>Add Course</li>
                    </ul>
                </div>
                <Steps currentStep={currentStep} />


                <div className="row">
                    <div className="col-lg-12 m-b30">
                        <div className="widget-box">
                            <div className="wc-title">
                                <h4>Add Course</h4>
                            </div>
                            <div className="widget-inner">
                                <form className="edit-profile m-b30" onSubmit={handleNext}>

                                    {currentStep === 1 && (
                                        <div className="row">
                                            <div className="col-12">
                                                <h3>1. Basic Info</h3>
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Course Title</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="course_title"
                                                    value={formData.course_title}
                                                    onChange={handleChange}
                                                />
                                                {validationErrors.course_title && (
                                                    <span className="text-danger">{validationErrors.course_title}</span>
                                                )}
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Price (JOD)</label>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    name="course_price"
                                                    value={formData.course_price}
                                                    onChange={handleChange}
                                                />
                                                {validationErrors.course_price && (
                                                    <span className="text-danger">{validationErrors.course_price}</span>
                                                )}
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Course Duration (in hours)</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="course_duration"
                                                    value={formData.course_duration}
                                                    onChange={handleChange}
                                                />
                                                {validationErrors.course_duration && (
                                                    <span className="text-danger">{validationErrors.course_duration}</span>
                                                )}
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Number of Lectures</label>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    name="lectures"
                                                    value={formData.lectures}
                                                    onChange={handleChange}
                                                />
                                                {validationErrors.lectures && (
                                                    <span className="text-danger">{validationErrors.lectures}</span>
                                                )}
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Number of Quizzes</label>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    name="quizzes"
                                                    value={formData.quizzes}
                                                    onChange={handleChange}
                                                />
                                                {validationErrors.quizzes && (
                                                    <span className="text-danger">{validationErrors.quizzes}</span>
                                                )}
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Language</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="language"
                                                    value={formData.language}
                                                    onChange={handleChange}
                                                />
                                                {validationErrors.language && (
                                                    <span className="text-danger">{validationErrors.language}</span>
                                                )}
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Category</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="category"
                                                    value={formData.category}
                                                    onChange={handleChange}
                                                />
                                                {validationErrors.category && (
                                                    <span className="text-danger">{validationErrors.category}</span>
                                                )}
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Difficulty Level</label>
                                                <select
                                                    className="form-control"
                                                    name="diffculty_leve"
                                                    value={formData.diffculty_leve}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select Difficulty</option>
                                                    <option value="beginner">Beginner</option>
                                                    <option value="intermediate">Intermediate</option>
                                                    <option value="advanced">Advanced</option>
                                                </select>
                                                {validationErrors.diffculty_leve && (
                                                    <span className="text-danger">{validationErrors.diffculty_leve}</span>
                                                )}
                                            </div>
                                            <div className="form-group col-12">
                                                <label>Learning Outcomes</label>

                                                <p style={{ color: 'rgb(173, 173, 173)', fontSize: '0.8rem' }}>*Add a period after each outcome</p>
                                                <textarea
                                                    className="form-control"
                                                    name="learning_outcomes"
                                                    value={formData.learning_outcomes}
                                                    onChange={handleChange}
                                                />
                                                {validationErrors.learning_outcomes && (
                                                    <span className="text-danger">{validationErrors.learning_outcomes}</span>
                                                )}
                                            </div>
                                            <div className="form-group col-12">
                                                <label>Course Description</label>
                                                <textarea
                                                    className="form-control"
                                                    name="course_description"
                                                    value={formData.course_description}
                                                    onChange={handleChange}
                                                />
                                                {validationErrors.course_description && (
                                                    <span className="text-danger">{validationErrors.course_description}</span>
                                                )}
                                            </div>
                                            <div className="form-group col-12">
                                                <h3>2. Upload Course Image</h3>
                                                <div
                                                    {...getRootProps()}
                                                    className="dropzone"
                                                    style={{
                                                        border: "2px dashed #cccccc",
                                                        padding: "20px",
                                                        textAlign: "center",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    <input {...getInputProps()} />
                                                    {file ? (
                                                        <div>
                                                            <img
                                                                src={URL.createObjectURL(file)}
                                                                alt="Preview"
                                                                style={{
                                                                    width: "100px",
                                                                    height: "100px",
                                                                }}


                                                            />
                                                            <p>{file.name}</p>
                                                        </div>
                                                    ) : (
                                                        <p>Drag & drop an image, or click to select one</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary mx-3"
                                                    onClick={handleNext}
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    )}


                                    {currentStep === 2 && (
                                        <div>
                                            <AddSection courseId={courseId} />

                                            <button
                                                className="btn btn-secondary"
                                                onClick={handlePrevious}
                                            >
                                                Previous
                                            </button>
                                            <button className="btn btn-primary mx-3" onClick={handleNext}>
                                                Next
                                            </button>
                                        </div>
                                    )}

                                    {currentStep === 3 && (
                                        <div>
                                            <h3>Course Added Successfully!</h3>
                                            <button
                                                className="btn btn-secondary"
                                                onClick={handleGoBack}
                                            >
                                                Go Back
                                            </button>
                                        </div>
                                    )}


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AddCourse;