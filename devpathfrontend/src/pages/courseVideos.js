import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import axiosInstance from '../api/axiosInstance';

const CourseVideos = () => {
  const [content, setContent] = useState([]);
  const [course, setCourse] = useState({});
  const { id } = useParams();

  const [selectedSection, setSelectedSection] = useState(null);
  const [splitLearningOutcomes, setSplitLearningOutcomes] = useState([]);
  const [currentVideo, setCurrentVideo] = useState('');
  const [selectedLesson, setSelectedLesson] = useState(null); // Track selected lesson

  useEffect(() => {
    const getCourseData = async () => {
      try {
        const { data } = await axiosInstance.get(`/courses/${id}`);
        setCourse(data.data);
        setSplitLearningOutcomes(
          data.data.learning_outcomes.split('.').filter((outcome) => outcome.trim() !== '')
        );
      } catch (err) {
        console.error('Failed to fetch course data:', err);
      }
    };

    const getContent = async () => {
      try {
        const { data } = await axiosInstance.get(`/sections/${id}`);
        if (data.length > 0) {
          setContent(data);
          const firstLesson = data[0]?.content?.[0];
          if (firstLesson) {
            setCurrentVideo(firstLesson.video_url);
            setSelectedLesson(firstLesson.courseContent_id); // Set the first lesson as selected
          }
        }
      } catch (err) {
        console.error('Failed to fetch section data:', err);
      }
    };

    getCourseData();
    getContent();
  }, [id]);

  const handleSectionClick = (sectionId) => {
    setSelectedSection(selectedSection === sectionId ? null : sectionId);
  };

  const handleLessonClick = (lessonId, videoUrl) => {
    setCurrentVideo(videoUrl);
    setSelectedLesson(lessonId); // Update selected lesson
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {/* Main Content */}
        <main className="col-lg-9 p-4">
          <div className="card border-0 shadow-sm">
            {/* Video Section */}
            <div className="w-100" style={{ height: '500px' }}>
              {currentVideo ? (
                <iframe
                  title="Course Video"
                  src={currentVideo}
                  allowFullScreen
                  className="w-100"
                  style={{ height: '100%' }}
                />
              ) : (
                <p className="text-center mt-5">No video available</p>
              )}
            </div>
          </div>

          {/* Course Info */}
          <div className="mt-4">
            <h1 className="h2 mb-3 text-primary">{course.course_title}</h1>
            <p className="lead text-muted">{course.course_description}</p>

            {/* Learning Outcomes */}
            <div className="card mt-4">
              <div className="card-body">
                <h2 className="h4 mb-4 text-primary">Learning Outcomes</h2>
                <ul className="list-group list-group-flush">
                  {splitLearningOutcomes.map((outcome, index) => (
                    <li key={index} className="list-group-item border-0 d-flex align-items-start">
                      <div className="text-success mx-3" style={{ color: '#28a745' }}>
                        <i className="bi bi-check-circle-fill"></i>
                      </div>
                      <div>{outcome}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="col-lg-3 p-0">
          <div
            className="sticky-top bg-white shadow-sm"
            style={{
              top: '70px',
              maxHeight: 'calc(100vh - 70px)',
              overflowY: 'auto',
              borderRadius: '8px',
            }}
          >
            <div
              className="border-bottom p-3"
              style={{
                backgroundColor: '#f8f9fa',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
              }}
            >
              <h3 className="h5 mb-0 text-center text-primary">Course Content</h3>
            </div>

            <div className="accordion" id="courseContent">
              {content.map((section) => (
                <div key={section.section_id} className="accordion-item border-0">
                  {/* Accordion Header */}
                  <div
                    className="accordion-header cursor-pointer"
                    onClick={() => handleSectionClick(section.section_id)}
                    style={{
                      padding: '0.75rem 1rem',
                      borderBottom: '1px solid #dee2e6',
                    }}
                  >
                    <button
                      className={`accordion-button ${selectedSection === section.section_id ? '' : 'collapsed'
                        } p-0 border-0 bg-transparent`}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <div>
                        <h4 className="text-primary">{section.title}</h4>
                        <small className="text-muted">{section.description}</small>
                      </div>
                      {selectedSection === section.section_id ? (
                        <ChevronUp className="ms-2 text-primary" size={20} />
                      ) : (
                        <ChevronDown className="ms-2 text-secondary" size={20} />
                      )}
                    </button>
                  </div>

                  {/* Accordion Content */}
                  <div
                    className={`accordion-collapse ${selectedSection === section.section_id ? 'show' : 'collapse'
                      }`}
                  >
                    <div
                      className="accordion-body p-0"
                      style={{ backgroundColor: '#f8f9fa' }}
                    >
                      <ul className="list-group list-group-flush">
                        {section.content.map((lesson) => (
                          <li
                            key={lesson.courseContent_id}
                            className={`list-group-item border-0 py-2 px-4 ${selectedLesson === lesson.courseContent_id
                              ? 'bg-primary text-white'
                              : 'bg-light text-dark'
                              }`}
                            onClick={() =>
                              handleLessonClick(lesson.courseContent_id, lesson.video_url)
                            }
                            style={{
                              cursor: 'pointer',
                              transition: 'background-color 0.2s ease-in-out',
                            }}
                          >
                            <small>{lesson.title}</small>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseVideos;
