import Profile from '../../assets/img/profilePic.png';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';


function CourseContent({ id, title, description, duration, teacher_name, teacher_skills, difficulty, img, language, learning_outcomes, lectures, quizzes }) {

    const [splitLearningOutcomes, setSplitLearningOutcomes] = useState([]);
    const [content, setContent] = useState([]);

    useEffect(() => {
        if (learning_outcomes) {
            const outcomes = learning_outcomes.split('.').filter(outcome => outcome.trim() !== '');
            setSplitLearningOutcomes(outcomes);
        }
    }, [learning_outcomes]);


    useEffect(() => {
        const getContent = () => {
            axiosInstance.get(`/sections/${id}`).then((res) => {
                setContent(res.data);


            }).catch((err) => {

                console.log(err);
            });


        };
        getContent();
    }, []);



    return (
        <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="courses-post">
                <div className="ttr-post-media media-effect">
                    <a href="#">
                        <img src={img} alt="" />
                    </a>
                </div>
                <div className="ttr-post-info">
                    <div className="ttr-post-title ">
                        <h2 className="post-title">{title}</h2>
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
                                <span className="value">{lectures}</span>
                            </li>
                            <li>
                                <i className="ti-help-alt" /> <span className="label">Quizzes</span>
                                <span className="value">{quizzes}</span>
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
                                <span className="value">{language}</span>
                            </li>


                        </ul>
                    </div>
                    <div className="col-md-12 col-lg-8">
                        <h5 className="m-b5">Course Description</h5>
                        <p>
                            {description}
                        </p>

                        <h5 className="m-b5">Learning Outcomes</h5>
                        <ul className="list-checked primary">
                            {splitLearningOutcomes.map((outcome, index) => (
                                <li key={index}>{outcome}</li>)

                            )}

                        </ul>
                    </div>
                </div>
            </div>


            <div className="m-b30" id="curriculum">
                <h4>Curriculum</h4>
                <ul className="curriculum-list">


                    {content.map((section, index) => (
                        <li key={index}>
                            <h5>{section.title}: {section.description}</h5>
                            <ul>
                                {section.content.map((lesson, index) => (
                                    <li key={index}>
                                        <div className="curriculum-list-box">
                                            <span>Lesson {index + 1}.</span> {lesson.title}
                                        </div>
                                        <span>{lesson.duration} Hours</span>
                                    </li>
                                ))}
                            </ul>

                        </li>

                    ))}


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


        </div>

    )
}

export default CourseContent;