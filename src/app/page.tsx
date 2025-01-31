// import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-comfortaa-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start">
        <div className="flex gap-1  flex-col text-mintKari">
          <h1 className="text-3xl font-bold pb-4 motion-translate-x-in-[-200%] motion-blur-in-[15px] motion-opacity-in-[0%] motion-duration-[2.25s] motion-duration-[3.00s]/opacity motion-ease-spring-smooth">
            Hi, I&apos;m Małgorzata.
          </h1>
          <h2 className="motion-translate-x-in-[-200%] motion-blur-in-[10px] motion-duration-[3.5s] motion-opacity-in-[0%] motion-duration-[5.00s]/opacity motion-ease-spring-smooth">
            Nice to meet you.
          </h2>
          <h2 className="motion-translate-x-in-[-200%] motion-blur-in-[5px] motion-duration-[4.5s] motion-opacity-in-[0%]  motion-ease-spring-smooth">
            I am a designer & a frontend developer.
          </h2>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
