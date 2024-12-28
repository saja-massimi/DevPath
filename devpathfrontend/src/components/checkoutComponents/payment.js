import CheckoutForm from "../checkoutComponents/checkoutFrom";
import { loadStripe } from "@stripe/stripe-js"; // Load Stripe.js
import { Elements } from "@stripe/react-stripe-js"; // Stripe's React wrappe

const stripePromise = loadStripe("pk_test_51QacE7Ej0SujJLjmTdvw257qdXut2Jchu0UKgmjCz5bC2siO85MBezt1dLU2hK6VBxD5zXCzoBNEca7tMDFUCNal00lZHxWdjM");

function Payment({ id, price }) {


    const userData = JSON.parse(sessionStorage.getItem('user'));
    const userAddress = userData.address;




    return (<>
        <div className="col-lg-7 col-md-8 col-sm-12">
            <div className="courses-post">
                <div className="ttr-post-media media-effect">
                    <a href="#">

                    </a>
                </div>
                <div className="ttr-post-info">
                    <div className="ttr-post-title ">
                        <h2 className="post-title"> Checkout</h2>
                    </div>
                    <div className="ttr-post-text">
                        <p>
                            Billing Address
                        </p>




                        <input type="text" value={userAddress} readOnly />
                        <a href="/profile#edit-profile" className="btn ml-4">Change</a>
                    </div>
                </div>

                <div className="ttr-post-info">
                    <div className="ttr-post-title ">
                        <h2 className="post-title"> Payment Method</h2>
                    </div>
                    <div className="ttr-post-text">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm id={id} price={price} />
                        </Elements>
                    </div>
                </div>
            </div>




        </div>

    </>);

}

export default Payment;