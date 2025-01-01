import Bgimg from '../assets/images/background/bg1.jpg';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axiosInstance from '../api/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../api/axiosInstance';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useContext(AuthContext);
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

            const { user, token } = response.data;

            if (token && user) {
                login(user, token);

                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Login successful! Welcome back!",
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                })

                setTimeout(() => {
                    navigate('/');
                }, 3000);
            }
        } catch (error) {
            if (error.name === 'ValidationError') {
                const validationErrors = error.inner.reduce((acc, err) => {
                    acc[err.path] = err.message;
                    return acc;
                }, {});
                setErrors(validationErrors);
            } else {
                const serverErrorMessage = error.response?.data?.message || 'Something went wrong!';
                setErrors({ server: serverErrorMessage });

                Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: 'Wrong email or password!',
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                })
            }
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <>
            <div className="account-form mt-4">
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
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
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
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        />
                                        {errors.password && <p className="text-danger small">{errors.password}</p>}
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
                                {errors.server && (
                                    <div className="col-lg-12">
                                        <p className="text-danger small">{errors.server}</p>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
