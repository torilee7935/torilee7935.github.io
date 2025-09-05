import { Container } from "@/shared/ui"
import { PROFILE } from "@/data/profile"

export function Footer() {
  return (
    <footer className="py-10 text-center text-slate-500">
      <Container>
        <p className="text-sm">© {new Date().getFullYear()} {PROFILE.name}. Built with ♥, React, and Tailwind.</p>
      </Container>
    </footer>
  )
}
