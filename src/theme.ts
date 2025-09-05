export const theme = {
  colors: {
    bg: "from-slate-900 via-slate-950 to-slate-900",
    surface: "bg-slate-900/60 backdrop-blur",
    primary: "#3b82f6",
    primarySoft: "#60a5fa",
    accent: "#22d3ee",
    text: "#e5e7eb",
    textMuted: "#94a3b8",
    ring: "#7dd3fc",
  },
  radii: {
    xl: "rounded-2xl",
    lg: "rounded-xl",
    full: "rounded-full",
  },
  shadow: {
    soft: "shadow-soft-ink",
    hover: "hover:shadow-soft-ink-hover",
  },
  layout: {
    maxW: "max-w-6xl",
    padX: "px-6 md:px-10",
    padY: "py-16 md:py-24",
  },
} as const
