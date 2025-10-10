"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export const AboutMe: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 1, opacity: 1, filter: "blur(15px)" }}
      whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 60,
        duration: 8,
        delay: 4,
      }}
    >
      <div className="relative max-w-[654px] mx-auto">
        <div className=" flex flex-col md:flex-row items-stretch  overflow-hidden">
          {/* text */}
          <div className="w-full md:w-2/3 px-6 py-4 md:px-10 md:pt-10 flex flex-col justify-center">
            <h3 className="text-lg lg:text-xl font-bold">About me</h3>
            <div className="my-3 text-sm lg:text-base">
              <p>
                I code, design, and sometimes even translate computers into
                human language. I specialize in frontend development, with React
                as my daily companion.
              </p>

              <Button className="mt-6 w-full md:w-auto">contact me</Button>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="relative w-full md:w-1/3 h-64 md:h-auto flex items-cen
          ter justify-end "
          >
            <Image
              src="/profile-photo-no-bg.png"
              fill
              alt="profile photo"
              className="object-contain object-right "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
