import { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";

function EditProfile() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        address: "",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (token) {
                    const response = await axiosInstance.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUserData(response.data.user);
                    console.log("User data:", response.data.user);
                }
            } catch (error) {
                console.error("Error fetching user data", error);
            }
        };

        fetchUserData();
    }, []);

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
            const token = localStorage.getItem("authToken");
            const response = await axiosInstance.put("/profile", userData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            console.log("Profile updated successfully:", response.data);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

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
                </div>
                <div>
                    <div>
                        <div className="row">
                            <div className="col-12 col-sm-3 col-md-3 col-lg-2" />
                            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                <button type="submit" className="btn">
                                    Save changes
                                </button>
                                <button type="reset" className="btn-secondry">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;
