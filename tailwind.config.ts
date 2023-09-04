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
        'mulher-mobile': "url('https://i.imgur.com/ftECh3G.png')",
        'mulher-desktop': "url('https://i.imgur.com/ftECh3G.png')",
        'new-collection-mobile': "url('https://i.imgur.com/1vLCv01.png')",
        'new-collection-desktop': "url('https://i.imgur.com/1vLCv01.png')",
        'image-popup': "url('https://i.imgur.com/GdnRO5f.png')",
        'logo-maeztra': "url('https://i.ibb.co/StZVfCx/logo-maeztra-novo.png')"
      },
    },
  },
  plugins: [],
}
export default config
