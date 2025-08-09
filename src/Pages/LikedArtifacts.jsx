import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Loading from "../Components/Loading";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { url } from "./Home";
import { motion } from "framer-motion";

function LikedArtifacts() {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = use(AuthContext);

  useEffect(() => {
    const fetchLikedArtifacts = async () => {
      try {
        const response = await fetch(`${url}/liked-artifacts`, {
          headers: {
            "user-uid": user?.uid,
            "access-token": user?.accessToken,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch liked artifacts");
        }
        const data = await response.json();
        setArtifacts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching liked artifacts:", err);
      }
    };

    fetchLikedArtifacts();
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
        My Liked Artifacts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.length === 0 ? (
          <p className="text-center text-lg col-span-full">
            No liked artifacts found.
          </p>
        ) : (
          artifacts.map((artifact) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              key={artifact._id}
              className="border rounded-lg shadow-md p-4  hover:shadow-lg transition-shadow duration-200"
            >
              {artifact.imageUrl && (
                <img
                  src={artifact.imageUrl}
                  alt={artifact.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h2
                className="text-xl font-semibold mb-2 truncate"
                style={{ color: "#610d99bd" }}
                title={artifact.name}
              >
                {artifact.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2 truncate">
                <span className="font-medium">Type:</span>{" "}
                {artifact.type || "N/A"}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 truncate">
                <span className="font-medium">Likes:</span> {artifact.like || 0}
              </p>
              <Link to={`/artifact/${artifact._id}`}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn  py-2 px-4 rounded-md text-white font-medium transition-colors duration-200 hover:bg-[#4a0a7a]"
                  style={{ backgroundColor: "#610d99bd" }}
                >
                  View Details
                </motion.button>
              </Link>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}

export default LikedArtifacts;
