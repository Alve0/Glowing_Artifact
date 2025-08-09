import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import { GiGlowingArtifact } from "react-icons/gi";
import { FaSun, FaMoon } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

function Navbar() {
  const { user, signout, setUser } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle between light/dark theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Navbar links
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-artifacts">All Artifacts</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/add-artifacts">Add Artifacts</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md z-50 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <GiGlowingArtifact size={30} />
          Glowing Artifact
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
          {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
        </button>

        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10  rounded-full">
                <img src={user.photoURL} alt="User profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="text-center font-semibold">{user.displayName}</li>
              <li>
                <Link to="/my-artifacts">My Artifacts</Link>
              </li>
              <li>
                <Link to="/liked-artifacts">Liked Artifacts</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    signout().then(() => {
                      setUser(null);
                      toast.success("Logout successful");
                    });
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn border border-purple-500 hover:bg-purple-500 hover:text-white"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn bg-purple-600 text-white hover:bg-purple-700"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
