import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/_components/Navbar";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Dev Malgorzata Bozykowska",
  description: "Web Development & Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comfortaa.variable} ${comfortaa.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
