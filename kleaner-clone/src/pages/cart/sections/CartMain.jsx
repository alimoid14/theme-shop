import React from "react";
import { useCart } from "../../../context/useContext";
import ThemeCard from "../../../components/ui/ThemeCard";
import { themes } from "../../../data/themes";
import { useAuthStore } from "../../../store/authStore";
import { useNavigate } from "react-router-dom";

function CartMain() {
  const { isAuthenticated, user } = useAuthStore();
  const { state, totalCost, dispatch } = useCart();
  const list = state.items;
  const navigate = useNavigate();
  const API_URL =
    import.meta.env.MODE === "development"
      ? "http://localhost:3000/api/payment/"
      : "/api/payment/";
  // const handleSubmit = () => {
  //   const success = Math.random() > 0.5;
  //   if (success) {
  //     dispatch({ type: "CLEAR_CART" });
  //     alert("Success!");
  //   } else {
  //     alert("Failed!");
  //   }
  // };
  const handleSubmit = async (totalCost) => {
    const keyResponse = await fetch(API_URL + "key", {
      credentials: "include",
    });
    const { key } = await keyResponse.json();

    console.log(key);
    const orderResponse = await fetch(API_URL, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalCost }),
    });
    const { order } = await orderResponse.json();
    console.log(order);
    const options = {
      key: key,
      amount: order.amount,
      currency: "INR",
      name: "My theme shop clone",
      description: "Razorpay Test Transaction",
      order_id: order.id,

      // Razorpay calls this handler on successful payment
      handler: async function (response) {
        //console.log("Payment successful:", response);

        try {
          // 🔹 Verify payment with your backend manually
          const verify = await fetch(API_URL + "verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const result = await verify.json();

          if (result.success) {
            alert("Payment successful!");
            // Navigate to success page (React Router)
            navigate(`/success?reference=${response.razorpay_payment_id}`, {
              replace: true,
            });
            dispatch({ type: "CLEAR_CART" });
          } else {
            alert("Payment verification failed!");
          }
        } catch (err) {
          console.error("Error verifying payment:", err);
          alert("Something went wrong while verifying payment!");
        }
      },

      prefill: {
        name: "Rover",
        email: "arbiter@example.com",
        contact: "9999999999",
      },

      theme: {
        color: "#1D4A8B",
      },
    };

    // const options = {
    //   key: key,
    //   amount: order.amount,
    //   currency: "INR",
    //   name: "My theme shop clone",
    //   description: "Razorpay Test Transaction, Payment gateway integration",
    //   order_id: order.id,
    //   //callback_url: API_URL + "verify", // Your success URL
    //   prefill: {
    //     name: "Rover",
    //     email: "arbiter@example.com",
    //     contact: "9999999999",
    //   },
    //   theme: {
    //     color: "#1D4A8B",
    //   },
    // };

    const rzp = new window.Razorpay(options);
    rzp.open();
    //dispatch({ type: "CLEAR_CART" });
  };
  return (
    <section className="mb-24">
      {list.length > 0 ? (
        <>
          <div className="max-w-[1400px] mx-auto py-8 px-4 lg:px-6 lg:py-12 ]">
            {list.map((item) => (
              <div key={item.id} className="">
                <ThemeCard
                  {...themes.find((theme) => theme.name === item.id)}
                  variant="theme-cart"
                />
              </div>
            ))}
          </div>
          <div className="w-full max-w-[1400px] text-xl flex flex-col gap-2 px-4 lg:px-6 mx-auto">
            <span className="font-bold">Total:</span>
            <div className="grid grid-cols-4 gap-4 justify-between font-bold">
              <span>Item name</span>
              <span>Quantity</span>
              <span>Price</span>
              <span>Subtotal</span>
            </div>
            {list.map((item) => (
              <div className="grid grid-cols-4 gap-4 justify-between text-[1rem]">
                <span className="truncate">{item.id}</span>
                <span>{item.count}</span>
                <span>{item.price}$</span>
                <span>{item.count * item.price}$</span>
              </div>
            ))}
            <div className="w-full border-2 border-black"></div>
            <div className="grid grid-cols-4 gap-4 justify-between">
              <span>Total Cost</span>
              <span></span>
              <span></span>
              <span>{totalCost}$</span>
            </div>
          </div>

          {isAuthenticated && user.isVerified && (
            <div className="max-w-[1400px] px-4 lg:px-6 mx-auto my-12">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded block ml-auto"
                onClick={() => handleSubmit(totalCost)}
                disabled={!isAuthenticated || !user.isVerified}
              >
                Checkout
              </button>
            </div>
          )}

          {!isAuthenticated && (
            <div className="w-fit max-w-[1400px] my-12 mx-4 md:mx-auto md:self-end">
              <p className="text-gray-400 font-bold text-xl">
                Please login or create and account to checkout
              </p>
            </div>
          )}
          {isAuthenticated && !user.isVerified && (
            <div className="w-fit max-w-[1400px] my-12 mx-4 md:mx-auto md:self-end">
              <p className="text-gray-400 font-bold text-xl">
                Please verify your email to checkout
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold h-[50vh] flex justify-center items-center">
          <h1
            className="max-w-[300
        px] md:max-w-[450px] lg:max-w-[500px] text-gray-400 text-center"
          >
            OOPS! The cart is empty!
          </h1>
        </div>
      )}
    </section>
  );
}

export default CartMain;
