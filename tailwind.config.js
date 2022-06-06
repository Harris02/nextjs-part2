module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{
      'lg':{'max':'1023px'},
      'md':{'max':'767px'},
      'sm':{'max':'639px'}
    },
    extend: {
      animation:{
        fade:'fadeIn 5s ease-in-out',
      },
      keyframes:theme=>({
        fadeIn:{
          '0%':{opacity:theme('opacity.0')},
          '100%':{opacity:theme('opacity.1')}
        }
      })
    },
  },
  plugins: [],
}
