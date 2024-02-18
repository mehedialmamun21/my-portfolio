module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // colors: {
      //   btn: 'blue',
      // },
      backgroundImage: {
        'contact-backImg': "url('/src/assets/images/background-contactform.jpg')",
        'education-backImg1': "url('/src/assets/images/shape-2.png')",
        'education-backImg2': "url('/src/assets/images/shape-1.png')",
        'contact-backImg3': "url('/src/assets/images/shape-4.png')",
        'banner-section-backImg': "url('/src/assets/images/animate.png')"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#13203B",
          primary: "#112B3C",
          secondary: "#DEE1E6",
          tartiary: "#E5E5E5",
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
