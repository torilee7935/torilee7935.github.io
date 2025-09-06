// src/theme.ts
export const theme = {
  colors: {
    // Use with Tailwind gradient utilities:
    // <div className={`bg-gradient-to-b ${theme.colors.bg}`}/>
    bg: "from-white to-brand-sage50",

    // Plain surfaces/cards
    surface: "bg-white",

    // Text utilities as classes (preferred over inline style)
    text: {
      primary: "text-brand-ink",
      secondary: "text-brand-slate",
      link: "text-brand-sage600 hover:text-brand-sage500",
    },

    // Useful only if you truly need hex in inline styles
    hex: {
      text: "#0F172A",
    },

    // Focus rings & borders
    ring: "ring-brand-sky300",
    border: "border-brand-line",

    // Buttons
    primary: "bg-brand-sage500 hover:bg-brand-sage600 text-white",
    secondary: "bg-brand-sky500 hover:bg-brand-sky400 text-white",

    // Badges/pills
    pill: "bg-brand-sage100 text-brand-sage600",

    // Light section background
    softGrad: "bg-gradient-to-br from-brand-sky50 via-white to-brand-sage50",
  },

  // Radii used across components
  radii: {
    md: "rounded-xl",
    xl: "rounded-2xl",
    lg: "rounded-2xl",     // alias used by some components
    full: "rounded-full",
  },

  // Shadows
  shadow: {
    soft: "shadow-[0_10px_30px_-12px_rgba(15,23,42,0.10)]",
    hover: "hover:shadow-[0_14px_40px_-12px_rgba(15,23,42,0.16)]",
  },

  // Layout helpers (<Section/> & <Container/> use these)
  layout: {
    padY: "py-16",
    padX: "px-6",
    maxW: "max-w-6xl",
  },
} as const;
