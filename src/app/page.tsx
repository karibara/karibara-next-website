import { AboutMe } from "@/components/sections/AboutMe";
import { Skills } from "@/components/sections/Skills";
import { SocialMediaLinks } from "@/components/sections/SocialMediaLinks";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  pt-20 font-[family-name:var(--font-comfortaa-sans)]">
      <main className="flex flex-col gap-16 items-center ">
        {/* HASH PATTERN */}
        {/* <Image
            src="/hash-pattern.svg"
            alt="hash pattern"
            width={360}
            height={360}
            className="absolute top-20 -right-16 -z-10 "
          /> */}

        {/* WAVE PATTERN */}
        {/* <Image
            src="/waves.svg"
            alt="waves pattern"
            width={156}
            height={58}
            className="absolute top-[8rem] lg:top-[11em] scale-75 lg:scale-100 -left-14 -z-10 "
          /> */}

        {/* WELCOME SECTION */}
        <WelcomeSection />

        {/* ABOUT ME */}

        <AboutMe />
        {/* SKILLS */}
        <Skills />

        {/* SOCIAL MEDIA LINKS */}
        <div className="bg-white/20 py-20 my-10 relative">
          {/* hash pattern */}
          <Image
            src="/hash-pattern.svg"
            alt="hash pattern"
            width={360}
            height={360}
            className="absolute top-0 -left-20 -z-10 rotate-90"
          />
          <SocialMediaLinks />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
