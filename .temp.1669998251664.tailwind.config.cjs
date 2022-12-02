import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neutral: colors.slate,
        primary: colors.purple,
        secondary: colors.orange,
        accent: colors.fuchsia
      },
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif']
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': {
              content: 'none'
            },
            'blockquote p:first-of-type::after': { content: 'none' },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            code: {
              fontWeight: theme('fontWeight.normal'),
              backgroundColor: theme('colors.violet.100'),
              paddingBlock: theme('spacing')[1],
              paddingInline: theme('spacing')[1.5],
              borderRadius: theme('borderRadius.DEFAULT')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ]
}
