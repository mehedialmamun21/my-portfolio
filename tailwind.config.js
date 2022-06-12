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
          primary: "#D1FF19",
          secondary: "#F97316",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
