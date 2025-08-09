import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

function Login() {
  const { googleLogin, login, setUser, user } = use(AuthContext);
  const Navigate = useNavigate();
  const hendelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      login(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          toast("Login successful!");
          form.reset();
        })
        .catch((error) => {
          toast.error("Login failed: " + error.message);
        });
    } catch (error) {
      console.error("An error occurred during login:", error.message);
      toast.error("An error occurred during login: " + error.message);
    }
  };
  if (user != null && user?.email) {
    Navigate("/");
  }
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form
        onSubmit={hendelLogin}
        className="p-8 rounded-lg w-full max-w-md shadow-lg shadow-purple-300 "
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block mb-2">Gmail</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Gmail"
            className="w-full p-2 rounded bg-white "
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full p-2 rounded bg-white "
            required
          />
        </div>

        <div className="text-left">
          <Link className="underline text-sm">Forgot Password?</Link>
        </div>

        <div className="border-b-[1px] border-gray-400 mb-5">
          <button
            type="submit"
            className="w-full font-bold py-2   px-4 text-white bg-[#610d9993] rounded   mb-5"
          >
            Login
          </button>
        </div>

        <div className="text-center mb-4">
          <button
            type="button"
            onClick={() => {
              googleLogin().then((result) => {
                const user = result.user;
                setUser(user);
                toast("Google login successful!");
              });
            }}
            className="flex items-center justify-center text-white bg-[#610d9993] gap-2 w-full py-2 px-4 rounded"
          >
            <FaGoogle />
            Login with Google
          </button>
        </div>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <NavLink to="/register" className="underline ">
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Login;
