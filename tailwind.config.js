module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'contact-backImg': "url('/src/assets/images/background-contactform.jpg')",
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#13203B",
          secondary: "#DEE1E6",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff"
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
