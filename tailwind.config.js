/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "azulTenueFuerte": "#84B6F4",
        "azulClaro": "#C4DAFA",
        "azulMasClaro": "#E0E9F4",
        "azulCielo": "#46A6FF",
        "blancoAzul": "#edf4fc",
        "white60opac": "rgb(255 255 255 / 60%)",
        "white40opac": "rgb(255 255 255 / 16%)",
        "moradoOscuro": "#271E4A",
        "gris": "#A1A1A1",
        "rosaGris": "#9b9bb2",
        "rosa": "#FF706F",
        "hoverBgEditar": "#878787",
        "hoverBgGuardar": "#408dd5",
        "azulMarFondo": "#3F779B",
        "rosaPastelOpac": "#CA79C6",
        "FAFAFA": "#FAFAFA",
        "7B7B7B": "#7B7B7B"
      },
      screens: {
        'mq1185': { 'raw': '(min-width: 1185px)' },
        'mq1050': { 'raw': '(min-width: 1050px)' },
        'mq980': { 'raw': '(min-width: 980px)' },
        // => @media (min-height: 800px) { ... }
      },
      backgroundImage: {
        'cldescarga': 'url(/images/loginbg.png)'
      }
    },
  },
  plugins: [],
}