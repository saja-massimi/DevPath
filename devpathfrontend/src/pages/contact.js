import Backimg from '../assets/images/banner/banner3.jpg';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from '../api/axiosInstance';
import WOW from 'wow.js';
import 'animate.css';

import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [message, setMessage] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        is_read: 0
    });

    const handleChange = (e) => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        });
    }

    const showToast = (type, message) => {
        toast[type](message, {
            position: "top-right",
            autoClose: type === 'success' ? 3000 : 5000,
        });
    }


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const response = await axios.post('/contact-us', message);
            if (response.status === 200) {
                showToast('success', 'Message sent successfully');
            }
        } catch (error) {
            showToast('error', 'Failed to send message');
        }


    }

    useEffect(() => {
        const wow = new WOW({
            boxClass: "wow", // Default class for triggering animations
            animateClass: "animate__animated", // Animate.css default class prefix
            offset: 0,
            mobile: true, // Enable animations on mobile
            live: true, // Act on asynchronously loaded content
        });
        wow.init();
    }, []);


    return (
        <>


            <div className="page-content bg-white">
                <>


                    <div
                        className="page-banner ovbl-dark"
                        style={{ backgroundImage: `url(${Backimg})` }}
                    >
                        <div className="container">
                            <div className="page-banner-entry">
                                <h1 className="text-white wow animate__fadeInDown">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                    {/* Breadcrumb row */}
                    <div className="breadcrumb-row">
                        <div className="container">
                            <ul className="list-inline">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <ToastContainer />
                    {/* Breadcrumb row END */}
                    {/* inner page banner */}
                    <div className="page-banner contact-page section-sp2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 m-b30">
                                    <div className="bg-primary text-white contact-info-bx wow animate__fadeInLeft" data-wow-delay="0.2s">
                                        <h2 className="m-b10 title-head">
                                            Contact <span>Information</span>
                                        </h2>
                                        <p>
                                            We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out to us
                                        </p>
                                        <div className="widget widget_getintuch">
                                            <ul>
                                                <li>
                                                    <i className="ti-location-pin" />
                                                    Amman ,Jordan
                                                </li>
                                                <li>
                                                    <i className="ti-mobile" />
                                                    +962 79 123 4567
                                                </li>
                                                <li>
                                                    <i className="ti-email" />
                                                    info@devpath.com
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="m-t0 m-b20">Follow Us</h5>
                                        <ul className="list-inline contact-social-bx">
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank" className="btn outline radius-xl">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://x.com/" className="btn outline radius-xl" target='_blank'>
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/feed/" className="btn outline radius-xl" target='_blank'>
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 wow animate__fadeInRight" data-wow-delay="0.2s">
                                    <form
                                        className="contact-bx"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="ajax-message" />
                                        <div className="heading-bx left">
                                            <h2 className="title-head">
                                                Get In <span>Touch</span>
                                            </h2>

                                        </div>
                                        <div className="row placeani">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <label>Your Name</label>
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            required=""
                                                            className="form-control valid-character"
                                                            onChange={handleChange}
                                                            value={message.name}

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <label>Your Email Address</label>
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            className="form-control"
                                                            required=""
                                                            onChange={handleChange}
                                                            value={message.email}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <label>Subject</label>
                                                        <input
                                                            name="subject"
                                                            type="text"
                                                            required=""
                                                            className="form-control"
                                                            onChange={handleChange}
                                                            value={message.subject}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <label>Type Message</label>
                                                        <textarea
                                                            name="message"
                                                            rows={4}
                                                            className="form-control"
                                                            required=""
                                                            onChange={handleChange}
                                                            value={message.message}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div
                                                            className="g-recaptcha"
                                                            data-sitekey="6Lf2gYwUAAAAAJLxwnZTvpJqbYFWqVyzE-8BWhVe"
                                                            data-callback="verifyRecaptchaCallback"
                                                            data-expired-callback="expiredRecaptchaCallback"
                                                        />
                                                        <input
                                                            className="form-control d-none"
                                                            style={{ display: "none" }}
                                                            data-recaptcha="true"
                                                            required=""
                                                            data-error="Please complete the Captcha"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button
                                                    name="submit"
                                                    type="submit"
                                                    value="Submit"
                                                    className="btn button-md"
                                                >

                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>


            </div>

        </>
    )
}

export default Contact;