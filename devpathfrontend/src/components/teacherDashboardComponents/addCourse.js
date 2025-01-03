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

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
        onDrop,
        accept: "image/*",
    });

    const handleNext = () => setCurrentStep((prev) => prev + 1);
    const handlePrevious = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    const [courseId, setCourseId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            });

            const course_id = response.data.course_id;
            setCourseId(course_id);
            console.log("Form Submitted", response.data);

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

            handleNext();
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
        }
    };



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
                                <form className="edit-profile m-b30" onSubmit={handleSubmit}>

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
                                            </div>
                                            <div className="form-group col-12">
                                                <label>Course Description</label>
                                                <textarea
                                                    className="form-control"
                                                    name="course_description"
                                                    value={formData.course_description}
                                                    onChange={handleChange}
                                                />
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
                                            <h3>Review & Submit</h3>
                                            <p>Review your course details and submit</p>
                                            <button
                                                className="btn btn-secondary"
                                                onClick={handlePrevious}
                                            >
                                                Previous
                                            </button>
                                            <button className="btn btn-success" onClick={handleSubmit}>
                                                Submit
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