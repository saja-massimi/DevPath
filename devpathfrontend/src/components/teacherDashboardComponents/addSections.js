import React, { useState } from "react";
import AddContent from "./addContent";
import { v4 as uuidv4 } from "uuid";
import axiosInstance from "../../api/axiosInstance";
import Swal from "sweetalert2";

function AddSection({ courseId }) {
    const [sections, setSections] = useState([
        { id: uuidv4(), name: "", description: "", content: [] },
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
                course_id: courseId, // Link section to the course
                name: "New Section",
                description: "Section Description",
            });

            const sectionId = response.data.section_id;

            setSections((prevSections) => [
                ...prevSections,
                { id: sectionId, name: "New Section", description: "Section Description", content: [] },
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
            console.error("Error adding section:", error);
        }
    };

    const removeSection = (id) => {
        setSections(sections.filter((section) => section.id !== id));
    };

    const handleContentUpdate = (id, updatedContent) => {
        setSections((prev) =>
            prev.map((section) =>
                section.id === id ? { ...section, content: updatedContent } : section
            )
        );
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
                                value={section.name}
                                placeholder="ex: Section 1"
                                onChange={(e) =>
                                    handleSectionChange(section.id, "name", e.target.value)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Section Description</label>
                            <textarea
                                className="form-control"
                                value={section.description}
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
                        <AddContent
                            sectionId={section.id}
                            content={section.content}
                            onUpdate={(updatedContent) =>
                                handleContentUpdate(section.id, updatedContent)
                            }
                        />
                    </div>
                ))}
                <button type="button" className="btn btn-primary" onClick={addSection}>
                    Add Section
                </button>
            </div>
        </div>
    );
}

export default AddSection;
