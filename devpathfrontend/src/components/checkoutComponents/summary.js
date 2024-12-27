
function Summary({ id, price }) {
    return (
        <div className="col-lg-5 col-md-4 col-sm-12 m-b30">
            <div className="course-detail-bx">
                <div className="course-price">

                    <h4 className="price"> Summary</h4>
                </div>
                <div className="course-buy-now text-center">

                </div>


                <div className="course-info-list scroll-page">
                    <ul className="navbar">
                        <li style={{ display: "flex", justifyContent: "space-between" }}>
                            <p className="mx-5">
                                Original Price
                            </p>

                            <p className="mx-5">
                                {price} JD
                            </p>
                        </li>
                        <li style={{ display: "flex", justifyContent: "space-between" }}>
                            <p className="mx-5">
                                VAT
                            </p>
                            <p className="mx-5">
                                - 16%
                            </p>
                        </li>


                        <li style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e0e0e0" }}>

                            <p className="mx-5">
                                Total Price
                            </p>
                            <p className="mx-5">
                                {(price - price * 0.16).toFixed(2)} JD
                            </p>


                        </li>
                        <li>
                            <a
                                href="#"
                                className="btn radius-xl text-uppercase mx-5"
                                style={{
                                    color: "white",
                                    textAlign: "center",
                                    display: "inline-block",
                                    width: "80%",
                                    lineHeight: "1.5",
                                }}
                            >
                                Buy This Course
                            </a>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Summary;