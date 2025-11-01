import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color
        primary: "#0066FF",
        
        // Custom light-blue palette
        "light-blue": {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      
      // Custom background gradients
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)",
        "gradient-blue": "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
        "gradient-shift": "linear-gradient(270deg, #0066FF, #00D4FF, #0ea5e9, #38bdf8)",
        "gradient-mesh": "radial-gradient(at 40% 20%, #0066FF 0px, transparent 50%), radial-gradient(at 80% 0%, #38bdf8 0px, transparent 50%), radial-gradient(at 0% 50%, #0ea5e9 0px, transparent 50%)",
      },
      
      // Custom animations
      animation: {
        // Floating animation
        "float": "float 3s ease-in-out infinite",
        "float-slow": "float 4s ease-in-out infinite",
        "float-fast": "float 2s ease-in-out infinite",
        
        // Gradient shift animation
        "gradient-shift": "gradient-shift 8s ease infinite",
        "gradient-shift-fast": "gradient-shift 4s ease infinite",
        "gradient-shift-slow": "gradient-shift 12s ease infinite",
        
        // Additional useful animations
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      
      // Keyframes for animations
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { 
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      
      // Custom animation timing functions
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "ease-in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "ease-in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      
      // Custom transition durations for better control
      transitionDuration: {
        "2000": "2000ms",
        "3000": "3000ms",
      },
      
      // Custom background sizes for gradient animations
      backgroundSize: {
        "200": "200% 200%",
        "300": "300% 300%",
      },
    },
  },
  plugins: [],
};

export default config;
