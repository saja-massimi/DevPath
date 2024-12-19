import Header from "../components/header";
import About from "../components/about";
import About2 from "../components/about2";
import Courses from "../components/courses";

function Home() {

    return (
        <>

            <div className="page-content bg-white">
                <Header />
            </div>
            <div className="content-block">
                <Courses />
                <About />
                <About2></About2>
            </div>


        </>
    )

}
export default Home;