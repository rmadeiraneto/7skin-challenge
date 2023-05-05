/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FFA500',
        accentLight: '#ffdc9c',
        background: '#FAFAFA',
        mainBackground: '#FFFFFF',
        navBackground: '#FFFFFF',
        primary: '#374151',
        primaryLight: '#afb9c9',
        secondary: '#2563eb',
        secondaryLight: '#a8c3ff',
        subtle: '#E6E6E6'
      },
      components: {
        sizes: {
          switch: '18px'
        },
        zIndex: {
          nav: 10,
        }
      },
      fontSize: {
        base: '13px'
      },
      layout: {
        sizes: {
          navHeight: "48px"
        },
        viewport: {
          gutterHeight: "16px",
          gutterWidth: "24px",
          mainWidth: "920px",
        }
      }
    },
  },
  plugins: [],
}
