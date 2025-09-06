// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      /* --- Brand palette --- */
      colors: {
        brand: {
          white: "#FFFFFF",
          // Sage
          sage50:  "#F5F7F5",
          sage100: "#E8EFEA",
          sage200: "#D7E5DC",
          sage300: "#C2D6C9",
          sage400: "#9FBEA7",
          sage500: "#7CA787",
          sage600: "#5F8E6D",
          // Sky
          sky50:  "#F3FAFF",
          sky100: "#E6F4FE",
          sky200: "#CDE9FD",
          sky300: "#A8D8FB",
          sky400: "#7EC3F7",
          sky500: "#63ADDF",
          // Neutrals
          ink:   "#0F172A",
          slate: "#334155",
          line:  "#E2E8F0",
        },

        /* --- Remap low-contrast slates to light-theme safe values --- */
        slate: {
          50:  "#F8FAFC",
          100: "#F1F5F9",
          200: "#475569", // darker text (used to be too light)
          300: "#334155", // brand.slate
          400: "#334155",
          500: "#334155",
          600: "#334155",
          700: "#E2E8F0", // light border source (works with /60 alpha)
          800: "#E2E8F0", // light border source (works with /60 alpha)
          900: "#0F172A", // true dark when needed
          950: "#020617",
        },
      },

      /* --- Radius / Shadows --- */
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(15, 23, 42, 0.10)",
      },

      /* --- Typography --- */
      fontFamily: {
        // Body / UI
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
        // Headings / monogram
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
