import Img1 from '../../assets/img/cat-3.jpg';
import Img2 from '../../assets/img/cover22.jpg';
import Img3 from '../../assets/img/books.jpeg';

function WhyChoose() {

    return (

        <div className="section-area bg-gray section-sp2 choose-bx">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 heading-bx text-center">
                        <h2 className="title-head text-uppercase m-b0">
                            Why Choose <span> Our Institution</span>
                        </h2>
                        <p>
                            Discover a world of opportunities with us. We are dedicated to providing
                            unparalleled education and fostering an environment of innovation and growth.
                        </p>
                    </div>
                </div>
                <div className="row choose-bx-in">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="service-bx"> 
                            <div className="action-box">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="info-bx text-center">
                                <div className="feature-box-sm radius bg-white">
                                    <i className="fa fa-bank text-primary" />
                                </div>
                                <h4>
                                    <a href="#">Best Industry Teachers</a>
                                </h4>
                                <a href="#" className="btn radius-xl">
                                    View More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="service-bx">
                            <div className="action-box">
                                <img src={Img2} alt="" />
                            </div>
                            <div className="info-bx text-center">
                                <div className="feature-box-sm radius bg-white">
                                    <i className="fa fa-book text-primary" />
                                </div>
                                <h4>
                                    <a href="#">Learn Coding Online</a>
                                </h4>
                                <a href="#" className="btn radius-xl">
                                    View More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="service-bx m-b0">
                            <div className="action-box">
                                <img src={Img3} alt="" />
                            </div>
                            <div className="info-bx text-center">
                                <div className="feature-box-sm radius bg-white">
                                    <i className="fa fa-file-text-o text-primary" />
                                </div>
                                <h4>
                                    <a href="#">Numerous Resources </a>
                                </h4>
                                <a href="#" className="btn radius-xl">
                                    View More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default WhyChoose;