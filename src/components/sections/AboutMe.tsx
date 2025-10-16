"use client";

import Image from "next/image";
import { Button } from "../ui/button";
// import { motion } from "framer-motion";

export const AboutMe: React.FC = () => {
  return (
    // <motion.div
    //   initial={{ scale: 1, opacity: 1, filter: "blur(15px)" }}
    //   whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
    //   transition={{
    //     type: "spring",
    //     stiffness: 80,
    //     damping: 60,
    //     duration: 8,
    //     delay: 4,
    //   }}
    // >
    <div className="relative max-w-[654px] mx-auto ">
      <div className=" grid grid-cols-2 items-center relative">
        {/* IMAGE - mobile */}
        <div className="order-1 md:order-2 relative flex  justify-end overflow-visible">
          <div className="relative w-64 h-72 md:w-[380px] md:h-[420px] overflow-visible">
            <Image
              src="/profile-photo-no-bg.png"
              alt="profile photo"
              fill
              className="object-contain -scale-x-[1.25] scale-y-[1.25] md:-scale-x-[1.5] md:scale-y-[1.5] -translate-y-10 lg:translate-x-16    z-10 pointer-events-none select-none"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="order-2 md:order-1 relative z-20  p-6 md:pl-10  md:-mr-10">
          <h3 className="text-lg lg:text-xl font-bold mb-3">About me</h3>
          <p className="text-sm lg:text-base">
            I code, design, and sometimes even translate computers into human
            language. I specialize in frontend development, with React as my
            daily companion.
          </p>
          <Button className="mt-6 w-full md:w-auto">contact me</Button>
        </div>
      </div>
    </div>
    // </motion.div>
  );
};
