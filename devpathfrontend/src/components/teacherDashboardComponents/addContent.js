import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddContent = ({ sectionId, content, onUpdate }) => {
    const [newContent, setNewContent] = useState("");

    const handleAddContent = () => {
        if (!newContent.trim()) return;

        const updatedContent = [
            ...content,
            { id: uuidv4(), text: newContent },
        ];

        onUpdate(updatedContent);
        setNewContent("");
    };

    const handleRemoveContent = (id) => {
        const updatedContent = content.filter((item) => item.id !== id);
        onUpdate(updatedContent);
    };

    return (
        <div style={{ marginTop: "10px" }}>
            <h4>Content for Section {sectionId}</h4>
            <ul style={{ padding: "0", listStyleType: "none" }}>
                {content.map((item) => (
                    <li
                        key={item.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "5px",
                        }}
                    >
                        <span style={{ flexGrow: 1 }}>{item.text}</span>
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleRemoveContent(item.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <div style={{ display: "flex", marginTop: "10px" }}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add new content"
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                />
                <button
                    className="btn btn-primary ml-2"
                    onClick={handleAddContent}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default AddContent;
