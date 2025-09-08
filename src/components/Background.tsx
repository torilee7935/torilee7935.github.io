import { motion } from "framer-motion";
import { theme } from "@/theme";
import { Container, Section } from "@/shared/ui";
import { EXPERIENCES, EDUCATION } from "@/data/background";

type ExpCardProps = {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
  className?: string;
};

function ExpCard({ title, company, dates, bullets, className }: ExpCardProps) {
  return (
    <motion.article
      layout
      className={[
        "group inline-block w-full align-top",
        "mb-5 break-inside-avoid", // masonry magic
        theme.radii.md,
        theme.colors.surface,
        "border", theme.colors.border,
        theme.shadow.soft, theme.shadow.hover,
        "transition-colors overflow-hidden",
        "p-6",
        className || ""
      ].join(" ")}
    >
      <header className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-brand-ink">{title}</h3>
          <p className="mt-0.5 text-brand-slate">{company}</p>
          <p className="mt-0.5 text-sm text-brand-slate">{dates}</p>
        </div>
      </header>

      {/* Always open bullets */}
      <ul className="mt-3 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="text-brand-slate">{b}</li>
        ))}
      </ul>
    </motion.article>
  );
}

export function Background() {
  return (
    <Section id="background" className={theme.colors.softGrad}>
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">Background</h2>
        </div>

        {/* Education FIRST */}
        <div
          className={[
            theme.radii.md,
            theme.colors.surface,
            "border", theme.colors.border,
            theme.shadow.soft,
            "p-6 mb-6"
          ].join(" ")}
        >
          <h3 className="text-xl font-semibold text-brand-ink">Education</h3>
          <p className="mt-1 text-brand-slate">
            {EDUCATION.degree} · {EDUCATION.org}
          </p>
          {EDUCATION.extra && (
            <span className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-brand-sage100 text-brand-sage600 text-sm font-medium">
              {EDUCATION.extra}
            </span>
          )}
        </div>

        {/* Experiences — true masonry */}
        <div className="columns-1 sm:columns-2 gap-5">
          {EXPERIENCES.map((exp) => (
            <ExpCard
              key={`${exp.title}-${exp.company}-${exp.dates}`}
              {...exp}
              className="mb-5 break-inside-avoid"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
