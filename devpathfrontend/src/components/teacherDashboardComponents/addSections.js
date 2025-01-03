import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axiosInstance from "../../api/axiosInstance";
import Swal from "sweetalert2";

function AddSection({ courseId }) {
    const [sections, setSections] = useState([
        { id: uuidv4(), title: "New Section", description: "Section Description", content: [] },
    ]);

    const handleSectionChange = (id, field, value) => {
        setSections((prev) =>
            prev.map((section) =>
                section.id === id ? { ...section, [field]: value } : section
            )
        );
    };

    const addSection = async () => {
        if (!courseId) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Course ID is missing. Please ensure the course is added first.",
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            return;
        }

        try {
            const response = await axiosInstance.post("/sections", {
                course_id: courseId,
                title: "New Section",
                description: "Section Description",
            });

            const sectionId = response.data.section_id;

            setSections((prevSections) => [
                ...prevSections,
                { id: sectionId, title: "New Section", description: "Section Description", content: [] },
            ]);

            Swal.fire({
                icon: "success",
                title: "Section Added",
                text: "The section was successfully added.",
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "There was an issue adding the section. Please try again.",
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            console.error("Error adding section:", error.response?.data || error.message);
        }
    };

    const removeSection = async (id) => {
        try {
            await axiosInstance.delete(`/sections/${id}`);
            setSections((prev) => prev.filter((section) => section.id !== id));

            Swal.fire({
                icon: "success",
                title: "Section Removed",
                text: "The section was successfully removed.",
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "There was an issue removing the section. Please try again.",
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            console.error("Error removing section:", error.response?.data || error.message);
        }
    };

    return (
        <div className="widget-box">
            <div className="widget-inner">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        style={{
                            border: "1px solid #ccc",
                            margin: "10px",
                            padding: "10px",
                            borderRadius: "8px",
                        }}
                    >
                        <div className="form-group">
                            <label>Section Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={section.title}
                                placeholder="Enter Section Name"
                                onChange={(e) =>
                                    handleSectionChange(section.id, "title", e.target.value)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Section Description</label>
                            <textarea
                                className="form-control"
                                value={section.description}
                                placeholder="Enter Section Description"
                                onChange={(e) =>
                                    handleSectionChange(section.id, "description", e.target.value)
                                }
                            />
                        </div>
                        <button
                            className="btn btn-danger mt-2"
                            onClick={() => removeSection(section.id)}
                            style={{ marginBottom: "10px" }}
                        >
                            Remove Section
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={addSection}
                    style={{ marginTop: "10px" }}
                >
                    Add Section
                </button>
            </div>
        </div>
    );
}

export default AddSection;
