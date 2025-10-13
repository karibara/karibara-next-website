// import { InfiniteHorizontalText } from "../ui/InfiniteHorizontalText";
import Image from "next/image";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  variable: "--font-oswald-sans",
  subsets: ["latin"],
});

export const Skills: React.FC = () => {
  return (
    <div className="w-full bg-orangeKari-dark/25 backdrop-blur-md">
      <div className="w-full bg-orangeKari">
        <h2 className="text-white text-center text-3xl p-2 font-bold">
          Skills
        </h2>
        {/* <InfiniteHorizontalText text="Skills"/> */}
      </div>

      {/* WORK SKILLS */}
      <div className=" grid grid-cols-5 max-w-[654px] my-10 mx-auto gap-4">
        <div className="relative col-span-2">
          {/* star orange*/}
          <Image
            src="/star-orange.svg"
            alt="orange star"
            width={52}
            height={60}
            className="absolute top-0 -left-14 -z-10 "
          />
          <h3 className="text-lg lg:text-xl font-bold border-b-2 border-blackKari">
            Use at work
          </h3>
        </div>

        <div className="grid grid-cols-5 col-span-5 gap-20">
          <p className="col-span-2 ">
            HTML, CSS, JavaScript, TypeScript, React, Next.js, TailwindCSS,
            GitHub, Jira, Figma, UX, UI
          </p>
          <p className="col-span-3">
            When I don’t know something, I’m not afraid to ask — good
            communication is key.
          </p>
        </div>
      </div>

      {/* HOBBY SKILLS */}
      <div className=" grid grid-cols-5 max-w-[654px] my-10 mx-auto gap-4">
        <div className="col-span-2 relative">
          <h3 className="text-lg lg:text-xl font-bold border-b-2 border-blackKari">
            Use for fun
          </h3>
          {/* star white*/}
          <Image
            src="/star-white.svg"
            alt="white star"
            width={33}
            height={37}
            className="absolute top-3 -right-10 -z-10 "
          />
        </div>

        <div className="relative grid grid-cols-5 col-span-5 gap-20">
          <p className="col-span-2 ">Unity, C#, Rhino, Procreate</p>
          <p className="col-span-3">
            Away from the screen? You’ll probably find me woodworking, running
            kilometres, learning how to code a video game, or indulging in way
            too much pasta.
          </p>
          {/* ME IN NUMBERS */}
          <div
            className={`absolute -bottom-40 right-0 ${oswald.variable} bg-white p-6 font-Oswald rounded-tr-3xl rounded-bl-3xl shadow-2xl `}
          >
            <h4 className="font-bold">ME IN NUMBERS</h4>
            <p>22 cup of tea/week</p>
            <p>2 books/month</p>
            <p>10 kg of pasta/year</p>
          </div>
        </div>
      </div>
    </div>
  );
};
