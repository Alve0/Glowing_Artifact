import React, { use, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

function Register() {
  const [error, setError] = useState("");
  const { createUser, setUser, profileUpdate, user } = use(AuthContext);
  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(""); // reset error

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Password validation
    const upper = /[A-Z]/.test(password);
    const lower = /[a-z]/.test(password);
    const length = password.length >= 6;

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }
    if (!upper) {
      return setError("Password must include an uppercase letter.");
    }
    if (!lower) {
      return setError("Password must include a lowercase letter.");
    }
    if (!length) {
      return setError("Password must be at least 6 characters long.");
    }

    console.log({ name, photo, email, password });
    try {
      const result = await createUser(email, password);
      const user = result.user;
      setUser(user);

      await profileUpdate(name, photo);
      toast("Registration successful!");
    } catch (error) {
      console.error("An error occurred during registration:", error.message);
      setError("Registration failed: " + error.message);
      toast.error("Registration failed: " + error.message);
    }

    form.reset();
  };
  if (user != null && user.email) {
    Navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-lg w-full max-w-md shadow-lg shadow-purple-300"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 rounded bg-white"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Photo URL</label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="w-full p-2 rounded bg-white"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Gmail</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Gmail"
            className="w-full p-2 rounded bg-white"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full p-2 rounded bg-white"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter password"
            className="w-full p-2 rounded bg-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full font-bold py-2 px-4 text-white bg-[#610d9993] rounded mb-5"
        >
          Register
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <NavLink to="/login" className="underline">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Register;
