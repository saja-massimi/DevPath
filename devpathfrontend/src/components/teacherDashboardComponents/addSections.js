import React, { useState } from "react";
import AddContent from "./addContent";
import { v4 as uuidv4 } from "uuid";

function AddSection() {
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

    const addSection = () => {
        setSections([
            ...sections,
            { id: uuidv4(), name: "", description: "", content: [] },
        ]);
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
            <div className="wc-title">
                <h3>3. Add Sections</h3>
            </div>
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
                <button className="btn btn-primary" onClick={addSection}>
                    Add Section
                </button>
            </div>
        </div>
    );
}

export default AddSection;
