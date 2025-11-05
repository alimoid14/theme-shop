import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { ImSpinner3 } from "react-icons/im";
function ForgotPassword() {
  const { forgotPassword, isLoading, error } = useAuthStore();
  const [email, setEmail] = React.useState("");
  const [linkSent, setLinkSent] = React.useState(false);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setEmail("");
      setLinkSent(true);
      alert("Link sent to your email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="h-[calc(100vh-56px)] flex justify-center items-center bg-gray-200">
      <div className="absolute rounded-2xl z-10">
        <div className="absolute w-full h-full border-2 border-dashed border-green-700 left-2 bottom-2 rounded-2xl -z-10"></div>
        <div className="flex flex-row">
          <div className="flex-1 bg-white/70 rounded-t-2xl"></div>
          <h2 className="text-center text-gray-600 text-2xl w-fit ml-auto px-4 pb-2 rounded-2xl">
            Forgot Password
          </h2>
        </div>
        <div className="w-[300px] p-4 sm:w-[400px] text-gray-700 bg-white/70 sm:p-8 pt-0 sm:pt-0 font-bold rounded-b-2xl rounded-r-2xl z-10">
          <form className="flex flex-col gap-4">
            <label htmlFor="email">Enter your email:</label>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 outline-none hover:border-gray-400 p-2 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {linkSent ? (
              <p className="text-gray-300 mb-6">
                If an account exists for {email}, you will receive a password
                reset link shortly.
              </p>
            ) : (
              <button
                className="block mx-auto text-green-700 bg-green-200 border-2 border-green-600 hover:bg-green-700 hover:text-white font-bold py-2 px-4 w-full rounded-full"
                onClick={handleClick}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="animate-spin">
                    <ImSpinner3 />
                  </div>
                ) : (
                  "Send reset link"
                )}
              </button>
            )}

            {error && <p className="text-center text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
