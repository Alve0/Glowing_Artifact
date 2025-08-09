import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { url } from "./Home";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

function Details() {
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const { user } = use(AuthContext);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const fetchArtifact = async () => {
      try {
        const response = await fetch(`${url}/artifact/${id}`, {
          headers: {
            "user-uid": user?.uid || "",
          },
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch artifact");
        }

        setArtifact(data);
        setLikeCount(data.like || 0);
        setHasLiked(data.likedBy && data.likedBy.includes(user?.uid)); // Check if user has liked
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArtifact();
  }, [id, user?.uid]);

  const handleLike = async () => {
    try {
      const response = await fetch(`${url}/artifact/like/${id}`, {
        method: "PATCH",
        headers: {
          "user-uid": user?.uid || "",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to like artifact");
      }

      setLikeCount((prev) => prev + 1);
      setHasLiked(true); // Disable further likes
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  if (loading)
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  if (error)
    return <div className="text-center text-red-600 mt-10">Error: {error}</div>;
  if (!artifact)
    return <div className="text-center mt-10">No artifact found</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6  rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        {artifact.name}
      </h1>
      <img
        src={artifact.imageUrl}
        alt={artifact.name}
        className="w-full max-h-[400px] object-cover rounded-lg mb-6"
      />
      <div className="space-y-3 ">
        <p>
          <span className="font-semibold">Type:</span> {artifact.type}
        </p>
        <p>
          <span className="font-semibold">Description:</span>{" "}
          {artifact.description}
        </p>
        <p>
          <span className="font-semibold">Historical Context:</span>{" "}
          {artifact.historicalContext}
        </p>
        <p>
          <span className="font-semibold">Discovered By:</span>{" "}
          {artifact.discoveredBy}
        </p>
        <p>
          <span className="font-semibold">Discovered At:</span>{" "}
          {artifact.discoveredAt}
        </p>
        <p>
          <span className="font-semibold">Present Location:</span>{" "}
          {artifact.presentLocation}
        </p>
        <p>
          <span className="font-semibold">Added By:</span> {artifact.adderName}{" "}
          ({artifact.adderEmail})
        </p>
        <p>
          <span className="font-semibold">Created At:</span>{" "}
          {new Date(artifact.createdAt).toLocaleString()}
        </p>
        <div className="flex items-center justify-between mt-6">
          <p>
            <span className="font-semibold">Likes:</span> {likeCount}
          </p>
          <button
            onClick={handleLike}
            disabled={hasLiked} // Disable button if user has liked
            className={`px-4 py-2 rounded-lg transition ${
              hasLiked
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 text-white"
            }`}
          >
            {hasLiked ? "Liked" : "👍 Like"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
