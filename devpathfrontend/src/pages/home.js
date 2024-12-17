import Header from "../components/header";
import Services from "../components/services";
import About from "../components/about";
import Categories from "../components/categories";
import Courses from "../components/courses";

function Home() {

    return (
        <>

            <div class="page-content bg-white">
                <Header />
            </div>
            <div class="content-block">
                <Courses />

            </div>


        </>
    )

}
export default Home;