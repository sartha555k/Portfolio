import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const ContactSection = () => {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cleanUp = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) {
          st.kill(true);
        }
      });
    };
    cleanUp();

    //initial states !!!!
    gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" });
    gsap.set(initialTextRef.current, { opacity: 1 });
    gsap.set(finalTextRef.current, { opacity: 0 });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
      },
    });

    t1.to(
      circleRef.current,
      {
        scale: 5,
        background: "#9333EA",
        ease: "power1.inOut",
        duration: 0.5,
      },
      0
    );

    t1.to(
      initialTextRef.current,
      {
        opacity: 0,
        ease: "power1.out",
        duration: 0.2,
      },
      0.1
    );

    t1.to(
      circleRef.current,
      {
        scale: 5,
        background: "#9333EA",
        ease: "power1.inOut",
        duration: 0.5,
      },
      0
    );

    //mid ti final (second half)
    t1.to(
      circleRef.current,
      {
        scale: 17,
        backgroundColor: "#E9D5FF",
        boxShadow: "0 0 50px 20px rgba(233 , 213 , 255 , 0.3)",
        ease: "power2.inOut",
        duration: 0.8,
      },
      0.5
    );
    // fade in final text during second half
    t1.to(
      finalTextRef.current,
      {
        opacity: 1,
        ease: "power2.in",
        duration: 0.2,
      },
      0.7
    );
    return cleanUp;
  });

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center bg-gradient-to-b from-pink-700 to-black relative"
      style={{ overscrollBehavior: "none" }}
    >
      <div
        ref={circleRef}
        className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center
        relative transition-shadow duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r 
        from-violet-400 to-pink-100"
      >
        <p
          ref={initialTextRef}
          className="text-black font-bold 
            text-base sm:text-lg md:text-xl absolute inset-0 flex 
            items-center text-center"
        >
          Scroll Down
        </p>
        <div
          ref={finalTextRef}
          className="text-center relative flex flex-col
        items-center justify-center opacity"
        >
          <h1
            className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07]
            sclae-[0.07] md:font-bold text-sm sm:text-sm leading-none mb-5"
          >
            Let's Connect !
          </h1>
          <p
            className="text-black lg:w-[40rem] w-[20rem] absolute
          sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068] "
          >
            I'm always open to meaningful conversations, collaboration
            opportunities, and exciting projects. Whether you want to discuss an
            idea, need technical support, or are exploring potential
            partnerships, feel free to reach out. I value clear communication,
            professionalism, and growth-focused interactions, so let's connect
            and create something impactful together.
          </p>
          <a
            className="px-10 py-2 rounded-xl bg-black hover:bg-white hover:text-black
          transition-all duration-500 scale-[0.1] absolute sm:mt-9 mt-7 text-nowrap"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sarthak.code30@gmail.com"
            target="_blank"
          >
            <button className="">Contact Me</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
