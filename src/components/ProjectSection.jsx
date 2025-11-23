import { div, section, title } from "framer-motion/client";
import React, { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";

//project-array

const projectImage = [
  {
    id: 1,
    title: "Dev-Tinder",
    imageSrc: "/images/project-5.png",
  },
  {
    id: 2,
    title: "Ink.AI",
    imageSrc: "/images/project-6.png",
  },
  {
    id: 3,
    title: "Urban-Miles",
    imageSrc: "/images/project-7.png",
  }
];

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const titleLineRef = useRef(null);
  const titleRef = useRef(null);
  const horizontalRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // title
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // title line
    gsap.fromTo(
      titleLineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        duration: 1.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    //section entrance effect
    gsap.fromTo(
      triggerRef.current,
      {
        opacity: 0,
        y: 100,
        rotationX: 20,
      },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    //parallex effect
    gsap.fromTo(
      sectionRef.current,
      {
        backgroundPosition: "50% 0%",
      },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top ",
          scrub: true,
        },
      },
      {}
    );

    //horizontal-scrolling
    const horizontalScroll = gsap.to(".panel", {
      xPercent: -100 * (projectImage.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current.offsetWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projectImage.length - 1),
          duration: { main: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    });

    //Image animation
    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel) => {
      const image = panel.querySelector(".project-image");
      const imageTitle = panel.querySelector(".project-title");

      //timeline for each panel !!!
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      });

      tl.fromTo(
        image,
        { scale: 0, rotate: -20 },
        { scale: 1, rotate: 1, duration: 0.5 }
      );

      if (imageTitle) {
        tl.fromTo(imageTitle, { y: 30 }, { y: -100, duration: 0.3 }, 0.2);
      }
    });
  }, []);
  return (
    <div id="projects">
      <section
        ref={sectionRef}
        id="horizontal-scrolling"
        className="relative py-20 bg-gradient-to-b from-black to-pink-700 overflow-hidden"
      >
        <div className="container mx-auto px-4 mb-16 relative z-10 ">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 
            text-center mb-4 opacity-0"
          >
            Featured Projects
          </h2>
          <div
            ref={titleLineRef}
            className="w-0 h-1 bg-pink-500 mx-auto opacity-0"
          ></div>
        </div>
        {/* // horizontal-scroll-area */}
        <div ref={triggerRef} className="overflow-hidden opacity-0">
          <div
            ref={horizontalRef}
            className="horizontal-section flex md:w-[400%] w-[420%] "
          >
            {projectImage.map((project) => (
              <div
                //   Loading
                key={project.id}
                className="panel relative flex items-center 
                justify-center "
              >
                <div
                  className="relative w-full h-full flex flex-col items-center justify-center
                    p-4 sm:p-8 md:p-12 "
                >
                  <img
                    className="project-image max-w-full max-h-full rounded-2xl object-cover"
                    src={project.imageSrc}
                    alt="Project-img"
                  />
                  <h2
                    className="project-title flex items-center gap-3 md:text-3xl 
                text-sm md:font-bold text-white mt-6 z-50 text-nowrap hover:text-gray-400
                transition-colors duration-300 cursor-pointer "
                  >
                    {project.title} <SlShareAlt />
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
