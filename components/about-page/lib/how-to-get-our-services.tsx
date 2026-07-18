import React from "react";
import Image from "next/image";
import { our_processes } from "@/lib/constants";
import { useAnimation, useInView, motion, useReducedMotion } from "motion/react";

const HowToGetOurServices = () => {
  const shouldReduceMotion = useReducedMotion();
  const motionInitial = shouldReduceMotion ? "visible" : "hidden";
  const processRef = React.useRef(null);
  const processInView = useInView(processRef, { once: true });
  const processControls = useAnimation();

  React.useEffect(() => {
    if (processInView) {
      processControls.start("visible");
    }
  }, [processInView, processControls]);
  return (
    <div
      ref={processRef}
      className="py-20 page-x"
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={motionInitial}
        animate={processControls}
        transition={{ duration: 1.5 }}
        className="text-brand text-center text-xs md:text-sm uppercase font-bold mb-2"
      >
        Our Process
      </motion.p>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={motionInitial}
        animate={processControls}
        transition={{ duration: 2.5 }}
        className="md:text-6xl text-3xl font-bold text-monochrome text-center capitalize mb-16"
      >
        Here&apos;s how to get our services
      </motion.h2>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={motionInitial}
        animate={processControls}
        transition={{ duration: 3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {our_processes.map((process, index) => (
          <div
            key={index}
            className="flex justify-center flex-col items-center"
          >
            <div className="h-10 w-10 bg-brand/90 rounded-lg border-b-brand/10 flex justify-center items-center font-bold mb-8 text-white">
              0{index + 1}
            </div>
            <div className="md:w-[320px] w-full h-[320px] border border-b-brand/70 border-b-4  px-4 py-4 shadow-lg rounded-md hover:-translate-y-3 transition ">
              <div className="flex justify-center my-4">
                <div className="h-10 w-10 relative">
                  <Image
                    src={process.image}
                    alt={process.title}
                    fill
                    className="absolute object-cover"
                  />
                </div>
              </div>
              <h3 className="text-brand text-center font-bold text-xl mb-3">
                {process.title}
              </h3>
              <p className="text-base text-center">{process.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HowToGetOurServices;
