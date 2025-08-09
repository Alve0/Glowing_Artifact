import React, { use, useRef } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { url } from "./Home";

function AddArtifact() {
  const formRef = useRef(null);

  // Assuming these are passed from a parent component or context
  const { user } = use(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const form = e.target;
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
      like: 0,
      adderName: user?.displayName || "Anonymous",
      adderEmail: user?.email || "Anonymous",
    };

    try {
      const response = await fetch(`${url}/add-artifact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "user-uid": user?.uid,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add artifact");
      }
      const result = await response.json();
      console.log("Artifact added successfully:", result);
      toast.success("Artifact added successfully!");
      form.reset();
    } catch (error) {
      toast.error(error.message || "Failed to add artifact");
      console.error("Error adding artifact:", error);
    }

    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto p-6  shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 ">Add New Artifact</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium ">Name</label>
          <input
            type="text"
            name="name"
            className="mt-1  dark:text-black  block w-full rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            className="mt-1 block  dark:text-black  w-full rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Type</label>
          <select
            name="type"
            className="mt-1  dark:text-black  block w-full rounded-md border-gray-300 shadow-sm hover:border-[#610d99] hover:ring-[#610d99]"
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
          <label className="block text-sm font-medium ">
            Historical Context
          </label>
          <textarea
            name="historicalContext"
            className="mt-1  dark:text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Description</label>
          <textarea
            name="description"
            className="mt-1 dark:text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Created At</label>
          <input
            type="date"
            name="createdAt"
            className="mt-1 dark:text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Discovered At</label>
          <input
            type="date"
            name="discoveredAt"
            className="mt-1 block  dark:text-black  w-full rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Discovered By</label>
          <input
            type="text"
            name="discoveredBy"
            className="mt-1 block w-full  dark:text-black  rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Present Location</label>
          <input
            type="text"
            name="presentLocation"
            className="mt-1 block w-full  dark:text-black  rounded-md border-gray-300 shadow-sm focus:border-[#610d99] focus:ring-[#610d99]"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#610d9993] text-white rounded-md hover:bg-[#610d99bd] focus:outline-none focus:ring-2 focus:ring-[#610d99]"
        >
          Add Artifact
        </button>
      </form>
    </div>
  );
}

export default AddArtifact;
