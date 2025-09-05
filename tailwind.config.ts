import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'soft-ink': '0 8px 30px rgba(2,6,23,0.25)',
        'soft-ink-hover': '0 12px 40px rgba(2,6,23,0.35)',
      }
    },
  },
  plugins: [],
} satisfies Config
