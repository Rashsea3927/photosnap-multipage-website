import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      xs: '540px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1024px',
      xxl: '1440px',
    },
    extend: {
      maxWidth: {
        lg: '1110px',
      },
      backgroundImage: {
        right_gradient: 'linear-gradient(to right, #FFC593 0%, #BC7198 52%, #5A77FF)',
        bottom_gradient: 'linear-gradient(to bottom, #FFC593 0%, #BC7198 52%, #5A77FF)',
        stories_overlay: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 66%) 100%)',
      },
      flex: {
        0.6: '0.6',
        0.7: '0.7',
      },
      fill: {},
      aspectRatio: {
        '96/125': '96 / 125',
        '18/25': '18 / 25',
      },
      margin: {
        18: '4.5rem',
      },
      fontFamily: {
        dm_sans: ['var(--font-dm_sans)', 'sans-serif'],
      },
      transitionProperty: {
        top: 'top',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.fill-facebook': {
          fill: 'url(#facebook)',
        },
        '.fill-instagram': {
          fill: 'url(#instagram)',
        },
        '.fill-twitter': {
          fill: 'url(#twitter)',
        },
        '.fill-youtube': {
          fill: 'url(#youtube)',
        },
        '.fill-pinterest': {
          fill: 'url(#pinterest)',
        },
      });
    },
  ],
} satisfies Config;

export default config;
