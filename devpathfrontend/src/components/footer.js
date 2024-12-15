function footer() {
    return (
        <>
            {/* Footer Start */}
            <div className="footer mt-5 wow fadeIn" data-wow-delay="0.1s">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#06BBCC"
                        fillOpacity={1}
                        d="M0,160L26.7,170.7C53.3,181,107,203,160,181.3C213.3,160,267,96,320,106.7C373.3,117,427,203,480,213.3C533.3,224,587,160,640,128C693.3,96,747,96,800,122.7C853.3,149,907,203,960,229.3C1013.3,256,1067,256,1120,250.7C1173.3,245,1227,235,1280,213.3C1333.3,192,1387,160,1413,144L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
                    />
                </svg>
                <div
                    className="pr-5"
                    style={{ backgroundColor: "#06BBCC", padding: "0px 20px" }}
                >
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Quick Link</h4>
                            <a className="btn btn-link" href="">
                                About Us
                            </a>
                            <a className="btn btn-link" href="">
                                Contact Us
                            </a>
                            <a className="btn btn-link" href="">
                                Privacy Policy
                            </a>
                            <a className="btn btn-link" href="">
                                FAQs &amp; Help
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Contact</h4>
                            <p className="mb-2">
                                <i className="fa fa-map-marker-alt me-3" />
                                Amman, Jordan
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-phone-alt me-3" />
                                +012 345 67890
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-envelope me-3" />
                                admin@gmail.com
                            </p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-youtube" />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-8">
                            <h4 className="text-white mb-3">Gallery</h4>
                            <div className="row g-2 pt-2">
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light p-1"
                                        src="img/course-1.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light p-1"
                                        src="img/course-2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light p-1"
                                        src="img/course-3.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light p-1"
                                        src="img/course-2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light p-1"
                                        src="img/course-3.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light p-1"
                                        src="img/course-1.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#06BBCC", padding: "0px 20px" }}>
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    ©{" "}
                                    <a className="border-bottom" href="#">
                                        DevPath
                                    </a>
                                    , All Right Reserved.
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    <div className="footer-menu">
                                        <a href="">Home</a>
                                        <a href="./courses.html">Courses</a>
                                        <a href="./team.html">Tutors</a>
                                        <a href="">FAQs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </>

    );
}

export default footer;