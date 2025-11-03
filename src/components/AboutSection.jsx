import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  useEffect(() => {
    //For-title
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: -300,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
    // Intro-animation
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(15px)" },
      {
        y: -300,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
    // return()=>{
    //   ScrollTrigger.getAll().forEach((trigger)=>{
    //     if(trigger.vars.trigger === sectionRef.current)(
    //       trigger.kill()
    //     )
    //   })
    // }
  }, []);
  return (
    <section
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-gray-600 to-black"
    >
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold 
            sm:mb-16 text-center text-white opacity-0"
        >
          About Me
        </h1>
      </div>

      <div
        ref={introRef}
        className="absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[-20rem] left-0
      w-full flex md:flex-row flex-col justify-center lg:px-24 px-5 items-center opacity-0"
      >
        <h3
          className="text-sm md:text-2xl font-semibold text-gray-300 z-50 lg:max-w-[45rem]
        max-w-[27rem] tracking-wider md:mt-20 sm:mt-[-40rem] mt-[-32rem] md:text-justify pr-9"
        >
          I’m Sarthak Patel, a Full Stack Developer skilled in React, Next.js,
          TypeScript, JavaScript, Node.js, and DevOps with hands-on experience
          in AWS. Passionate about building scalable solutions and solving
          complex challenges with strong problem-solving and analytical skills.
          Always learning, improving, and creating impactful digital
          experiences.
        </h3>
        <img
          className="lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-lighten rounded-full"
          src="images/person.png"
          alt="proflie-img"
        />
      </div>
    </section>
  );
};

export default AboutSection;
