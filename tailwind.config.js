/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "/Portfolio/pages/*.html",
    "/src/*.js",
    "./Solution.html"
  ],
  daisyui: {
    themes: [
      { 

        ALJO: {
        
"primary": "#fcd34d",
        
"secondary": "#f3f4f6",
        
"accent": "#2563eb",
        
"neutral": "#1c1917",
        
"base-100": "#000",
        
"info": "#b91c1c",
        
"success": "#bef264",
        
"warning": "#7c3aed",
        
"error": "#dc2626",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    ('@tailwindcss/typography'),
  ],
  //...
}

