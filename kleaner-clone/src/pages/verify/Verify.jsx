import React, { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { ImSpinner3 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
function Verify() {
  const { verifyEmail, isLoading, error } = useAuthStore();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await verifyEmail(otp);
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    setOtp("");
  };
  return (
    <section className="flex justify-center items-center bg-gray-200 h-[calc(100vh-56px)]">
      <div className="w-96 h-76 rounded-xl relative">
        <div className="absolute h-full w-full top-4 left-4 border-2 rounded-xl border-dashed border-green-700 z-0"></div>
        <div className="w-96 h-76 flex flex-col gap-6 p-6 md:p-12 absolute bg-white/70 z-10 rounded-xl">
          <h1 className="text-2xl">Verify your account</h1>
          <p className="text-[1rem]">Enter the OTP to verify your account</p>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border-2 border-gray-300 outline-none hover:border-gray-400 px-4 py-2 rounded-md w-full"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            className="py-2 px-4 text-xl border-2 border-green-600 text-green-600 bg-green-100 hover:bg-green-600  hover:text-white rounded-full"
            onClick={handleSubmit}
          >
            {isLoading ? <ImSpinner3 className="animate-spin" /> : "Verify"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Verify;
