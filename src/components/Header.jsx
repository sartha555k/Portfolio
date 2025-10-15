import { motion , spring } from "framer-motion";
import { a } from "framer-motion/client";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiCode, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isopen, setIsopen] = useState(false);
  const toggle = () => setIsopen(!isopen);
  return (
    <header className="absolute w-full z-50 transition-all duration-300 ">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex 
        items-center justify-between h-16 md:h-20"
      >
        {/* logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            delay: 0.5,
            duration: 3,
          }}
          className="flex items-center"
        >
          <div
            className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 
            to-gray-300 flex items-center justify-center text-black 
            font-bold text-xl mr-3"
          >
            SP
          </div>
          <span
            className="text-xl font-bold bg-gradient-to-r 
          from-gray-100 to-gray-400 bg-clip-text text-transparent"
          >
            Sarthak Patel
          </span>
        </motion.div>

        {/* navigation for destop */}
        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item, index) => {
              return (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.7 + index * 0.2,
                  }}
                  className="relative text-gray-800 dark:text-gray-200 
              hover: via-violet-400 dark:hover:text-violet-400 font-medium
              transition-colors duration-300 group"
                  href="#"
                >
                  {item}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5
                   bg-violet-400 group-hover:w-full transition-all duration-400"
                  ></span>
                </motion.a>
              );
            }
          )}
        </nav>
        {/* desktop mode social icons  */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="h-5 w-5 text-gray-800 dark:text-gray-200 hover:text-purple-400
             dark:hover:text-purple-400 transition-colors duration-300"
            href="#"
          >
            <FiGithub />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="h-5 w-5 text-gray-800 dark:text-gray-200 hover:text-purple-400
             dark:hover:text-purple-400 transition-colors duration-300"
            href="#"
          >
            <FiLinkedin />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="h-5 w-5 text-gray-800 dark:text-gray-200 hover:text-purple-400
             dark:hover:text-purple-400 transition-colors duration-300"
            href="#"
          >
            <FiCode />
          </motion.a>

          {/* hire me button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 1.2,
              duration: 0.7,
              stiffness: 100,
              damping: 20,
            }}
            className="ml-4 px-4 py-4 rounded-lg 
        bg-gradient-to-r from-black to-gray-500 font-bold
        hover:from-violet-700 hover:to-violet-200 hover:text-black
        transition-all duration-500"
          >
            Hire Me !
          </motion.button>
        </div>

        {/* mobile menu */}
        <div className="md:hidden flex items-center">
          <motion.button
            className="text-gray-400"
            onClick={toggle}
            whileTap={{ scale: 0.7 }}
          >
            {isopen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* {mobile menu} */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isopen ? 1 : 0, height: isopen ? "auto" : 0 }}
        transition={{
          duration: 1,
          damping: 15,
        }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-800
      shadow-lg px-4 py-5 space-y-4 "
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                onClick={toggle}
                className="dark:text-gray-300 text-gray-800 font-medium"
                key={item}
                href="#"
              >
                {item}
              </a>
            )
          )}
        </nav>
        <div className="pt-4 border-t border-gray-500 dark:border-gray-400">
          <div className="flex space-x-5">
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

        <button
          onClick={() => toggle()}
          className="mt-4 block w-full px-4 py-2 rounded-lg 
        bg-gradient-to-r from via-violet-800 to-violet-500 font-bold cursor-pointer"
        >
          Contect Me
        </button>
      </motion.div>
    </header>
  );
};

export default Header;
