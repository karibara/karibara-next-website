import { AboutMe } from "@/components/sections/AboutMe";
import { SocialMediaLinks } from "@/components/sections/SocialMediaLinks";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-comfortaa-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start">
        {/* WELCOME SECTION */}
        <WelcomeSection />

        {/* ABOUT ME */}

        <AboutMe />

        {/* SOCIAL MEDIA LINKS */}
        <SocialMediaLinks />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
