import Header from "../components/header";
import About from "../components/about";
import About2 from "../components/about2";
import Courses from "../components/courses";
import TeacherHeader from "../components/teacherComponents/teacherHeader";
import TeacherAbout2 from "../components/teacherComponents/teacherAbout2";
import TeacherAbout from "../components/teacherComponents/teacherAbout";
function Home() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const isLoggedIn = user ? true : false;
    const isTeacher = user && user.user_role === 'teacher' ? true : false;
    return (
        <>
            {isTeacher && isLoggedIn? (

                <div style={{ marginTop: "100px" }}>
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

                <>
                    <div className="page-content bg-white">
                        <Header />
                    </div>
                    <div className="content-block">

                        <Courses />
                        <About />
                        <About2 />
                    </div>
                </>
            )}

        </>
    )

}
export default Home;