import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { ImSpinner3 } from "react-icons/im";

function Login() {
  const navigate = useNavigate();
  const { login, isLoading, error } = useAuthStore();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <section className="h-[calc(100vh-56px)] flex justify-center items-center bg-gradient-to-br from-gray-800 via-blue-800 to-gray-800">
      <div className="rounded-2xl">
        <div className="flex flex-row">
          <div className="flex-1 bg-gray-900/10 rounded-t-2xl"></div>
          <h2 className="text-center text-white text-2xl w-fit ml-auto px-4 pb-2 rounded-2xl">
            Login here!
          </h2>
        </div>
        <div className="w-[300px] p-4 sm:w-[400px] text-white bg-gray-900/10 sm:p-8 pt-0 sm:pt-0 font-bold rounded-b-2xl rounded-r-2xl">
          <form className="flex flex-col gap-4">
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
                "Login"
              )}
            </button>

            {error && <p className="text-center text-red-500">{error}</p>}
            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-cyan-400">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
