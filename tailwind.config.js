/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta derivada del logo de Vida (azul marino + azul eléctrico)
        brand: {
          50: '#E9F0FA',
          100: '#CDDDF2',
          200: '#9DBBE5',
          300: '#6492D4',
          400: '#3A6FC0',
          500: '#1E6FD9', // azul eléctrico (acento del corazón/microscopio)
          600: '#1956AE',
          700: '#1B3A6B', // azul marino (texto "Vida")
          800: '#142C52',
          900: '#0D1E3A',
        },
        cyan: {
          50: '#E6F6FC',
          100: '#C2EBF9',
          200: '#8AD8F2',
          300: '#4FC2E8',
          400: '#1FB0DD',
          500: '#039BCB', // cian de apoyo
          600: '#027CA3',
          700: '#025E7B',
          800: '#014055',
          900: '#012A38',
        },
        ink: '#101a2e',
        paper: '#F5F8FD',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 14px 44px -14px rgba(27, 58, 107, 0.28)',
        card: '0 6px 26px -10px rgba(27, 58, 107, 0.2)',
        glow: '0 0 30px -4px rgba(30, 111, 217, 0.5)',
        '3d': '0 30px 60px -20px rgba(13, 30, 58, 0.4)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1E6FD9 0%, #1B3A6B 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #1FB0DD 0%, #039BCB 100%)',
        'hero-gradient': 'linear-gradient(120deg, #0D1E3A 0%, #1B3A6B 50%, #1E6FD9 100%)',
      },
      height: { 18: '4.5rem' },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        floatSlow: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: '1' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        pulseRing: 'pulseRing 1.8s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
}
