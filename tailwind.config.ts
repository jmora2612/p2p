import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,ts}'

  ],
  theme: {
      extend: {
        colors: {
          primary: '#C4841D',
          secondary: '#A1A1AA',

        },
      },
    },
  plugins: [nextui()]
}