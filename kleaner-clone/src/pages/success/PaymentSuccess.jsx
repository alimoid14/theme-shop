import React from "react";
import { useLocation } from "react-router-dom";

function PaymentSuccess() {
  const query = new URLSearchParams(useLocation().search);
  const reference = query.get("reference");
  return (
    <section className="w-full h-[calc(100vh-56px)] flex justify-center items-center">
      <div className="relative max-w-[400px] sm:max-w-[400px] rounded-xl md:max-w-[500px] bg-gray-200">
        <div className="absolute border-2 border-dashed border-amber-600 w-full h-full top-2 left-2 rounded-xl"></div>
        <h1 className="bg-white text-gray-700 w-fit font-bold py-2 px-4 text-2xl md:text-3xl">
          Payment Successful
        </h1>
        <div className="p-4 md:p-6 text-center text-gray-600">
          <p className="text-[1rem] md:text-xl">
            Thank you for your payment, your transaction was successfull!
          </p>
          <p className="text-[1rem]">
            Your payment id is: <span className="font-bold">{reference}</span>
          </p>
        </div>
        <div className="w-full h-6 flex flex-row">
          <div className="w-1/3"></div>
          <div className="flex-1 bg-white"></div>
        </div>
      </div>
    </section>
  );
}

export default PaymentSuccess;
