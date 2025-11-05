import React, { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { ImSpinner3 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
function Verify() {
  const { verifyEmail, resendOTP, isLoading, error } = useAuthStore();
  const [otp, setOtp] = useState("");
  const [resendSuccess, setResendSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await verifyEmail(otp);
      alert("Email verified successfully");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    setOtp("");
  };

  const handleResend = async (e) => {
    e.preventDefault();
    try {
      const resendSuccess = await resendOTP();
      if (resendSuccess) setResendSuccess(resendSuccess);
      alert(resendSuccess);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="h-[calc(100vh-56px)] flex justify-center items-center bg-gray-200">
      <div className="absolute rounded-2xl z-10">
        <div className="absolute h-full w-full top-2 left-2 border-2 rounded-xl border-dashed border-green-700 -z-10"></div>
        <div className="flex flex-row">
          <div className="flex-1 bg-white/70 rounded-t-2xl"></div>
          <h2 className="text-center text-gray-600 text-2xl w-fit ml-auto px-4 p-2 rounded-2xl">
            Verify here!
          </h2>
        </div>
        <div className="w-[300px] p-4 sm:w-[400px] text-gray-700 bg-white/70 sm:p-8 pt-0 sm:pt-0 rounded-b-2xl rounded-r-2xl z-10 flex flex-col gap-4">
          <p className="text-[1rem]">Enter the OTP to verify your account</p>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border-2 border-gray-300 outline-none hover:border-gray-400 px-4 py-2 rounded-md w-full"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="button"
            className="py-2 px-4 text-xl border-2 border-green-600 text-green-600 bg-green-100 hover:bg-green-600  hover:text-white rounded-full"
            onClick={handleSubmit}
          >
            {isLoading ? <ImSpinner3 className="animate-spin" /> : "Verify"}
          </button>
          {resendSuccess ? (
            <p className="text-green-600 block mx-auto font-bold">
              {resendSuccess}
            </p>
          ) : (
            <button
              type="button"
              className="text-cyan-600 block mx-auto font-bold"
              onClick={handleResend}
            >
              Request a new OTP
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Verify;
