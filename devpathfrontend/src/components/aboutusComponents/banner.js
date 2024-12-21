import bgImage from '../../assets/images/background/bg1.jpg';

function Banner({ title }) {
    return (

        <>
            <div
                className="page-banner ovbl-dark"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="container">
                    <div className="page-banner-entry">
                        <h1 className="text-white">{title}</h1>
                    </div>
                </div>
            </div>
            <div className="breadcrumb-row">
                <div className="container">
                    <ul className="list-inline">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>{title}</li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Banner;