function ProfileCourses() {
    return (
        <>
            <div className="tab-pane active" id="courses">
                <div className="profile-head">
                    <h3>My Courses</h3>
                    <div className="feature-filters style1 ml-auto">
                        <ul className="filters" data-toggle="buttons">
                            <li data-filter="" className="btn active">
                                <input type="radio" />
                                <a href="#">
                                    <span>All</span>
                                </a>
                            </li>
                            <li data-filter="publish" className="btn">
                                <input type="radio" />
                                <a href="#">
                                    <span>Publish</span>
                                </a>
                            </li>
                            <li data-filter="pending" className="btn">
                                <input type="radio" />
                                <a href="#">
                                    <span>Pending</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="courses-filter">
                    <div className="clearfix">
                        <ul id="masonry" className="list-unstyled ttr-gallery-listing magnific-image row">
                            <li className="action-card col-xl-4 col-lg-6 col-md-12 col-sm-6 publish">
                                <div className="cours-bx">
                                    <div className="action-box">
                                        <img src="assets/images/courses/pic1.jpg" alt="" />
                                        <a href="#" className="btn">
                                            Read More
                                        </a>
                                    </div>
                                    <div className="info-bx text-center">
                                        <h5>
                                            <a href="#">Introduction EduChamp – LMS plugin</a>
                                        </h5>
                                        <span>Programming</span>
                                    </div>
                                    <div className="cours-more-info">
                                        <div className="review">
                                            <span>3 Review</span>
                                            <ul className="cours-star">
                                                <li className="active">
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li className="active">
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li className="active">
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="price">
                                            <del>$190</del>
                                            <h5>$120</h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCourses;