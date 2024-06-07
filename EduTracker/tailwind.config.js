/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "schemes-surface-variant": "#dbe4e6",
        "schemes-tertiary": "#525e7d",
        whitesmoke: "#f5f7fa",
        "m3-sys-light-primary": "#006874",
        "m3-sys-light-on-primary": "#fff",
        black: "#000",
        "m3-sys-light-outline-variant": "#bfc8ca",
        "m3-sys-light-outline": "#6f797a",
        "m3-sys-light-on-surface-variant": "#3f484a",
        "m3-sys-light-on-surface": "#171d1e",
        "m3-sys-light-surface": "#f5fafb",
        teal: "rgba(0, 104, 116, 0.24)",
        gainsboro: "#dbdee0",
        "m3-sys-light-surface-container-highest": "#dee3e5",
      },
      spacing: {},
      fontFamily: {
        "m3-title-large": "Roboto",
      },
      borderRadius: {
        mini: "15px",
        "81xl": "100px",
        xl: "20px",
        "21xl": "40px",
      },
    },
    fontSize: {
      "3xl": "1.375rem",
      base: "1rem",
      "9xl": "1.75rem",
      sm: "0.875rem",
      "26xl": "2.813rem",
      "8xl": "1.688rem",
      "17xl": "2.25rem",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}