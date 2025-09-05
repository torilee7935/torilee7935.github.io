import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { PROFILE } from "@/data/profile"
import { theme } from "@/theme"
import { Container, Section } from "@/shared/ui"

export function Hero() {
  return (
    <Section id="home" className="pt-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <motion.h1
              className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-100"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {PROFILE.headline}
            </motion.h1>
            <motion.p
              className="mt-5 text-slate-300 text-lg leading-relaxed"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {PROFILE.intro}
            </motion.p>

            <motion.div
              className="mt-6 flex items-center gap-4"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <a aria-label="GitHub" href="https://github.com/torilee7935" target="_blank" rel="noreferrer"
                 className={`p-2 border border-slate-800/60 hover:border-slate-700 ${theme.radii.full} ${theme.shadow.soft} ${theme.colors.surface} transition`}>
                <Github className="w-5 h-5 text-slate-300"/>
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/torielizabethlee" target="_blank" rel="noreferrer"
                 className={`p-2 border border-slate-800/60 hover:border-slate-700 ${theme.radii.full} ${theme.shadow.soft} ${theme.colors.surface} transition`}>
                <Linkedin className="w-5 h-5 text-slate-300"/>
              </a>
              <a aria-label="Email" href="#contact"
                 className={`p-2 border border-slate-800/60 hover:border-slate-700 ${theme.radii.full} ${theme.shadow.soft} ${theme.colors.surface} transition`}>
                <Mail className="w-5 h-5 text-slate-300"/>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`relative p-[3px] ${theme.radii.xl} bg-gradient-to-br from-sky-400/60 via-blue-500/60 to-cyan-300/60 ${theme.shadow.soft}`}>
              <div className={`${theme.radii.xl} overflow-hidden ${theme.colors.surface} border border-slate-800/60`}
                    style={{ aspectRatio: "4 / 5" }}>
                {/* Replace with your photo */}
                <div className="h-full w-full grid place-items-center text-slate-400">
                  <span className="text-sm">Your Photo Here</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
