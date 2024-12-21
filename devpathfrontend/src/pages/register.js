import Bgimg from '../assets/images/background/bg1.jpg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../api/axiosInstance';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        is_pending_teacher: 0, 
    });
    const [errors, setErrors] = useState({});
    const [serverMessage, setServerMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "role") {
            setFormData({ ...formData, is_pending_teacher: parseInt(value, 10) });
        } else {
            setFormData({ ...formData, [name]: value });
        }

        setErrors({ ...errors, [name]: '' });
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords do not match')
            .required('Confirm Password is required'),
    });

    const validate = (formData) => {
        try {
            validationSchema.validateSync(formData, { abortEarly: false });
            return {};
        } catch (err) {
            const validationErrors = {};
            err.inner.forEach((error) => {
                validationErrors[error.path] = error.message;
            });
            return validationErrors;
        }
    };

    const showToast = (type, message) => {
        toast[type](message, {
            position: "top-right",
            autoClose: type === 'success' ? 3000 : 5000,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axiosInstance.post('/register', formData);
            setServerMessage(response.data.message);
            showToast('success', "Registered Successfully!");
            setTimeout(() => navigate('/login'), 3000);
        } catch (error) {
            const serverErrors = error.response?.data?.errors || {};
            const errorMessages = Object.values(serverErrors).flat().join(' ');
            setErrors(serverErrors);
            setServerMessage(error.response?.data?.message || 'Something went wrong!');
            showToast('error', errorMessages || serverMessage);
        }
    };

    return (
        <>               
         <ToastContainer />

            <div className="account-form">
                <div
                    className="account-head"
                    style={{ backgroundImage: `url(${Bgimg})` }}
                />
                <div className="account-form-inner">
                    <div className="account-container">
                        <div className="heading-bx left">
                            <h2 className="title-head">
                                Sign Up <span>Now</span>
                            </h2>
                            <p>
                                Already have an account? <a href="/login">Click here</a>
                            </p>
                        </div>
                        <form className="contact-bx" onSubmit={handleSubmit}>
                            {serverMessage && (
                                <p className="text-center text-danger">{serverMessage}</p>
                            )}
                            <div className="row placeani">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Your Name</label>
                                        <input
                                            name="name"
                                            type="text"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && (
                                            <p className="text-danger small">{errors.name}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Your Email Address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && (
                                            <p className="text-danger small">{errors.email}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Your Password</label>
                                        <input
                                            name="password"
                                            type="password"
                                            className="form-control"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && (
                                            <p className="text-danger small">{errors.password}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Confirm Your Password</label>
                                        <input
                                            name="password_confirmation"
                                            type="password"
                                            className="form-control"
                                            value={formData.password_confirmation}
                                            onChange={handleChange}
                                        />
                                        {errors.password_confirmation && (
                                            <p className="text-danger small">{errors.password_confirmation}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Sign Up As</label>
                                        <div>
                                            <label>
                                                <input
                                                    className="mr-2"
                                                    type="radio"
                                                    name="role"
                                                    value="1"
                                                    checked={formData.is_pending_teacher === 1}
                                                    onChange={handleChange}
                                                />
                                                Teacher
                                            </label>
                                            <label style={{ marginLeft: '15px' }}>
                                                <input
                                                    className="mr-2"
                                                    type="radio"
                                                    name="role"
                                                    value="0"
                                                    checked={formData.is_pending_teacher === 0}
                                                    onChange={handleChange}
                                                />
                                                Student
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 m-b30">
                                    <button
                                        type="submit"
                                        className="btn button-md"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
