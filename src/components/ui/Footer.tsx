"use client";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-orangeKari-dark/25 text-sm text-blackKari/50 px-4 py-10 gap-4 flex flex-col items-center justify-center">
      <p className="">© {year} Karibara. All rights reserved.</p>
      <p>Built with accessibility and performance in mind.</p>
    </footer>
  );
};
