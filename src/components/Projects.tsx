import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { projectsData } from "@/data/projects"
import { theme } from "@/theme"
import { Container, Section } from "@/shared/ui"

function ProjectCard({ title, description, link, stack }: any) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      layout
      className={[
        "group",                       // so hover styles apply to header + content
        theme.radii.xl,
        theme.colors.surface,
        "border", theme.colors.border, // light border
        theme.shadow.soft, theme.shadow.hover,
        "transition-colors overflow-hidden",
      ].join(" ")}
    >
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={[
          "w-full text-left p-6 transition-colors",
          // soft hover tint on the entire card
          "group-hover:bg-brand-sage50",
        ].join(" ")}
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-brand-ink">
              {title}
            </h3>
            <p className="mt-1 text-brand-slate">
              {description}
            </p>

            {stack?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-brand-sage100 text-brand-sage600 border border-transparent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="shrink-0 text-brand-sage600">
            {open ? <ChevronUp /> : <ChevronDown />}
          </div>
        </div>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            layout
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={[
              "px-6 pb-6",
              // match hover background with header so it doesn’t look “cut off”
              "transition-colors group-hover:bg-brand-sage50",
            ].join(" ")}
          >
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-brand-sage600 hover:text-brand-sage500 underline underline-offset-2"
            >
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Projects() {
  return (
    <Section id="projects" className={theme.colors.softGrad}>
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">Projects</h2>
          <p className="mt-2 text-brand-slate">A few things I’ve built and shipped.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projectsData.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
