import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
// @ts-expect-error - tailwindcss-motion has no types
import * as tailwindcssMotion from "tailwindcss-motion";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        blackKari: "#1C130E",
        orangeKari: {
          DEFAULT: "#EE7C3F",
          dark: "#BC6C41",
        },

        greyKari: {
          DEFAULT: "#50413A",
          light: "#F4F2F1",
        },
        blueKari: {
          DEFAULT: "#1787A6",
          light: "#2EB1D7",
          dark: "#0D667E",
        },
        yellowKari: "hsl(43, 100%, 84%)",
        wineKari: "hsl(10, 29%, 44%)",
        roseKari: {
          DEFAULT: "hsl(11, 66%, 63%)",
          light: "hsl(21, 66%, 70%)",
        },
        peachKari: "hsl(29, 98%, 83%)",
        mintKari: {
          DEFAULT: "hsl(140, 10%, 46%)",
          light: "hsl(117, 16%, 76%)",
        },
        magentaKari: "hsl(350, 66%, 63%)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // animation to make infinite horizontal text
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "infinite-scroll": "scroll 20s linear infinite",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    // @ts-ignore
    tailwindcssMotion as any,
  ],
} satisfies Config;
