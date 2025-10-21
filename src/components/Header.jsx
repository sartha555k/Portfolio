import { motion, spring, AnimatePresence } from "framer-motion";
import { a, div } from "framer-motion/client";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiCode, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isopen, setIsopen] = useState(false);
  const toggle = () => setIsopen(!isopen);

  const [contectFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

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
            onClick={openContactForm}
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
      <AnimatePresence>
        {/* contact-form  */}

        {contectFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex 
        items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 32,
                stiffness: 200,
                duration: 1,
              }}
              className="bg-white dark:bg-gray-800 rounded-lg 
          shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-extrabold text-gray-300">
                  Get In Touch
                </h1>
                <button>
                  <FiX onClick={closeContactForm}></FiX>
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block
                 text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-600 
                 rounded-lg focus:ring-2 focus:ring-violet-500 
                 focus:border-violet-500 bg-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block
                 text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-600 
                 rounded-lg focus:ring-2 focus:ring-violet-500 
                 focus:border-violet-500 bg-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block
                 text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help you ?"
                    className="w-full px-4 py-2 border border-gray-600 
                 rounded-lg focus:ring-2 focus:ring-violet-500 
                 focus:border-violet-500 bg-gray-700"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r 
              from-violet-900 to-violet-500 rounded-lg 
              hover:from-violet-500 hover:to-violet-500
              shadow-md hover:shadow-lg hover:shadow-violet-500/50"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
