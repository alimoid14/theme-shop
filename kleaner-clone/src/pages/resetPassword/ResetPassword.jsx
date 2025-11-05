import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { ImSpinner3 } from "react-icons/im";
function ForgotPassword() {
  const navigate = useNavigate();
  const { resetPassword, isLoading, error } = useAuthStore();
  const [password, setPassword] = React.useState("");
  const [reenterPass, setReenterPass] = React.useState("");
  const [resetSuccess, setResetSuccess] = React.useState(false);
  const { token } = useParams();
  const handleClick = async (e) => {
    e.preventDefault();
    if (password !== reenterPass) {
      alert("Passwords do not match");
      return;
    }

    try {
      await resetPassword(token, password);
      setPassword("");
      setReenterPass("");
      setResetSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
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
            Reset Password
          </h2>
        </div>
        <div className="w-[300px] p-4 sm:w-[400px] text-gray-700 bg-white/70 sm:p-8 pt-0 sm:pt-0 font-bold rounded-b-2xl rounded-r-2xl z-10">
          <form className="flex flex-col gap-4">
            <label htmlFor="password">Enter new Password:</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="border border-gray-300 outline-none hover:border-gray-400 p-2 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password_again">Re enter new Password:</label>
            <input
              name="password_again"
              type="password"
              placeholder="Re-enter Password"
              className="border border-gray-300 outline-none hover:border-gray-400 p-2 rounded-xl"
              value={reenterPass}
              onChange={(e) => setReenterPass(e.target.value)}
            />

            {resetSuccess ? (
              <p className="text-cyan-600 mb-6">
                Password reset successfully! Redirecting to login...
              </p>
            ) : (
              <button
                className="block mx-auto text-green-700 bg-green-200 border-2 border-green-600 hover:bg-green-700 hover:text-white font-bold py-2 px-4 w-full rounded-full"
                onClick={handleClick}
                disabled={isLoading}
              >
                {isLoading ? <ImSpinner3 /> : "Reset Password"}
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
