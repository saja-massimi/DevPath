import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";

function ChangePassword() {
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (formData.newPassword !== formData.confirmPassword) {
            setError("New password and confirmation do not match.");
            return;
        }

        try {
            const token = localStorage.getItem("authToken");
            const response = await axiosInstance.put(
                "/updatePassword",
                {
                    current_password: formData.currentPassword,
                    password: formData.newPassword,
                    password_confirmation: formData.confirmPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.data.status) {
                setSuccess(response.data.message);
                setFormData({
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                });
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "An error occurred while updating the password."
            );
        }
    };

    return (
        <div className="tab-pane" id="change-password">
            <div className="profile-head">
                <h3>Change Password</h3>
            </div>
            <form className="edit-profile" onSubmit={handleFormSubmit}>
                <div>
                    <div className="form-group row">
                        <div className="col-12 col-sm-8 col-md-8 col-lg-9 ml-auto">
                            <h3>Password</h3>
                        </div>
                    </div>
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="alert alert-success" role="alert">
                            {success}
                        </div>
                    )}
                    <div className="form-group row">
                        <label className="col-12 col-sm-4 col-md-4 col-lg-3 col-form-label">
                            Current Password
                        </label>
                        <div className="col-12 col-sm-8 col-md-8 col-lg-7">
                            <input
                                className="form-control"
                                type="password"
                                name="currentPassword"
                                value={formData.currentPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-12 col-sm-4 col-md-4 col-lg-3 col-form-label">
                            New Password
                        </label>
                        <div className="col-12 col-sm-8 col-md-8 col-lg-7">
                            <input
                                className="form-control"
                                type="password"
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-12 col-sm-4 col-md-4 col-lg-3 col-form-label">
                            Re-Type New Password
                        </label>
                        <div className="col-12 col-sm-8 col-md-8 col-lg-7">
                            <input
                                className="form-control"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-3 col-md-3 col-lg-2" />
                    <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                        <button type="submit" className="btn mr-3">
                            Save Changes
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() =>
                                setFormData({
                                    currentPassword: "",
                                    newPassword: "",
                                    confirmPassword: "",
                                })
                            }
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ChangePassword;
