/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        'head-back-1': '#EAB308',
        'head-back-2': '#D97706',
        'head-text': '#06402B',

        'body-back': '#EAB308',
        'body-text': '#06402B',
      },
    },
  },
  plugins: [],
};
