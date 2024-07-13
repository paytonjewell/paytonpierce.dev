import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(20.0deg)' },
          '20%': { transform: 'rotate(-16.0deg)' },
          '30%': { transform: 'rotate(20.0deg)' },
          '40%': { transform: 'rotate(-8.0deg)' },
          '50%': { transform: 'rotate(20.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        }
      },
      animation: {
        wave: 'wave 2s ease-in-out infinite'
      }
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light", "dark"]
  }
};

export default config;
