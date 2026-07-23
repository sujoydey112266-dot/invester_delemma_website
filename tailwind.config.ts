import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          600: "#242a2f",
          700: "#1b2124",
          800: "#12161a",
          900: "#0d1013",
        },
        neon: {
          DEFAULT: "#37a1fa",
          200: "#a3ccfe",
          300: "#6db1fc",
          500: "#1478e5",
          600: "#0841c5",
        },
        success: "#10b981",
        danger: "#ef4444",
        muted: "#b3b3b3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 0), linear-gradient(180deg, rgba(255,255,255,0.035) 1px, transparent 0)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35)",
        neon: "0 6px 18px -8px rgba(0,0,0,0.55), inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
