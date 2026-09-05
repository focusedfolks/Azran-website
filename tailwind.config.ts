import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D182A",
        ink: "#14304F",
        gold: {
          300: "#F5D889",
          400: "#EFC868",
          500: "#D4AF37",
        },
        gray: "#656C74",
        offwhite: "#F7F1E3",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Montserrat", "sans-serif"],
        body: ["var(--font-body)", "Poppins", "sans-serif"],
      },
      fontSize: {
        hero: ["4rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "hero-mobile": ["2.5rem", { lineHeight: "1.1" }],
        h2: ["2.5rem", { lineHeight: "1.15" }],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(13, 24, 42, 0.06), 0 4px 12px rgba(13, 24, 42, 0.04)",
      },
      keyframes: {
        "whatsapp-intro": {
          "0%": { transform: "scale(0.92) translateY(6px)", opacity: "0" },
          "55%": { transform: "scale(1.06) translateY(0)", opacity: "1" },
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "whatsapp-intro":
          "whatsapp-intro 700ms cubic-bezier(0.22, 1, 0.36, 1) 400ms backwards",
      },
    },
  },
  plugins: [],
};
export default config;
