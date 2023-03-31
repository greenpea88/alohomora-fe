/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bumblebee: {
          ...require("daisyui/src/colors/themes")["[data-theme=bumblebee]"],
          ".btn:disabled": {
            "background-color": "#DAA520",
          },
        },
      },
    ],
  },
};
