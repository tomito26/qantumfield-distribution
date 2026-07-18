import tailwindcssAnimate from "tailwindcss-animate"
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      "2xl": "1400px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1310px",
      "2xl": "1419px",
      "3xl":"1500px",
      "4xl": "1619px",
      "5xl":"1670px"
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        brand: {
          DEFAULT: "#0C4E1A",
          dark: "#093813",
          light: "#0F6322",
        },
        // Deep green ink for dark sections & footer (replaces pure black).
        forest: {
          DEFAULT: "#06280F",
          light: "#0A3A18",
        },
        // Light sage canvas for alternating section backgrounds.
        canvas: "#EEF4EC",
        // Fresh lime accent — the single restrained accent that lifts the
        // palette out of monotone green (stays in the green family). Used for
        // eyebrows, CTAs, stats, underlines, hover states. Named `leaf` (not
        // `accent`, which clashes with the shadcn token; not `lime`, which
        // would shadow Tailwind's built-in lime scale). Bright DEFAULT is used
        // on dark surfaces; `dark` (deep olive) is used for small text/rules on
        // white and for button hover.
        leaf: {
          DEFAULT: "#84CC16",
          dark: "#4D7C0F",
        },
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
        "light-gray": "#CACCCF",
        tundora: "#444444",
        "active-blue": "#007EFF",
        "stroke-color": "#E3E5EA",
        monochrome: "#292929",
        "app-gray": "#C4C4C4",
        "inactive-blue": "#F3F9FF",
        "fair-blue": "#B2D8FF",
        "standard-blue": "#49A3FF",
        "secondary-info": "#A0A4A8",
        "body-gray": "#64696D",
        "default-black": "#25282B",
        "app-destructive": "#F40B0B",
        "destructive-light": "#F83737",
        "inactive-error": "#FEA0A0",
        "faint-error": "#F86666",
        monochromatic: "#101828",
        "nexus-gray": "#C6CCD6",
        "success-light": "#ECFDF3",
        success: "#1AB759",
        "success-100": "#D1FADF",
        "low-bg": "#F4F4F4",
        "light-motive": "#FAFAFB",
        "success-50": "#ECFDF3",
        "primary-dark": "#161616",
        "dark-green": "#0CA148",
        "inactive-warning": "#FFF1CF",
        "warning-dark": "#E89806",
        "seasoned-blue":"#85C0FD",
        "blaze-orange": "#FD5B08",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        // Soft, low-contrast elevation for the card system.
        soft: "0 1px 2px rgba(6, 40, 15, 0.04), 0 8px 24px -12px rgba(6, 40, 15, 0.14)",
        lift: "0 12px 32px -12px rgba(6, 40, 15, 0.22)",
      },
      backgroundImage: {
        // Signature CTA gradient (forest → brand) and hero legibility overlay.
        "cta-band": "linear-gradient(120deg, #06280F 0%, #0C4E1A 55%, #0F6322 100%)",
        "hero-overlay":
          "linear-gradient(105deg, rgba(6,40,15,0.92) 0%, rgba(9,56,19,0.72) 40%, rgba(12,78,34,0.25) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
