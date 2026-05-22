import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05050C",
        foreground: "#F6F6F8",
        shaz: {
          black: "#05050C",
          white: "#F6F6F8",
          purple: "#8A2BE2",
          magenta: "#D946EF",
          orange: "#F59E0B",
          gold: "#FFD54A",
          darkGray: "#0E0E1B",
          cardBg: "rgba(10, 10, 22, 0.6)",
          cardBorder: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Inter", "sans-serif"],
        display: ["var(--font-outfit)", "SF Pro Display", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulseGlow 2s infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "scroll-indicator": "scrollIndicator 2s infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%": { boxShadow: "0 0 15px rgba(138, 43, 226, 0.2)" },
          "100%": { boxShadow: "0 0 30px rgba(217, 70, 239, 0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scrollIndicator: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.3" },
          "50%": { transform: "translateY(6px) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(12px) scale(0.8)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
