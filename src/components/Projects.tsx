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
      className={`${theme.radii.xl} ${theme.colors.surface} border border-slate-800/60 ${theme.shadow.soft} ${theme.shadow.hover} transition overflow-hidden`}
    >
      <button onClick={() => setOpen(o => !o)} className="w-full text-left p-6 hover:bg-slate-900/40 transition">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
            <p className="mt-1 text-slate-400">{description}</p>
            {stack?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((tag: string) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-slate-800/70 text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="shrink-0 text-slate-400">{open ? <ChevronUp/> : <ChevronDown/>}</div>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6"
          >
            <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sky-300 hover:underline">
              View Project <ExternalLink className="w-4 h-4"/>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-100">Projects</h2>
          <p className="text-slate-400 mt-2">Expandable cards with tech stacks and links. Add more by editing <code>projectsData</code>.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {projectsData.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
