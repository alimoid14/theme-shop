import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { ImSpinner3 } from "react-icons/im";
import PasswordStrengthMeter from "../../components/ui/PasswordStrengthMeter";

function Signup() {
  const navigate = useNavigate();
  const { signup, isLoading, error } = useAuthStore();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, name);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setEmail("");
    setPassword("");
    setName("");
  };
  return (
    <section className="h-[calc(100vh-56px)] flex justify-center items-center bg-gradient-to-br from-gray-800 via-blue-800 to-gray-800">
      <div className="rounded-2xl">
        <div className="flex flex-row">
          <div className="flex-1 bg-gray-900/10 rounded-t-2xl"></div>
          <h2 className="ml-auto w-fit text-white text-2xl px-4 pb-2 bg-transparent">
            SignUp here!
          </h2>
        </div>
        <div className="w-[300px] p-4 sm:w-[400px] bg-gray-900/10 text-white sm:p-8 pt-0 sm:pt-0 font-bold rounded-b-2xl rounded-r-2xl">
          {/* {
          <p>
            isAuthenticated: {isAuthenticated} user: {JSON.stringify(user)}
          </p>
        } */}
          <form className="flex flex-col gap-4">
            <label htmlFor="name" className="">
              Name:
            </label>
            <input
              type="text"
              placeholder="Name"
              className="bg-blue-900 p-2 rounded-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Email"
              className="bg-blue-900 p-2 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Password"
              className="bg-blue-900 p-2 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="block mx-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClick}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin">
                  <ImSpinner3 />
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
            {error && <p className="text-center text-red-500">{error}</p>}
            <PasswordStrengthMeter password={password} />
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-cyan-400">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
