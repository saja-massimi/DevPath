import Img from '../../assets/images/background/bg1.jpg';
import Profile from '../../assets/img/profilePic.png';

function CourseContent({ title, description, duration, teacher_name,teacher_skills, difficulty, students, assessments }) {


    return (
        <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="courses-post">
                <div className="ttr-post-media media-effect">
                    <a href="#">
                        <img src={Img} alt="" />
                    </a>
                </div>
                <div className="ttr-post-info">
                    <div className="ttr-post-title ">
                        <h2 className="post-title">{title}</h2>
                    </div>
                    <div className="ttr-post-text">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="courese-overview" id="overview">
                <h4>Overview</h4>
                <div className="row">
                    <div className="col-md-12 col-lg-4">
                        <ul className="course-features">
                            <li>
                                <i className="ti-book" /> <span className="label">Lectures</span>
                                <span className="value">8</span>
                            </li>
                            <li>
                                <i className="ti-help-alt" /> <span className="label">Quizzes</span>
                                <span className="value">1</span>
                            </li>
                            <li>
                                <i className="ti-time" /> <span className="label">Duration</span>
                                <span className="value">{duration}</span>
                            </li>
                            <li>
                                <i className="ti-stats-up" />{" "}
                                <span className="label">Skill level</span>{" "}
                                <span className="value">{difficulty}</span>
                            </li>
                            <li>
                                <i className="ti-smallcap" />{" "}
                                <span className="label">Language</span>{" "}
                                <span className="value">English</span>
                            </li>
                            <li>
                                <i className="ti-user" /> <span className="label">Students</span>{" "}
                                <span className="value">32</span>
                            </li>
                            <li>
                                <i className="ti-check-box" />{" "}
                                <span className="label">Assessments</span>{" "}
                                <span className="value">Yes</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12 col-lg-8">
                        <h5 className="m-b5">Course Description</h5>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry’s standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </p>

                        <h5 className="m-b5">Learning Outcomes</h5>
                        <ul className="list-checked primary">
                            <li>Over 37 lectures and 55.5 hours of content!</li>
                            <li>LIVE PROJECT End to End Software Testing Training Included.</li>
                            <li>
                                Learn Software Testing and Automation basics from a professional
                                trainer from your own desk.
                            </li>
                            <li>
                                Information packed practical training starting from basics to
                                advanced testing techniques.
                            </li>
                            <li>
                                Best suitable for beginners to advanced level users and who learn
                                faster when demonstrated.
                            </li>
                            <li>
                                Course content designed by considering current software testing
                                technology and the job market.
                            </li>
                            <li>Practical assignments at the end of every session.</li>
                            <li>
                                Practical learning experience with live project work and examples.cv
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="m-b30" id="curriculum">
                <h4>Curriculum</h4>
                <ul className="curriculum-list">
                    <li>
                        <h5>First Level</h5>
                        <ul>
                            <li>
                                <div className="curriculum-list-box">
                                    <span>Lesson 1.</span> Introduction to UI Design
                                </div>
                                <span>120 minutes</span>
                            </li>
                            <li>
                                <div className="curriculum-list-box">
                                    <span>Lesson 2.</span> User Research and Design
                                </div>
                                <span>60 minutes</span>
                            </li>
                            <li>
                                <div className="curriculum-list-box">
                                    <span>Lesson 3.</span> Evaluating User Interfaces Part 1
                                </div>
                                <span>85 minutes</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h5>Second Level</h5>
                        <ul>
                            <li>
                                <div className="curriculum-list-box">
                                    <span>Lesson 1.</span> Prototyping and Design
                                </div>
                                <span>110 minutes</span>
                            </li>
                            <li>
                                <div className="curriculum-list-box">
                                    <span>Lesson 2.</span> UI Design Capstone
                                </div>
                                <span>120 minutes</span>
                            </li>
                            <li>
                                <div className="curriculum-list-box">
                                    <span>Lesson 3.</span> Evaluating User Interfaces Part 2
                                </div>
                                <span>120 minutes</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h5>Final</h5>
                        <ul>
                            <li>
                                <div className="curriculum-list-box">
                                    <span>Part 1.</span> Final Test
                                </div>
                                <span>120 minutes</span>
                            </li>
                            <li>
                                <div className="curriculum-list-box">
                                    <span>Part 2.</span> Online Test
                                </div>
                                <span>120 minutes</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="" id="instructor">
                <h4>Instructor</h4>
                <div className="instructor-bx">
                    <div className="instructor-author">
                        <img src={Profile} alt="" />
                    </div>
                    <div className="instructor-info">
                        <h6>{teacher_name} </h6>
                        <span>Instructor</span>
                    
                        <p className="m-b0">
                           {teacher_skills}
                        </p>
                    </div>
                </div>

            </div>
            <div className="" id="reviews">
                <h4>Reviews</h4>
                <div className="review-bx">
                    <div className="all-review">
                        <h2 className="rating-type">3</h2>
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
                        <span>3 Rating</span>
                    </div>
                    <div className="review-bar">
                        <div className="bar-bx">
                            <div className="side">
                                <div>5 star</div>
                            </div>
                            <div className="middle">
                                <div className="bar-container">
                                    <div className="bar-5" style={{ width: "90%" }} />
                                </div>
                            </div>
                            <div className="side right">
                                <div>150</div>
                            </div>
                        </div>
                        <div className="bar-bx">
                            <div className="side">
                                <div>4 star</div>
                            </div>
                            <div className="middle">
                                <div className="bar-container">
                                    <div className="bar-5" style={{ width: "70%" }} />
                                </div>
                            </div>
                            <div className="side right">
                                <div>140</div>
                            </div>
                        </div>
                        <div className="bar-bx">
                            <div className="side">
                                <div>3 star</div>
                            </div>
                            <div className="middle">
                                <div className="bar-container">
                                    <div className="bar-5" style={{ width: "50%" }} />
                                </div>
                            </div>
                            <div className="side right">
                                <div>120</div>
                            </div>
                        </div>
                        <div className="bar-bx">
                            <div className="side">
                                <div>2 star</div>
                            </div>
                            <div className="middle">
                                <div className="bar-container">
                                    <div className="bar-5" style={{ width: "40%" }} />
                                </div>
                            </div>
                            <div className="side right">
                                <div>110</div>
                            </div>
                        </div>
                        <div className="bar-bx">
                            <div className="side">
                                <div>1 star</div>
                            </div>
                            <div className="middle">
                                <div className="bar-container">
                                    <div className="bar-5" style={{ width: "20%" }} />
                                </div>
                            </div>
                            <div className="side right">
                                <div>80</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CourseContent;