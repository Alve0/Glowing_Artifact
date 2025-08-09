// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-6"
        >
          About Historical Artifacts Tracker
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 leading-relaxed mb-10 text-center"
        >
          The Historical Artifacts Tracker is a web application designed to help
          history enthusiasts, researchers, and the curious explore and preserve
          records of the world’s most significant historical artifacts. From the
          Rosetta Stone to the Antikythera Mechanism, our platform allows users
          to browse, learn, and contribute to a growing digital archive.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white rounded-xl shadow-md border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to make history accessible and engaging by creating a
              platform where users can not only learn about historical artifacts
              but also contribute their knowledge and discoveries to a global
              community.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white rounded-xl shadow-md border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Browse and search historical artifacts</li>
              <li>View detailed artifact information</li>
              <li>Add your own artifact entries</li>
              <li>Like and track your favorite artifacts</li>
              <li>Secure authentication and private routes</li>
              <li>Fully responsive design for all devices</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700">
            Whether you’re a student, researcher, or just someone fascinated by
            history, the Historical Artifacts Tracker is here to help you
            discover and share the treasures of the past.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
