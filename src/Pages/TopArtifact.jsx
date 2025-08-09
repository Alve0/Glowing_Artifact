import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Loading from "../Components/Loading";
import { url } from "./Home";

function TopArtifact() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopRecipes = async () => {
      try {
        const response = await fetch(`${url}/top-artifact`);
        if (!response.ok) {
          throw new Error("Failed to fetch top recipes");
        }
        const data = await response.json();
        setRecipes(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching top recipes:", err);
      }
    };

    fetchTopRecipes();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-xl mt-10">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-xl mt-10 text-red-500 dark:text-red-400">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 transition-colors duration-200">
      <h1
        className="text-3xl font-bold text-center mb-4"
        style={{ color: "#610d99bd" }}
      >
        Top 6 Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.length === 0 ? (
          <p className="text-center text-lg col-span-full">No recipes found.</p>
        ) : (
          recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
            >
              {recipe.imageUrl && (
                <img
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h2
                className="text-xl font-semibold mb-2 truncate"
                style={{ color: "#610d99bd" }}
                title={recipe.name}
              >
                {recipe.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2 truncate">
                <span className="font-medium">Type:</span>{" "}
                {recipe.type || "N/A"}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 truncate">
                <span className="font-medium">Likes:</span> {recipe.like || 0}
              </p>
              <Link to={`/artifact/${recipe._id}`}>
                <button
                  className="w-full btn py-2 px-4 rounded-md text-white font-medium transition-colors duration-200 hover:bg-[#4a0a7a]"
                  style={{ backgroundColor: "#610d99bd" }}
                >
                  View Details
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TopArtifact;
