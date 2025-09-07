import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { PROFILE } from "@/data/profile"
import { theme } from "@/theme"
import { Container, Section } from "@/shared/ui"

export function Hero() {
  return (
    <Section id="home" className="pt-24 bg-brand-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Text Content */}
          <div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-brand-ink"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {PROFILE.name}
            </motion.h1>

            <motion.h2
              className="mt-2 text-xl md:text-2xl font-medium text-brand-slate"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {PROFILE.headline}
            </motion.h2>

            <motion.p
              className="mt-5 text-lg leading-relaxed text-brand-slate max-w-xl"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hi, I’m Tori. I’m passionate about making technology easy to understand and accessible to everyone.
              With a background in computer science and account management, I bridge technical details with real
              human needs — helping teams learn and get the most out of their tools.
            </motion.p>

            {/* Social links */}
            <motion.div
              className="mt-6 flex items-center gap-4"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <a
                aria-label="GitHub"
                href="https://github.com/torilee7935"
                target="_blank"
                rel="noreferrer"
                className={`p-2 border ${theme.colors.border} hover:bg-brand-sage50 ${theme.radii.full} ${theme.shadow.soft} ${theme.colors.surface} transition`}
              >
                <Github className="w-5 h-5 text-brand-sage600" />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/torielizabethlee"
                target="_blank"
                rel="noreferrer"
                className={`p-2 border ${theme.colors.border} hover:bg-brand-sage50 ${theme.radii.full} ${theme.shadow.soft} ${theme.colors.surface} transition`}
              >
                <Linkedin className="w-5 h-5 text-brand-sage600" />
              </a>
              <a
                aria-label="Email"
                href="#contact"
                className={`p-2 border ${theme.colors.border} hover:bg-brand-sage50 ${theme.radii.full} ${theme.shadow.soft} ${theme.colors.surface} transition`}
              >
                <Mail className="w-5 h-5 text-brand-sage600" />
              </a>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            className="relative justify-self-center"
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* subtle frame (no gradient) */}
            <div className="w-fit p-[3px] rounded-2xl bg-transparent ring-1 ring-black/5">
              {/* the only visible border */}
              <div className="rounded-2xl overflow-hidden bg-white border-[5px] border-brand-sage700 aspect-[4/5] w-[clamp(220px,28vw,360px)]">
                <img
                  src={PROFILE.photoUrl}
                  alt={PROFILE.name}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
