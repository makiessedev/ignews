/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },

      colors: {
        white: {
          50: '#ffffff',
        },

        gray: {
          100: '#1e1e16',
          300: '#a8a8b3',
          800: '#29292e',
          850: '#1f2729',
          900: '#121214'
        },

        cyan: {
          500: '#61dafb',
        },

        yellow: {
          500: '#eba417',
        }
      }
    },
  },
  plugins: [],
}
