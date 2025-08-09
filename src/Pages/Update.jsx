import React, { useRef, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { url } from "./Home";
import { useParams, useNavigate } from "react-router";

function Update() {
  const formRef = useRef(null);
  const { user } = useContext(AuthContext);
  const { id } = useParams(); // Get artifact ID from URL
  const navigate = useNavigate(); // For redirecting after update
  const [artifact, setArtifact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtifact = async () => {
      try {
        if (!id) {
          throw new Error("No Artifact ID provided");
        }
        const response = await fetch(`${url}/artifact/${id}`, {
          headers: {
            "user-uid": user?.uid || "",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch artifact");
        }
        const data = await response.json();
        setArtifact(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.message || "Failed to fetch artifact");
        setLoading(false);
      }
    };

    if (id && user) {
      fetchArtifact();
    }
  }, [id, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get("name"),
      imageUrl: formData.get("imageUrl"),
      type: formData.get("type"),
      historicalContext: formData.get("historicalContext"),
      description: formData.get("description"),
      createdAt: formData.get("createdAt"),
      discoveredAt: formData.get("discoveredAt"),
      discoveredBy: formData.get("discoveredBy"),
      presentLocation: formData.get("presentLocation"),
      adderName: user?.displayName || "Anonymous",
      adderEmail: user?.email || "Anonymous",
    };

    try {
      const response = await fetch(`${url}/artifact/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "user-uid": user?.uid || "",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update artifact");
      }
      const result = await response.json();
      toast.success(result.message || "Artifact updated successfully!");
      navigate("/my-artifacts"); // Redirect to MyArtifacts page
    } catch (error) {
      toast.error(error.message || "Failed to update artifact");
      console.error("Error updating artifact:", error);
    }
  };

  if (loading) {
    return <div className="text-center text-xl mt-10">Loading...</div>;
  }

  if (!artifact) {
    return (
      <div className="text-center text-xl mt-10 text-red-500">
        Artifact not found
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Update Artifact</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={artifact.name || ""}
            className="mt-1  dark:text-black  block w-full rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            defaultValue={artifact.imageUrl || ""}
            className="mt-1  dark:text-black  block w-full rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Type</label>
          <select
            name="type"
            defaultValue={artifact.type || ""}
            className="mt-1 block w-full  dark:text-black  rounded-md border-gray-300 shadow-sm hover:border-[#610d99] hover:ring-[#610d99]"
            required
          >
            <option value="">Select Type</option>
            <option value="Pottery">Pottery</option>
            <option value="Sculpture">Sculpture</option>
            <option value="Tool">Tool</option>
            <option value="Jewelry">Jewelry</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">
            Historical Context
          </label>
          <textarea
            name="historicalContext"
            defaultValue={artifact.historicalContext || ""}
            className="mt-1  dark:text-black  block w-full rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            defaultValue={artifact.description || ""}
            className="mt-1  dark:text-black  block w-full rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Created At</label>
          <input
            type="date"
            name="createdAt"
            defaultValue={
              artifact.createdAt ? artifact.createdAt.split("T")[0] : ""
            }
            className="mt-1 block w-full dark:text-black  rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            required
          />
        </div>

        <div>
          <label className="block text-sm  font-medium">Discovered At</label>
          <input
            type="date"
            name="discoveredAt"
            defaultValue={
              artifact.discoveredAt ? artifact.discoveredAt.split("T")[0] : ""
            }
            className="mt-1  dark:text-black  block w-full rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Discovered By</label>
          <input
            type="text"
            name="discoveredBy"
            defaultValue={artifact.discoveredBy || ""}
            className="mt-1  dark:text-black  block w-full rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Present Location</label>
          <input
            type="text"
            name="presentLocation"
            defaultValue={artifact.presentLocation || ""}
            className="mt-1 block  dark:text-black  w-full rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full  py-2 px-4 bg-[#610d9993] text-white rounded-md hover:bg-[#610d99bd] focus:outline-none focus:ring-2 focus:ring-[#610d99]"
        >
          Update Artifact
        </button>
      </form>
    </div>
  );
}

export default Update;
