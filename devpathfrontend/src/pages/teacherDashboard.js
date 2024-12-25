import SideBar from '../components/teacherDashboardComponents/sideBar';
import Banner from '../components/aboutusComponents/banner';

function TeacherDashboard() {

    return (
        <div className="page-content bg-white">

            <Banner title="Teacher Dashboard" />
            <SideBar />


        </div>
    );
}

export default TeacherDashboard;