import { footer } from "framer-motion/client";
import React from "react";
import { FiGithub, FiLinkedin, FiCode } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 mt-40">
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-between items-center">
          <span
            className="text-xl font-bold bg-gradient-to-r 
          from-gray-100 to-gray-400 bg-clip-text text-transparent"
          >
            Sarthak Patel
          </span>
          <div>
            <h3
              className="text-xl font-semibold mb-4 bg-gradient-to-r 
          from-gray-100 to-gray-400 bg-clip-text"
            >
              Connect
            </h3>
            <div className="flex items-center space-x-4">
              <a href="#">
                <FiGithub className="h-5 w-5 text-gray-800 dark:text-gray-300" />
              </a>
              <a href="#">
                <FiLinkedin className="h-5 w-5 text-gray-800 dark:text-gray-300" />
              </a>
              <a href="#">
                <FiCode className="h-5 w-5 text-gray-800 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-500 mt-12 pt-8 flex flex-col md:flex-row justify-between
        items-center ">
            <p className="text-gray-500 text-sm">@ Sarthak Patel. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
