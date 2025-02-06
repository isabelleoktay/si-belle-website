import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        parchment: '#f8f4e8',
        burgundy: '#4c1f28',
        gold: '#d4af37',
        midnight: '#1a1b41',
        cardboard: '#bab7ad',
        emerald: '#0c2523',
      },
      fontFamily: {
        serif: ['IM Fell English', 'serif'],
        display: ['Cinzel Decorative', 'serif'],
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
} satisfies Config;
