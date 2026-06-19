import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#2D9E8F",
          dark: "#1E7268",
          light: "#E8F7F5",
        },
        navy: {
          DEFAULT: "#0E1F3D",
          mid: "#162C52",
        },
        charcoal: "#1C2B3A",
        offwhite: "#F8F9FA",
        warmgray: "#6B7280",
      },
      borderColor: {
        subtle: "rgba(0,0,0,0.08)",
        "subtle-dark": "rgba(255,255,255,0.10)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderWidth: {
        hair: "0.5px",
      },
      maxWidth: {
        container: "72rem", // max-w-6xl equivalent token
      },
      letterSpacing: {
        tightish: "-0.01em",
        tighter2: "-0.02em",
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        display: ["clamp(2rem,5vw,3.4rem)", { lineHeight: "1.06", letterSpacing: "-0.025em" }],
        "display-sm": ["clamp(1.75rem,3.5vw,2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        stat: ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(14,31,61,0.04), 0 8px 24px rgba(14,31,61,0.06)",
        "card-hover": "0 4px 8px rgba(14,31,61,0.06), 0 16px 40px rgba(14,31,61,0.10)",
        nav: "0 1px 0 rgba(0,0,0,0.04), 0 8px 24px rgba(14,31,61,0.06)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
