import Header from "../components/header";
import About from "../components/about";
import About2 from "../components/about2";
import Courses from "../components/courses";
import TeacherHeader from "../components/teacherComponents/teacherHeader";
import TeacherAbout2 from "../components/teacherComponents/teacherAbout2";
import TeacherAbout from "../components/teacherComponents/teacherAbout";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Home() {
    const { user } = useContext(AuthContext);
    const isTeacherLoggedIn = user?.role === 'teacher';

    if (!user) {
        <div id="loading-icon-bx"></div>
    }

    return (
        <>
            {isTeacherLoggedIn ? (
                <div className="teacher-page" >
                    <div className="page-content bg-white">
                        <TeacherHeader />
                    </div>
                    <div className="content-block">
                        <Courses />
                        <TeacherAbout />
                        <TeacherAbout2 />
                    </div>
                </div>
            ) : (
                <div className="page-content bg-white">
                    <Header />
                    <div className="content-block">
                        <Courses />
                        <About />
                        <About2 />
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;
