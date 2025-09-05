import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { PROFILE } from "@/data/profile"
import { theme } from "@/theme"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <div className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl">
        <div className={`m-3 ${theme.radii.xl} ${theme.shadow.soft} ${theme.shadow.hover} ${theme.colors.surface} border border-slate-800/60`}>
          <div className="flex items-center justify-between px-6 py-3">
            <a href="#home" className="font-semibold tracking-tight text-slate-200">{PROFILE.name}</a>
            <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <ChevronUp className="w-5 h-5 text-slate-300"/> : <ChevronDown className="w-5 h-5 text-slate-300"/>}
            </button>
            <nav className="hidden md:flex gap-6 text-slate-300">
              {navItems.map(n => (
                <a key={n.href} href={n.href} className="hover:text-white transition-colors">{n.label}</a>
              ))}
            </nav>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                <nav className="flex flex-col gap-2 px-6 pb-4 md:hidden">
                  {navItems.map(n => (
                    <a key={n.href} href={n.href} className="py-2 border-b border-slate-800/60 text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
                      {n.label}
                    </a>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
