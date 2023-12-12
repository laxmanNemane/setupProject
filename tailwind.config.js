/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        paragraph: "#959595",
        success: {
          DEFAULT: "#2e7d32",
          dark: "#1b5e20",
          light: "#4caf50",
        },
        info: {
          DEFAULT: "#0288d1",
          dark: "#01579b",
          light: "#03a9f4",
        },
        warning: {
          DEFAULT: "#ed6c02",
          dark: "#e65100",
          light: "#ff9800",
        },
        error: {
          DEFAULT: "#d32f2f",
          dark: "#cc4629",
          light: "#ff795c",
        },
        background: {
          DEFAULT: "#f5f5f5",
        },
        light: {
          main: {
            DEFAULT: "#E37363",
            light: "#FDD7D2",
          },
          primary: {
            darkOne: "#e65940",
            darkTwo: "#cc4f39",
            darkThree: "#b34532",
            DEFAULT: "#ff6347",
            lightOne: "#ff7359",
            lightTwo: "#ff826c",
            lightThree: "#ff927e",
          },
          secondary: {
            darkOne: "#449e48",
            darkTwo: "#3d8c40",
            darkThree: "#357a38",
            DEFAULT: "#4caf50",
            lightOne: "#5eb762",
            lightTwo: "#70bf73",
            lightThree: "#82c785",
          },
          ternary: {
            darkOne: "#2e2e2e",
            darkTwo: "#292929",
            darkThree: "#292929",
            DEFAULT: "#333333",
            lightOne: "#474747",
            lightTwo: "#5c5c5c",
            lightThree: "#707070",
          },
        },
        dark: {
          main: {
            DEFAULT: "#E37363",
            light: "#FDD7D2",
          },
          primary: {
            DEFAULT: "#18605d",
            dark: "#114442",
            light: "#649492",
            lighter: "#d1dfdf",
          },
          secondary: {
            DEFAULT: "#f97e6d",
            dark: "#b1594d",
            light: "#fba99d",
            lighter: "#f97e6d2e",
          },
          ternary: {
            DEFAULT: "#000000",
            dark: "#000000",
            light: "#545454",
            lighter: "#cccccc",
          },
          background: {
            DEFAULT: "#F2F2F2",
          },
        },
      },
      boxShadow: {},
    },
  },
  plugins: [],
};
