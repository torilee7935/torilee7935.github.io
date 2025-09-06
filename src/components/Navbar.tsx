import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { PROFILE } from "@/data/profile"
import { theme } from "@/theme"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Background", href: "#background" }, // your work experience section
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    // Fixed + high z-index so it truly “floats” while scrolling
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl">
        <div
          className={[
            "mx-3 mt-3",             // floating card inset
            theme.radii.xl,
            "border", theme.colors.border,
            theme.shadow.soft, theme.shadow.hover,
            // frosted glass:
            "backdrop-blur",
            "bg-white/70 supports-[backdrop-filter]:bg-white/60",
          ].join(" ")}
        >
          {/* Top row */}
          <div className="flex items-center justify-between px-6 py-3">
            {/* Left: TL monogram + name link */}
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="sr-only">Go to home</span>
              {/* Monogram with elegant display font */}
              <span className="text-2xl leading-none tracking-tight font-['Fraunces',_serif] text-brand-ink">
                TL
              </span>
              {/* Keep your name as a subtle text link (optional)
              <span className="hidden sm:inline text-sm font-medium text-brand-slate hover:underline underline-offset-4">
                {PROFILE.name}
              </span> */}
            </a>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-brand-sage50 transition"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? (
                <ChevronUp className="w-5 h-5 text-brand-sage600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-brand-sage600" />
              )}
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-6">
              {navItems.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm text-brand-slate hover:text-brand-ink hover:underline underline-offset-4 transition-colors"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <nav className="flex flex-col gap-1 px-6 pb-4 md:hidden">
                  {navItems.map((n) => (
                    <a
                      key={n.href}
                      href={n.href}
                      className="py-2 text-brand-slate hover:text-brand-ink border-b last:border-b-0 border-brand-line/70"
                      onClick={() => setOpen(false)}
                    >
                      {n.label}
                    </a>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
