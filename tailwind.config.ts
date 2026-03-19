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
        'white-warm': '#FDFAF6',
        'white-card': '#FFFFFF',
        cream: '#E5E6E0',
        'cream-old': '#F2EAE0',
        anthracite: '#2A2A2A',
        'anthracite-mid': '#4A4A4A',
        blush: '#E8B4B8',
        'blush-deep': '#C4828A',
        'blush-pale': '#F5E0E2',
        gold: '#C4974A',
        border: '#E8E0D8',
        burgundy: '#541115',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-jost)', 'sans-serif'],
        script: ['var(--font-great-vibes)', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
