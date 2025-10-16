import { AboutMe } from "@/components/sections/AboutMe";
import { Contact } from "@/components/sections/Contact";
import { Skills } from "@/components/sections/Skills";
import { SocialMediaLinks } from "@/components/sections/SocialMediaLinks";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  pt-20 font-[family-name:var(--font-comfortaa-sans)]">
      <div className="flex flex-col md:gap-16 items-center">
        <div className="relative w-full max-w-[654px] grid place-items-center gap-10 overflow-x-hidden md:overflow-visible">
          {/* HASH PATTERN */}
          <Image
            src="/hash-pattern.svg"
            alt="hash pattern"
            width={360}
            height={360}
            className="absolute top-20 -right-[40%] -z-10 "
          />

          {/* WAVE PATTERN */}
          <Image
            src="/waves.svg"
            alt="waves pattern"
            width={156}
            height={58}
            className="absolute top-[10rem] lg:top-[13rem] scale-75 lg:scale-100 -left-14 -z-10 "
          />

          {/* WELCOME - SECTION */}
          <WelcomeSection />

          {/* ABOUT ME - SECTION*/}

          <AboutMe />
        </div>
        {/* SKILLS - SECTION*/}
        <Skills />

        {/* SOCIAL MEDIA LINKS  - SECTION*/}
        <div className=" py-20 my-10 relative">
          {/* hash pattern */}
          <Image
            src="/hash-pattern.svg"
            alt="hash pattern"
            width={360}
            height={360}
            className="absolute top-0 -left-20 -z-10 rotate-90"
          />
          <SocialMediaLinks />
          {/* mirror image */}
          <Image
            src="/mirror.png"
            alt="mirror image"
            width={766}
            height={373}
            className="absolute -bottom-[140px] -right-[30%] -z-10 "
          />
        </div>

        {/* CONTACT - SECTION */}
        <Contact />
      </div>
    </div>
  );
}
