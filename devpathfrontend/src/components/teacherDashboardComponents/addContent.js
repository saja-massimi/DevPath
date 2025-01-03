import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axiosInstance from "../../api/axiosInstance";

const AddContent = ({ sectionId, content, onUpdate }) => {
    const [newVideo, setNewVideo] = useState({
        title: "",
        description: "",
        duration: "",
        file: null,
    });
    const [uploading, setUploading] = useState(false);
    const [localContent, setLocalContent] = useState([]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file.size > 50 * 1024 * 1024) {
            alert("File size exceeds 50MB. Please upload a smaller video.");
            return;
        }
        if (!file.type.startsWith("video/")) {
            alert("Invalid file type. Please upload a video file.");
            return;
        }
        setNewVideo({ ...newVideo, file });
    };

    const handleAddContent = () => {
        if (!newVideo.title.trim() || !newVideo.file) {
            alert("Please provide a title and select a video file.");
            return;
        }

        const newContent = {
            id: uuidv4(),
            title: newVideo.title,
            description: newVideo.description,
            duration: newVideo.duration,
            file: newVideo.file,
        };

        setLocalContent([...localContent, newContent]);
        setNewVideo({ title: "", description: "", duration: "", file: null });
    };

    const handleSubmitAll = async () => {
        if (!sectionId) {
            alert("Section ID is missing. Ensure the section is added before uploading content.");
            return;
        }

        if (localContent.length === 0) {
            alert("No content to submit.");
            return;
        }

        setUploading(true);

        try {
            const submittedContent = [];

            for (const video of localContent) {
                const formData = new FormData();
                formData.append("file", video.file);

                const uploadResponse = await axiosInstance.post(
                    "/upload/video", // Adjust API endpoint
                    formData,
                    {
                        headers: { "Content-Type": "multipart/form-data" },
                        onUploadProgress: (progressEvent) => {
                            const percentCompleted = Math.round(
                                (progressEvent.loaded * 100) / progressEvent.total
                            );
                            console.log(`Upload progress: ${percentCompleted}%`);
                        },
                    }
                );

                const videoLink = uploadResponse.data.videoLink;

                const contentResponse = await axiosInstance.post("/contents", {
                    section_id: sectionId, // Link content to the section
                    title: video.title,
                    description: video.description,
                    duration: video.duration,
                    video_link: videoLink,
                });

                submittedContent.push({
                    id: contentResponse.data.content_id,
                    title: video.title,
                    description: video.description,
                    duration: video.duration,
                    videoLink,
                });
            }

            onUpdate([...content, ...submittedContent]);
            setLocalContent([]); // Clear local content
            alert("All content successfully submitted.");
        } catch (error) {
            console.error("Error submitting content:", error);
            alert("Failed to submit content. Please try again.");
        } finally {
            setUploading(false);
        }
    };

    const handleRemoveLocalContent = (id) => {
        setLocalContent(localContent.filter((item) => item.id !== id));
    };

    return (
        <div className="add-content">
            <h4>Content</h4>
            <ul className="content-list">
                {localContent.map((item) => (
                    <li key={item.id} className="content-item">
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                        <p>Duration: {item.duration}</p>
                        <button
                            className="btn btn-sm btn-danger mt-2"
                            onClick={() => handleRemoveLocalContent(item.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <div className="new-video-form">
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Video Title"
                    value={newVideo.title}
                    onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                />
                <textarea
                    className="form-control mb-2"
                    placeholder="Video Description"
                    value={newVideo.description}
                    onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
                ></textarea>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Duration (e.g., 10:30)"
                    value={newVideo.duration}
                    onChange={(e) => setNewVideo({ ...newVideo, duration: e.target.value })}
                />
                <input
                    type="file"
                    className="form-control mb-2"
                    accept="video/*"
                    onChange={handleFileChange}
                />
                <button
                    className="btn btn-secondary mx-2"
                    onClick={handleAddContent}
                    disabled={uploading}
                >
                    Add to List
                </button>
                <button
                    className="btn btn-primary"
                    onClick={handleSubmitAll}
                    disabled={uploading}
                >
                    {uploading ? "Submitting..." : "Submit All"}
                </button>
            </div>
        </div>
    );
};

export default AddContent;
