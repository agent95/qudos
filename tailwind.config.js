/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  corePlugins: {
    preflight: false,
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}


