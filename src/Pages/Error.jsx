import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Error = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="min-h-screen bg-gray-100 theme-dark:bg-gray-900 flex flex-col justify-center items-center p-6 transition-colors duration-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4" style={{ color: "#610d99bd" }}>
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 theme-dark:text-white">
          Page Not Found
        </h2>
        <p className="text-gray-600 theme-dark:text-gray-300 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block py-2 px-6 rounded-md text-white font-medium transition-colors duration-200 hover:bg-[#4a0a7a]"
          style={{ backgroundColor: "#610d99bd" }}
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
