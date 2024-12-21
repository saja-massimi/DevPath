import Achievments from "../components/aboutusComponents/achievments";
import Banner from "../components/aboutusComponents/banner";
import CompanyStats from "../components/aboutusComponents/companyStats";
import OurStory from "../components/aboutusComponents/ourStory";
import WhyChoose from "../components/aboutusComponents/whyChoose";
function AboutUs() {

    return (
        <div className="page-content bg-white">

            <Banner title="About Us" />

            <div className="content-block">
                <Achievments />
                <WhyChoose />
                <CompanyStats />
                <OurStory />
            </div>
        </div>
    )
}

export default AboutUs;