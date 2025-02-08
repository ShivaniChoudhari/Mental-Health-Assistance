import React from "react";

const RazorpayButton = ({ amount, description }) => {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_rZfdStCvfRhsxH", // Replace with your Razorpay key
      amount: 999 * 100, // Amount in paise (₹1 = 100 paise)
      currency: "INR",
      name: "MindCare",
      description: "Prioritize your well-being with MindCare—your personalized path to mental wellness. Gain access to expert guidance, stress management tools, and self-care resources designed to help you thrive. Invest in yourself today!",
      image: "https://your-logo-url.com/logo.png", // Optional
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <button className="btn btn-danger mt-2" onClick={handlePayment}>
      Buy subscription
    </button>
  );
};

export default RazorpayButton;
