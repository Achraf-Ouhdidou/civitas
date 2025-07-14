/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        moroccan: {
          // Traditional Moroccan colors
          red: '#C41E3A',      // Deep red from Moroccan flag
          green: '#006233',    // Green from Moroccan flag
          gold: '#DAA520',     // Traditional gold
          terracotta: '#CD853F', // Terracotta pottery color
          blue: '#1E3A8A',     // Deep blue
          cream: '#F5F5DC',    // Cream/beige
          burgundy: '#800020', // Deep burgundy
          olive: '#808000',    // Olive green
          copper: '#B87333',   // Copper metallic
          sand: '#F4A460',     // Sandy brown
          // Academic colors
          navy: '#1E293B',     // Professional navy
          slate: '#475569',    // Slate gray
          stone: '#78716C',    // Stone gray
        },
        // Status colors
        success: '#059669',
        warning: '#D97706',
        error: '#DC2626',
        info: '#0284C7',
      },
      fontFamily: {
        'arabic': ['Noto Sans Arabic', 'sans-serif'],
        'tifinagh': ['Noto Sans Tifinagh', 'sans-serif'],
        'french': ['Inter', 'sans-serif'],
        'english': ['Inter', 'sans-serif'],
        'heading': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'moroccan-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23DAA520\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'geometric-pattern': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23C41E3A\" fill-opacity=\"0.05\"%3E%3Cpolygon points=\"20,0 40,20 20,40 0,20\"/%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-subtle': 'bounceSubtle 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-8px)' },
          '60%': { transform: 'translateY(-4px)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'moroccan': '0 4px 20px rgba(196, 30, 58, 0.15)',
        'gold': '0 4px 20px rgba(218, 165, 32, 0.15)',
        'academic': '0 2px 15px rgba(30, 41, 59, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};