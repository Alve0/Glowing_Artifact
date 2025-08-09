import React, { useState, useEffect } from "react";
import { url } from "./Home";
import Loading from "../Components/Loading";
import { Link } from "react-router";
import { motion } from "framer-motion";

function AllArtifacts() {
  const [artifacts, setArtifacts] = useState([]);
  const [filteredArtifacts, setFilteredArtifacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState(""); // NEW state for sorting
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const response = await fetch(`${url}/all-artifacts`);
        if (!response.ok) throw new Error("Failed to fetch artifacts");

        const data = await response.json();
        setArtifacts(data);
        setFilteredArtifacts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArtifacts();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = artifacts.filter((artifact) =>
      artifact.name.toLowerCase().includes(term)
    );
    setFilteredArtifacts(sortArtifacts(filtered, sortOption)); // Keep sorting applied
  };

  // Handle sorting change
  const handleSort = (e) => {
    const option = e.target.value;
    setSortOption(option);
    setFilteredArtifacts(sortArtifacts(filteredArtifacts, option));
  };

  // Sorting logic
  const sortArtifacts = (list, option) => {
    const sorted = [...list];
    switch (option) {
      case "name-asc":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case "price-asc":
        return sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
      case "price-desc":
        return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
      default:
        return sorted;
    }
  };

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
        All Artifacts
      </h1>

      {/* Search + Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search artifacts by name..."
          value={searchTerm}
          onChange={handleSearch}
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#610d99bd] transition-colors duration-200"
          style={{ borderColor: "#610d99bd" }}
        />
        <select
          value={sortOption}
          onChange={handleSort}
          className="p-3 pr-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#610d99bd] min-w-[150px]"
          style={{ borderColor: "#610d99bd" }}
        >
          <option value="">Sort By</option>
          <option value="name-asc" className="p-2">
            Name: A → Z
          </option>
          <option value="name-desc" className="p-2 my-2">
            Name: Z → A
          </option>
        </select>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtifacts.length === 0 ? (
          <p className="text-center text-lg col-span-full">
            No artifacts found.
          </p>
        ) : (
          filteredArtifacts.map((artifact) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              key={artifact._id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
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
              <p className="text-gray-600 mb-2 truncate">
                <span className="font-medium">Type:</span> {artifact.type}
              </p>
              <p
                className="text-gray-600 mb-2 truncate"
                title={artifact.presentLocation}
              >
                <span className="font-medium">Present Location:</span>{" "}
                {artifact.presentLocation}
              </p>
              <p
                className="text-gray-600 mb-4 truncate"
                title={artifact.discoveredBy}
              >
                <span className="font-medium">Discovered By:</span>{" "}
                {artifact.discoveredBy}
              </p>
              <Link to={`/artifact/${artifact._id}`}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 px-4 rounded-md text-white font-medium transition-colors duration-200 hover:bg-[#4a0a7a]"
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

export default AllArtifacts;
