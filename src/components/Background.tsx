import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/theme";
import { Container, Section } from "@/shared/ui";
import { EXPERIENCES, EDUCATION } from "@/data/background";
import { ChevronDown, ChevronUp } from "lucide-react";

function ExpCard({
  title, company, dates, bullets,
}: { title: string; company: string; dates: string; bullets: string[] }) {
  const [open, setOpen] = useState(false);
  const previewCount = 2;
  const preview = bullets.slice(0, previewCount);
  const rest = bullets.slice(previewCount);

  return (
    <motion.article
      layout
      className={[
        "group",
        theme.radii.md,
        theme.colors.surface,
        "border", theme.colors.border,
        theme.shadow.soft, theme.shadow.hover,
        "transition-colors overflow-hidden",
        "p-6"
      ].join(" ")}
    >
      <header className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-brand-ink">{title}</h3>
          <p className="mt-0.5 text-brand-slate">{company}</p>
          <p className="mt-0.5 text-sm text-brand-slate">{dates}</p>
        </div>
        <button
          onClick={() => setOpen(o => !o)}
          className="shrink-0 p-2 rounded-md hover:bg-brand-sage50 text-brand-sage600 transition"
          aria-expanded={open}
          aria-label={open ? "Collapse details" : "Expand details"}
        >
          {open ? <ChevronUp /> : <ChevronDown />}
        </button>
      </header>

      {/* bullets (preview) */}
      <ul className="mt-3 space-y-2">
        {preview.map((b, i) => (
          <li key={i} className="text-brand-slate">{b}</li>
        ))}
      </ul>

      {/* expandable rest */}
      <AnimatePresence initial={false}>
        {open && rest.length > 0 && (
          <motion.ul
            key="more"
            layout
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-2 space-y-2"
          >
            {rest.map((b, i) => (
              <li key={i} className="text-brand-slate">{b}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function Background() {
  return (
    <Section id="background" className={theme.colors.softGrad}>
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">Background</h2>
          <p className="mt-2 text-brand-slate">Recent experience and education.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {EXPERIENCES.map((exp) => (
            <ExpCard key={`${exp.title}-${exp.company}-${exp.dates}`} {...exp} />
          ))}
        </div>

        {/* Education */}
        <div className="mt-8">
          <div className={[
            theme.radii.md,
            theme.colors.surface,
            "border", theme.colors.border,
            theme.shadow.soft,
            "p-6"
          ].join(" ")}>
            <h3 className="text-xl font-semibold text-brand-ink">Education</h3>
            <p className="mt-1 text-brand-slate">
              {EDUCATION.degree} · {EDUCATION.org}
            </p>
            <span className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-brand-sage100 text-brand-sage600 text-sm font-medium">
              {EDUCATION.extra}
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
