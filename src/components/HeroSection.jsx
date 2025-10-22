import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section
      className="h-screen bg-gradient-to-b from-black to-gray-600
     flex xl:flex-row flex-col-reverse items-center justify-between
     lg:px-24 px-10 relative overflow-hidden"
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.5,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl 
            lg:text-8xl font-bold z-10 mb-6"
        >
          Lorem ipsum dolor <br /> sit amet.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl md:text-1xl lg:text-2xl text-gray-400"
        >
          Lorem ipsum dolor sit amet consectetur, <br />
          adipisicing elit. Tenetur, debitis est, excepturi sint asperiores{" "}
          <br />
          maiores corporis, quam explicabo quidem fugiat dolores officia eaque
          vero quasi?
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
