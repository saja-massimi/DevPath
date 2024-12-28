import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./checkoutForm.css";
import axiosInstance from "../../api/axiosInstance";

const CheckoutForm = ({ id, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const user = JSON.parse(sessionStorage.getItem("user"));
  const authToken = sessionStorage.getItem("authToken");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setErrorMessage("Stripe is not properly initialized.");
      return;
    }

    const card = elements.getElement(CardElement);
    setIsLoading(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        setErrorMessage(error.message);
        setIsLoading(false);
        return;
      }

      const response = await fetch(`http://127.0.0.1:8000/api/transaction`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          amount: price,
          payment_method_id: paymentMethod.id,
          type: "Purchase",
          payment_status: "paid",
          user_id: user.id,
          course_id: id,
        }),
      });

      const paymentResult = await response.json();

      if (paymentResult.error) {
        setErrorMessage(paymentResult.error.message);
      } else {
        setPaymentSuccess(true);
        setErrorMessage("");

      


        //create enrollement record

        const response = await axiosInstance.post("/enrollments"
        , {
          course_id: id,
          user_id: user.id,
        }
        ).then(
          (response) => {
            console.log(response);
        }
        );

  

      }
    } catch (err) {
      setErrorMessage("An error occurred during payment processing.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="checkout-form">
      <form onSubmit={handleSubmit}>
        <div className="card-input">
          <CardElement />
        </div>
        <button
          className="btn btn-submit mt-3"
          type="submit"
          disabled={!stripe || isLoading}
        >
          {isLoading ? "Processing..." : "Pay"}
        </button>
      </form>
      {paymentSuccess && (
        <p className="success-message">Payment Successful!</p>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default CheckoutForm;
