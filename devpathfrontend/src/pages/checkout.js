import React from 'react';
import Summary from '../components/checkoutComponents/summary';
import Payment from '../components/checkoutComponents/payment';
import { useLocation } from 'react-router-dom';

function Checkout() {
    const location = useLocation();
    const { id, price } = location.state || {};

    if (!id || !price) {
        return (
            <div className="page-content bg-white mt-3">
                <div className="section-area section-sp1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2>Missing Information</h2>
                                <p>It seems like we are missing the course details. Please go back and try again.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="page-content bg-white mt-3">
                <div className="section-area section-sp1">
                    <div className="container">
                        <div className="row d-flex flex-row-reverse">
                            <Summary id={id} price={price} />
                            <Payment id={id} price={price} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
