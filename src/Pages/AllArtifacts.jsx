import React, { useState, useEffect } from "react";
import { url } from "./Home";
import Loading from "../Components/Loading";
import { Link } from "react-router";

function AllArtifacts() {
  const [artifacts, setArtifacts] = useState([]);
  const [filteredArtifacts, setFilteredArtifacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const response = await fetch(`${url}/all-artifacts`);
        if (!response.ok) {
          throw new Error("Failed to fetch artifacts");
        }
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
    setFilteredArtifacts(filtered);
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
      <div className="text-center text-xl mt-10 text-red-500 :text-red-400">
        Error: {error}
      </div>
    );
  }

  console.log(artifacts);

  return (
    <div className="min-h-screen p-6 transition-colors duration-200">
      <h1
        className="text-3xl font-bold text-center mb-4"
        style={{ color: "#610d99bd" }}
      >
        All Artifacts
      </h1>
      <div className="mb-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search artifacts by name..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#610d99bd] transition-colors duration-200"
          style={{ borderColor: "#610d99bd" }}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtifacts.length === 0 ? (
          <p className="text-center text-lg col-span-full">
            No artifacts found.
          </p>
        ) : (
          filteredArtifacts.map((artifact) => (
            <div
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
                className="text-xl font-semibold mb-2 truncate :text-white"
                style={{ color: "#610d99bd" }}
                title={artifact.name}
              >
                {artifact.name}
              </h2>
              <p className="text-gray-600  mb-2 truncate">
                <span className="font-medium">Type:</span> {artifact.type}
              </p>
              <p
                className="text-gray-600  mb-2 truncate"
                title={artifact.presentLocation}
              >
                <span className="font-medium">Present Location:</span>{" "}
                {artifact.presentLocation}
              </p>
              <p
                className="text-gray-600  mb-4 truncate"
                title={artifact.discoveredBy}
              >
                <span className="font-medium">Discovered By:</span>{" "}
                {artifact.discoveredBy}
              </p>
              <Link to={`/artifact/${artifact._id}`}>
                <button
                  className="w-full btn  py-2 px-4 rounded-md text-white font-medium transition-colors duration-200 hover:bg-[#4a0a7a]"
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

export default AllArtifacts;
