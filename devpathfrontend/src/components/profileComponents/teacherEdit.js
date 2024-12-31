import { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useParams } from "react-router-dom";
import { Link, NavLink, useNavigate } from "react-router-dom";

function TeacherEditProfile() {
    const { id } = useParams();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        address: "",
        experiene: "",
        phone: ""
    });
    const [statusMessage, setStatusMessage] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = sessionStorage.getItem("authToken");
                if (!token) {
                    console.warn("No token found. Redirecting to login.");
                    navigate("/login");
                    return;
                }

                const response = await axiosInstance.get(`/teachers/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUserData(response.data.teacher);


            } catch (error) {
                console.error("Error fetching profile:", error);
                if (error.response?.status === 401) {
                    navigate("/login");
                }
            } finally {
                setLoading(false);
            }

        };

        if (id) fetchProfile();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = sessionStorage.getItem("authToken");

            const response = await axiosInstance.put(`/teachers/${id}`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            console.log("Profile updated successfully:", response.data);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="tab-pane" id="edit-profile">
            <div className="profile-head">
                <h3>Edit Profile</h3>
            </div>
            <form className="edit-profile" onSubmit={handleFormSubmit}>
                <div>
                    <div className="form-group row">
                        <div className="col-12 col-sm-9 col-md-9 col-lg-10 ml-auto">
                            <h3>Personal Details</h3>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
                            Full Name
                        </label>
                        <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                value={userData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
                            Email
                        </label>
                        <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                            <input
                                className="form-control"
                                type="text"
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
                            Phone
                        </label>
                        <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                            <input
                                className="form-control"
                                type="text"
                                name="phone"
                                value={userData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>



                    <div className="seperator" />
                    <div className="form-group row">
                        <div className="col-12 col-sm-9 col-md-9 col-lg-10 ml-auto">
                            <h3> Address</h3>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
                            Address
                        </label>
                        <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                            <input
                                className="form-control"
                                type="text"
                                name="address"
                                value={userData.address}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>


                    <div className="seperator" />
                    <div className="form-group row">
                        <div className="col-12 col-sm-9 col-md-9 col-lg-10 ml-auto">
                            <h3>Experience</h3>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
                            Experience
                        </label>
                        <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                            <input
                                className="form-control"
                                type="text"
                                name="experience"
                                value={userData.experiene}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="seperator" />


                </div>
                <div>
                    <div>
                        <div className="row">
                            <div className="col-12 col-sm-3 col-md-3 col-lg-2" />
                            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                <button type="submit" className="btn mr-3">
                                    Save changes
                                </button>
                                <button type="reset" className="btn-secondry ">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {statusMessage && <p className="status-message">{statusMessage}</p>}

        </div>
    );
}

export default TeacherEditProfile;
