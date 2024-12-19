import Bgimg from '../assets/images/background/bg1.jpg';
import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await validationSchema.validate(formData, { abortEarly: false });
            setErrors({});

            const response = await axiosInstance.post('/login', formData);
            
            console.log(response);

            if (response.data.token || response.data.user) {
                toast.success('Login successful!', { position: "top-right", autoClose: 3000 });
                localStorage.setItem('authToken', response.data.token || '');
                localStorage.setItem('user_id', response.data.user?.id || '');
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            }
        } catch (validationError) {
            if (validationError.name === 'ValidationError') {
                const validationErrors = validationError.inner.reduce((acc, error) => {
                    acc[error.path] = error.message;
                    return acc;
                }, {});
                setErrors(validationErrors);
            } else {
                const serverErrors = validationError.response?.data?.errors || {};
                setErrors(serverErrors);
                toast.error(
                    validationError.response?.data?.message || 'Something went wrong!',
                    { position: "top-right", autoClose: 5000 }
                );
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="account-form">
                <ToastContainer />

                <div
                    className="account-head"
                    style={{ backgroundImage: `url(${Bgimg})` }}
                />
                <div className="account-form-inner">
                    <div className="account-container">
                        <div className="heading-bx left">
                            <h2 className="title-head">
                                Login to your <span>Account</span>
                            </h2>
                            <p>
                                Don't have an account? <Link to="/register">Create one here</Link>
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="contact-bx">
                            <div className="row placeani">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Your Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                        {errors.email && <p className="text-danger small">{errors.email}</p>}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Your Password</label>
                                        <input
                                            name="password"
                                            type="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                        {errors.password && <p className="text-danger small">{errors.password}</p>}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group form-forget">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="customControlAutosizing"
                                            />

                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-12 m-b30">
                                    <button
                                        name="submit"
                                        type="submit"
                                        className="btn button-md"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Logging in...' : 'Login'}
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

export default Login;