"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { GlassCard } from "../ui/GlassCard";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const AboutMe: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ x: -300, scale: 0.8, opacity: 0, filter: "blur(15px)" }}
      whileInView={{ x: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 60,
        duration: 8,
        delay: 4,
      }}
    >
      <div className="relative perspective-[1200px] max-w-[600px] mx-auto">
        {/* FLIP CONTAINER */}
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* CARD - FRONT SIDE */}

          <GlassCard className=" flex flex-col md:flex-row items-stretch  overflow-hidden">
            {/* RIGHT SIDE - IMAGE */}
            <div
              className="relative w-full md:w-1/3 h-64 md:h-auto flex items-cen
          ter justify-end "
            >
              <Image
                src="/profile-photo-no-bg.png"
                fill
                alt="profile photo"
                className="object-contain object-right scale-x-[-1]"
              />
            </div>

            {/* RIGHT SIDE - text */}
            <div className="w-full md:w-2/3 px-6 py-4 md:px-10 md:pt-10 flex flex-col justify-center">
              <h3 className="text-lg lg:text-xl font-bold">About me</h3>
              <div className="my-3 text-sm lg:text-base">
                <p>
                  I code, design, and sometimes even translate computers into
                  human language. I specialize in frontend development, with
                  React as my daily companion.
                </p>
                {!flipped && (
                  <Button
                    onClick={() => setFlipped(!flipped)}
                    className="mt-6 w-full md:w-auto"
                  >
                    more about me
                  </Button>
                )}

                {/* BACK SIDE */}

                <AnimatePresence>
                  {flipped && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overfolw-hidden"
                    >
                      <>
                        <p className="py-6">
                          I&apos;m still new to the world of programming, but I
                          catch up quickly — and my background in design has
                          taught me that logic, aesthetics, and good structure
                          (not just in code!) are what really matter.
                        </p>

                        <Button onClick={() => setFlipped(false)}>
                          show less
                        </Button>
                      </>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
};
