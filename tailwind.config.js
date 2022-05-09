const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
  ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        'sans': ['Inter', 'Paytone One', 'Noto Sans TC', 'Helvetica Neue', ...defaultTheme.fontFamily.sans],
        'mono': [...defaultTheme.fontFamily.mono, 'Noto Sans TC']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
