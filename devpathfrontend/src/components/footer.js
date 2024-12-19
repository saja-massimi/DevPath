function footer() {
    return (
        <>
            <>
                <footer>
                    <div className="footer-top">
                        <div className="pt-exebar">
                         
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12 footer-col-4">
                                    <div className="widget">
                                        <h5 className="footer-title">Sign Up For A Newsletter</h5>
                                        <p className="text-capitalize m-b20">
                                            Weekly Breaking news analysis and cutting edge advices on job
                                            searching.
                                        </p>
                                        <div className="subscribe-form m-b20">
                                            <form
                                                className="subscription-form"
                                                action="http://educhamp.themetrades.com/demo/assets/script/mailchamp.php"
                                                method="post"
                                            >
                                                <div className="ajax-message" />
                                                <div className="input-group">
                                                    <input
                                                        name="email"
                                                        required="required"
                                                        className="form-control"
                                                        placeholder="Your Email Address"
                                                        type="email"
                                                    />
                                                    <span className="input-group-btn">
                                                        <button
                                                            name="submit"
                                                            value="Submit"
                                                            type="submit"
                                                            className="btn"
                                                        >
                                                            <i className="fa fa-arrow-right" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-5 col-md-7 col-sm-12">
                                    <div className="row">
                                        <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                                            <div className="widget footer_widget">
                                                <h5 className="footer-title">Company</h5>
                                                <ul>
                                                    <li>
                                                        <a href="index.html">Home</a>
                                                    </li>
                                                    <li>
                                                        <a href="about-1.html">About</a>
                                                    </li>
                                                    <li>
                                                        <a href="faq-1.html">FAQs</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact-1.html">Contact</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                                            <div className="widget footer_widget">
                                                <h5 className="footer-title">Get In Touch</h5>
                                                <ul>
                                                    <li>
                                                        <a href="http://educhamp.themetrades.com/admin/index.html">
                                                            Dashboard
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-classic-grid.html">Blog</a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio.html">Portfolio</a>
                                                    </li>
                                                    <li>
                                                        <a href="event.html">Event</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                                            <div className="widget footer_widget">
                                                <h5 className="footer-title">Courses</h5>
                                                <ul>
                                                    <li>
                                                        <a href="courses.html">Courses</a>
                                                    </li>
                                                    <li>
                                                        <a href="courses-details.html">Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="membership.html">Membership</a>
                                                    </li>
                                                    <li>
                                                        <a href="profile.html">Profile</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                            </div>
                        </div>
                    </div>
                
                </footer>
                {/* Footer END ==== */}
                <button className="back-to-top fa fa-chevron-up" />
            </>

        </>

    );
}

export default footer;