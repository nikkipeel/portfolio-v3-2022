module.exports = {
  darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      animation: {
        'fade': 'fadeIn .5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      colors: {
        white65: 'var(--white-65)',
        white85: 'var(--white-85)',
        primary: 'var(--primary)',
        bgPrimary: 'var(--dark-bg-primary)',
        darkPrimary: 'var(--dark-primary)',
        secondary: 'var(--secondary)',
        bgSecondary: 'var(--dark-bg-secondary)',
        darkSecondary: 'var(--dark-secondary)',
        dark: 'var(--dark)',
        bgDark: 'var(--dark-bg)',
        white: 'var(--white)',
        highlight: 'var(--highlight)'
      },
      fontFamily: {
        'sans': ['Source Sans Pro', 'Verdana', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Source Serif Pro', 'ui-serif', 'Georgia', 'serif'],
        'mono': ['Source Code Pro', 'ui-monospace', 'SFMono-Regular', 'monospace'],
    },
  },
    variants: {
      extend: {
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  