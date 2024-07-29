import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          100: '#CFEEFD',
          // 200: '#B1EEF0',
          200: '#7DD3FC',
          300: '#39BDF8',
          // 500: '#16B1E9',
          400: '#4BA0E8',
          500: '#0F8EE9',
          600: '#0A6EB8',
        },

        dark: {
          100: '#28AFD8',
          200: '#1B638F',
          300: '#192C3D',
          400: '#232e34',
          500: '#21252c',
          600: '#426982',
          650: '#355064',
          700: '#2c3e4f',
          800: '#232f3e',
          900: '#17212B',
          950: '#16191f',
          // telegram

          920: '#2B5278',
          930: '#0E1621',
          960: '#242F3D',

          940: '#192C3D',
        },
        light: {
          100: '#FFFFFF',
          200: '#F3F3F3',
          600: '#dddddd',
          300: '#bfbfbf',
          400: '#7f7f7f',
          500: '#334155',
        },
        typo: {
          50: '#F9FAFB',
          100: '#9CA3AF',
          200: '#6B7280',
          300: '#4B5563',
          400: '#374151',
          500: '#1F2937',
          600: '#d5dbdb',
          700: '#44b9d5',
          800: '#3fcfc5',
        },

        // 'accent-blue': '#b1eef0',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
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
      fontFamily: {
        inter: ['var(--font-inter)'],
        spaceGrotesk: ['var(--font-spaceGrotesk)'],
      },
      boxShadow: {
        'light-100':
          '0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)',
        'light-200': '10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'light-300': '-10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'dark-100': '0px 2px 10px 0px rgba(46, 52, 56, 0.10)',
        'dark-200': '2px 0px 20px 0px rgba(39, 36, 36, 0.04)',
      },
      backgroundImage: {
        'auth-dark': "url('/assets/images/auth-dark.png')",
        'auth-light': "url('/assets/images/auth-light.png')",
        'hero-img-1':
          "url('https://www.libertytravel.com/sites/default/files/styles/full_size/public/lt-HP-main-1920x680-BIPOC-owned-travel.jpg?itok=pbtUdq7n')",
        'hero-img-2':
          "url('https://www.relaxinplayadelcarmen.com/blog/filemanager/media/2023-01-1163be3302baf5e.jpg')",
        'hero-img-3':
          "url('https://images.squarespace-cdn.com/content/v1/57fbf8c88419c2ee93cbe03e/1507661151953-139YEDGIHRBL9Q05CT2P/Panoramica-Dia%2Cxlarge.1483026236.jpg?format=2500w')",
        'hero-img-4': "url('/assets/images/banner2.webp')",
        'hero-img-5': "url('/assets/images/banner1.webp')",
        'hero-img-6': "url('/assets/images/bg-6.jpg')",
        'hero-img-7': "url('/assets/images/bg-7.jpg')",
        'hero-img-8': "url('/assets/images/whyChooseUs.jpg')",
        'hero-img-9': "url('/assets/images/statsBg.jpg')",
      },
      screens: {
        500: '500px',
        400: '400px',
        300: '300px',
        1750: '1750px',
      },
      width: {
        95: '95%',
        90: '90%',
        85: '85%',
        80: '80%',
        70: '70%',
        60: '60%',
        40: '40%',
      },
      maxWidth: {
        95: '95%',
        90: '90%',
        85: '85%',
        80: '80%',
        70: '70%',
        60: '60%',
        40: '40%',
      },
      minHeight: {
        95: '95%',
        90: '90%',
        85: '85%',
        80: '80%',
        70: '70%',
        60: '60%',
        40: '40%',
        '95v': '95vh',
        '90v': '90vh',
        '50v': '50vh',
      },
      // borderRadius: {
      //   lg: 'var(--radius)',
      //   md: 'calc(var(--radius) - 2px)',
      //   sm: 'calc(var(--radius) - 4px)',
      // },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        enterFromRight: {
          from: { opacity: '0', transform: 'translateX(200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: '0', transform: 'translateX(-200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: ' 0', transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: ' 0', transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.8)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      transitionDuration: {
        '250': '250ms',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        scaleIn: 'scaleIn 200ms ease',
        scaleOut: 'scaleOut 300ms ease-out',
        fadeIn: 'fadeIn 200ms ease',
        fadeOut: 'fadeOut 200ms ease-out',
        enterFromLeft: 'enterFromLeft 250ms ease',
        enterFromRight: 'enterFromRight 250ms ease',
        exitToLeft: 'exitToLeft 250ms ease',
        exitToRight: 'exitToRight 250ms ease',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;

export default config;
