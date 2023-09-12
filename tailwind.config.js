import theme from './project.config.json' assert { type: 'json' };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: theme.colors,
    },
  },
  plugins: [],
};
