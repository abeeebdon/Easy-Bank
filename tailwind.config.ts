import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dBlue: 'hsl(233, 26%, 24%)',
        lGreen: 'hsl(136, 65%, 51%)',
        bCyan: 'hsl(192, 70%, 51%)',
        'light-gray-blue': 'hsl(220, 16%, 96%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'grayish-blue': 'hsl(233, 8%, 62%)',
      },
    },
  },
  plugins: [],
}
export default config
