import Img from '../assets/images/background/bg2.jpg';
import Img2 from '../assets/img/logo-devpath.png';
function NotFound() {

    return (<div className="page-wraper">

        <div className="account-form">
            <div
                className="account-head"
                style={{ backgroundImage: `url(${Img})` }}
            >
                <a href="index.html">
                    <img src={Img2} alt="" />
                </a>
            </div>
            <div className="account-form-inner">
                <div className="account-container">
                    <div className="error-page">
                        <h3>Ooopps :(</h3>
                        <h2 className="error-title">404</h2>
                        <h5>The Page you were looking for, couldn't be found.</h5>
                        <p>
                            The page you are looking for might have been removed, had its name
                            changed, or is temporarily unavailable.
                        </p>
                        <div className="">

                            <a href="/" className="btn outline black">
                                Back To Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );

}
export default NotFound;