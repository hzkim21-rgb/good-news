import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f7fbff",
          100: "#eaf3ff",
          500: "#4a90e2"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
