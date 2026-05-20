/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta moderna gamificada
        primary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d946a6",  // Magenta vibrante
          400: "#ec4899",
          500: "#d946a6",  // Primary
          600: "#be185d",
          700: "#831843",
          800: "#500724",
          900: "#2d0a2f",
        },
        accent: {
          50: "#ecf9ff",
          100: "#d4f1ff",
          200: "#b4e5ff",
          300: "#00d9ff",  // Cian neon
          400: "#00bfff",
          500: "#0099cc",
          600: "#0078aa",
          700: "#005588",
          800: "#003366",
          900: "#001a33",
        },
        highlight: {
          50: "#fff5eb",
          100: "#ffe8d1",
          200: "#ffcba4",
          300: "#ff6b35",  // Naranja vibrante
          400: "#ff5722",
          500: "#ff4500",
          600: "#e63900",
          700: "#cc3300",
          800: "#992600",
          900: "#661a00",
        },
        neutral: {
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e0e0e0",
          300: "#c0c0c0",
          400: "#808080",
          500: "#666666",
          600: "#4d4d4d",
          700: "#333333",
          800: "#1a1a1a",
          900: "#0f0f0f",
          950: "#050505",
        },
        // Alias para compatibilidad
        dark: {
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e0e0e0",
          300: "#1a1a1a",
          400: "#151515",
          500: "#0f0f0f",
          600: "#0a0a0a",
          700: "#050505",
          800: "#020202",
          900: "#000000",
          950: "#000000",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-nexus': 'linear-gradient(135deg, #2d0a2f 0%, #050505 50%, #001a33 100%)',
        'gradient-glow': 'radial-gradient(circle, rgba(217, 70, 166, 0.1) 0%, rgba(0, 217, 255, 0.05) 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(217, 70, 166, 0.5)',
        'glow-accent': '0 0 20px rgba(0, 217, 255, 0.5)',
        'glow-highlight': '0 0 20px rgba(255, 107, 53, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(217, 70, 166, 0.1)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(217, 70, 166, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(217, 70, 166, 0.8)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'shimmer': {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
      },
    },
  },
  plugins: [],
};
