import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function ConnectUs() {
  return (
    <div>
      <div className="my-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-center my-6 sm:my-8">
          Connect with Us
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          <div className="items-center p-4 sm:p-6 cursor-pointer shadow-lg shadow-purple-300 rounded-lg flex flex-col justify-center hover:-translate-y-4 transition-transform duration-300 ease-in-out">
            <FaFacebook size={40} className="sm:w-[55px] sm:h-[55px]" />
            <h3 className="font-bold text-lg sm:text-2xl text-center mt-2">
              Facebook
            </h3>
          </div>

          <div className="items-center p-4 sm:p-6 cursor-pointer shadow-lg shadow-purple-300 rounded-lg flex flex-col justify-center hover:-translate-y-4 transition-transform duration-300 ease-in-out">
            <FaGoogle size={40} className="sm:w-[55px] sm:h-[55px]" />
            <h3 className="font-bold text-lg sm:text-2xl text-center mt-2">
              Google
            </h3>
          </div>

          <div className="items-center p-4 sm:p-6 cursor-pointer shadow-lg shadow-purple-300 rounded-lg flex flex-col justify-center hover:-translate-y-4 transition-transform duration-300 ease-in-out">
            <FaInstagram size={40} className="sm:w-[55px] sm:h-[55px]" />
            <h3 className="font-bold text-lg sm:text-2xl text-center mt-2">
              Instagram
            </h3>
          </div>

          <div className="items-center p-4 sm:p-6 cursor-pointer shadow-lg shadow-purple-300 rounded-lg flex flex-col justify-center hover:-translate-y-4 transition-transform duration-300 ease-in-out">
            <FaYoutube size={40} className="sm:w-[55px] sm:h-[55px]" />
            <h3 className="font-bold text-lg sm:text-2xl text-center mt-2">
              Youtube
            </h3>
          </div>

          <div className="items-center p-4 sm:p-6 cursor-pointer shadow-lg shadow-purple-300 rounded-lg flex flex-col justify-center hover:-translate-y-4 transition-transform duration-300 ease-in-out">
            <FaXTwitter size={40} className="sm:w-[55px] sm:h-[55px]" />
            <h3 className="font-bold text-lg sm:text-2xl text-center mt-2">
              X
            </h3>
          </div>

          <div className="items-center p-4 sm:p-6 cursor-pointer shadow-lg shadow-purple-300 rounded-lg flex flex-col justify-center hover:-translate-y-4 transition-transform duration-300 ease-in-out">
            <FaLinkedin size={40} className="sm:w-[55px] sm:h-[55px]" />
            <h3 className="font-bold text-lg sm:text-2xl text-center mt-2">
              Linkedin
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectUs;
