import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FAA500'
      },
      backgroundImage: {
        'mulher-mobile': "url('/banner-mobile.png')",
        'mulher-desktop': "url('/banner-desktop.png')",
        'new-collection-mobile': "url('/banner-footer-mobile.png')",
        'new-collection-desktop': "url('/banner-footer-desktop.png')",
        'logo-maeztra': "url('/logo-maeztra.png')"
      },
    },
  },
  plugins: [],
}
export default config
