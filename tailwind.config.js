module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'Dancing': "Dancing Script, cursive",
        'Poppins': "Poppins, sans-serif;"
      },
      backgroundImage: theme => ({
        'home-img':'url(/public/assets/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg)',
        'vegan-img':"url(/public/assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg)",
        'vegetarian-img':" url(/public/assets/brooke-lark-jUPOXXRNdcA-unsplash.jpg);",
        'dessert-img': " url(/public/assets/serghei-savchiuc-Qaruw62_kmM-unsplash.jpg)",
        "home-bg":"linear-gradient(to bottom,#000000b4, #00000022),url(/public/assets/lily-banse--YHSwy6uqvk-unsplash.jpg)"
      })
    },
  },
  plugins: [],
}
