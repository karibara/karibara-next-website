"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { GlassCard } from "../ui/GlassCard";

export const AboutMe: React.FC = () => {
  return (
    <GlassCard className="grid lg:grid-cols-3 gap-2 max-w-3xl">
      <div className="w-28 lg:w-full">
        <Image
          src="/profilePhoto.png"
          width="200"
          height="200"
          alt="profile photo"
        />
      </div>
      <div className="col-span-2">
        <h3 className="text-lg lg:text-xl font-bold">About me</h3>
        <div className="my-3 text-sm lg:text-base">
          <p>
            I code, design, and sometimes even translate computers into human
            language. I specialize in frontend development, with React as my
            daily companion. I&apos;m still new to the world of programming, but
            I catch up quickly — and my background in design has taught me that
            logic, aesthetics, and good structure (not just in code!) are what
            really matter.
          </p>
          <p className="py-6">
            My components are so well thought out they could have their own
            résumés. If a problem pops up, I’ll find a solution faster than
            Ctrl+F. And when I don’t know something, I’m not afraid to ask —
            good communication is key.
          </p>
          <p>
            Away from the screen? You’ll probably find me sketching,
            woodworking, running miles, drinking tea, or indulging in way too
            much pasta.
          </p>
          <p className="py-6">
            Always ready for new challenges—whether in code or creative
            projects!
          </p>
        </div>
        <Button>My linkedIn</Button>
      </div>
    </GlassCard>
  );
};

// I code, design, and sometimes even translate computers into human language. I specialize in frontend development, with React as my daily companion. I’m still new to the world of programming, but I catch on quickly—and my background in design has taught me that logic, aesthetics, and good structure (not just in code!) are what really matter.
// My components are so well thought out they could have their own résumés. If a problem pops up, I’ll find a solution faster than Ctrl+F. And when I don’t know something, I’m not afraid to ask—good communication is key.
// Away from the screen? You’ll probably find me sketching, woodworking, running miles, drinking tea, or indulging in way too much pasta.
// Always ready for new challenges—whether in code or creative projects!
