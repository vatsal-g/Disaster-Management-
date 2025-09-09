import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: "class",
  content: [
    "./client/**/*.{ts,tsx}",
    "./client/components/**/*.{ts,tsx}",
    "./client/pages/**/*.{ts,tsx}"
  ],
  prefix: "",
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          sidebar: {
            DEFAULT: "hsl(var(--sidebar-background))",
            foreground: "hsl(var(--sidebar-foreground))",
            primary: "hsl(var(--sidebar-primary))",
            "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
            accent: "hsl(var(--sidebar-accent))",
            "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
            border: "hsl(var(--sidebar-border))",
            ring: "hsl(var(--sidebar-ring))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          tilt: {
            '0%, 100%': { transform: 'rotate(-1deg)' },
            '50%': { transform: 'rotate(1deg)' },
          },
          'pulse-glow': {
            '0%, 100%': { boxShadow: '0 0 0.35rem hsla(var(--primary),0.5), 0 0 1rem hsla(var(--primary),0.35)' },
            '50%': { boxShadow: '0 0 0.6rem hsla(var(--primary),0.75), 0 0 1.35rem hsla(var(--primary),0.55)' },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          tilt: 'tilt 6s ease-in-out infinite',
          'pulse-glow': 'pulse-glow 2.2s ease-in-out infinite',
        },
        boxShadow: {
          'neon-cyan': '0 0 0.35rem hsla(var(--neon-cyan),0.7), 0 0 1rem hsla(var(--neon-cyan),0.5)',
          'neon-purple': '0 0 0.35rem hsla(var(--neon-purple),0.7), 0 0 1rem hsla(var(--neon-purple),0.5)',
          'neon-pink': '0 0 0.35rem hsla(var(--neon-pink),0.7), 0 0 1rem hsla(var(--neon-pink),0.5)',
          'neon-orange': '0 0 0.35rem hsla(var(--neon-orange),0.7), 0 0 1rem hsla(var(--neon-orange),0.5)',
        },
      },
    },
    plugins: [tailwindcssAnimate],
  } satisfies Config
