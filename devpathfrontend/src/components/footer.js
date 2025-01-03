import React from 'react';
import '../componentsCSS/footer.css';

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-grid">
                    {/* Newsletter Section */}
                    <div className="footer-section">
                        <h3>Enroll Now</h3>
                        <p>Explore a wide variety of courses</p>
                        <form onSubmit={handleSubmit} className="newsletter-form">
                            <div className="input-group">

                                <a href="/courses" className='btn btn-primary'> Explore Now</a>
                            </div>
                        </form>

                        {/* Social Links */}
                        <div className="social-links">
                            <a href="https://www.facebook.com/" className="social-link">Facebook</a>
                            <a href="https://www.x.com/" className="social-link">X</a>
                            <a href="https://www.instagram.com/" className="social-link">Instagram</a>
                            <a href="https://www.linkedin.com/feed/" className="social-link">LinkedIn</a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="footer-section">
                        <h3>Company</h3>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="footer-section">
                        <h3>Resources</h3>
                        <ul className="footer-links">
                            <li><a href="/courses">Courses</a></li>
                            <li><a href="/membership">Membership</a></li>
                            <li><a href="/events">Events</a></li>
                            <li><a href="/profile">Portfolio</a></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="footer-section">
                        <h3>Support</h3>
                        <ul className="footer-links">
                            <li><a href="/dashboard">Dashboard</a></li>
                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/help">Help Center</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} DevPath. All rights reserved.</p>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                className="back-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ↑
            </button>
        </footer>
    );
};

export default Footer;