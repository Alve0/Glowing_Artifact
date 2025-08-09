import React, { useEffect, useState } from "react";
import {
  FaGlobeAfrica,
  FaArrowRight,
  FaClipboardCheck,
  FaConnectdevelop,
} from "react-icons/fa";

function AboutUs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const image =
    "https://media-cdn.tripadvisor.com/media/photo-s/0d/00/7e/20/national-art-glass-gallery.jpg";

  const image2 =
    "https://media-cdn.tripadvisor.com/media/photo-s/09/21/b5/18/national-art-glass-collection.jpg";

  const image3 =
    "https://media-cdn.tripadvisor.com/media/photo-s/0d/00/7e/43/national-art-glass-gallery.jpg";

  const fadeInLeft = mounted
    ? "opacity-100 translate-x-0"
    : "opacity-0 -translate-x-12";
  const fadeInRight = mounted
    ? "opacity-100 translate-x-0"
    : "opacity-0 translate-x-12";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mt-10 sm:mt-16 mb-8 sm:mb-12">
        About Us
      </h3>

      {/* Section 1 */}
      <div
        className={`flex flex-col lg:flex-row justify-between items-center mt-8 sm:mt-12 shadow-lg p-4 sm:p-6 rounded-lg  transform transition duration-700 ease-out ${fadeInLeft}`}
      >
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden mb-4 lg:mb-0">
          <img
            className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
            src={image}
            alt="Global artifacts"
          />
        </div>
        <div className="w-full lg:w-1/2 px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <FaGlobeAfrica size={36} className="text-purple-600" />
            <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl my-4">
              Artifacts from Every Corner of the Globe
            </h3>
          </div>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 font-light leading-relaxed">
            Discover treasures from diverse cultures, curated to bring the
            world’s history to your fingertips. Each artifact tells a story of
            civilization, tradition, and legacy.
          </p>
          <button className="flex items-center bg-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-purple-600 transition-colors duration-300">
            Learn More
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className={`flex flex-col-reverse lg:flex-row justify-between items-center mt-8 sm:mt-12 shadow-lg p-4 sm:p-6 rounded-lg  transform transition duration-700 ease-out ${fadeInRight}`}
      >
        <div className="w-full lg:w-1/2 px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <FaConnectdevelop size={36} className="text-purple-600" />
            <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl my-4">
              Global Access & Cultural Connection
            </h3>
          </div>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 font-light leading-relaxed">
            Whether you're a researcher, collector, or enthusiast — explore
            artifacts online from anywhere. Connect with the world’s heritage in
            one place.
          </p>
          <button className="flex items-center bg-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-purple-600 transition-colors duration-300">
            Learn More
            <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden mb-4 lg:mb-0">
          <img
            className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
            src={image2}
            alt="Cultural connection"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div
        className={`flex flex-col lg:flex-row justify-between items-center mt-8 sm:mt-12 shadow-lg p-4 sm:p-6 rounded-lg  transform transition duration-700 ease-out ${fadeInLeft}`}
      >
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden mb-4 lg:mb-0">
          <img
            className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
            src={image3}
            alt="Authenticated artifacts"
          />
        </div>
        <div className="w-full lg:w-1/2 px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <FaClipboardCheck size={36} className="text-purple-600" />
            <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl my-4">
              Authentic & Verified Pieces
            </h3>
          </div>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 font-light leading-relaxed">
            Every item is carefully sourced and authenticated by experts. We
            ensure historical accuracy and cultural respect in every collection
            we share.
          </p>
          <button className="flex items-center bg-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-purple-600 transition-colors duration-300">
            Learn More
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
