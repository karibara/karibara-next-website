"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { GlassCard } from "../ui/GlassCard";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const AboutMe: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ x: 300, scale: 0.8, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 65,
        duration: 12,
        delay: 2,
      }}
    >
      <GlassCard className="md:grid md:grid-cols-3 gap-2 max-w-[698px] ">
        <div className="hidden md:block pt-10 pl-10">
          <Image
            src="/profile-photo-circle.png"
            width="200"
            height="200"
            alt="profile photo"
          />
        </div>
        <div className="w-full col-span-full relative aspect-[16/9] overflow-hidden rounded-t-3xl md:hidden">
          <Image
            src="/profile-photo-horizontal.jpg"
            layout="fill"
            alt="profile photo"
            className="rounded-t-3xl object-contain"
          />
        </div>
        <div className="col-span-2 px-6 py-4 md:px-10 md:pt-10">
          <h3 className="text-lg lg:text-xl font-bold">About me</h3>
          <div className="my-3 text-sm lg:text-base">
            <p>
              I code, design, and sometimes even translate computers into human
              language. I specialize in frontend development, with React as my
              daily companion. I&apos;m still new to the world of programming,
              but I catch up quickly — and my background in design has taught me
              that logic, aesthetics, and good structure (not just in code!) are
              what really matter.
            </p>
            {!expanded && (
              <Button
                onClick={() => setExpanded(!expanded)}
                className="mt-6 w-full md:w-auto"
              >
                more about me
              </Button>
            )}

            {/* EXPANDED TEXT about me*/}
            <AnimatePresence>
              {expanded && (
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
                      My components are so well thought out they could have
                      their own résumés. If a problem pops up, I’ll find a
                      solution faster than Ctrl+F. And when I don’t know
                      something, I’m not afraid to ask — good communication is
                      key.
                    </p>
                    <p>
                      Away from the screen? You’ll probably find me sketching,
                      woodworking, running miles, drinking tea, or indulging in
                      way too much pasta.
                    </p>
                    <p className="py-6">
                      Always ready for new challenges—whether in code or
                      creative projects!
                    </p>
                    <Button onClick={() => setExpanded(false)}>
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
  );
};
