// src/components/Contact.tsx
import { theme } from "@/theme"
import { Container, Section } from "@/shared/ui"
import { Mail } from "lucide-react"

export function Contact() {
  // quick class helpers so everything stays consistent
  const label = "block text-sm font-medium text-brand-slate mb-1"
  const input =
    `w-full h-11 ${theme.radii.md} ${theme.colors.surface} border ${theme.colors.border} 
     px-3 outline-none transition 
     focus:ring-2 ${theme.colors.ring}`
  const textarea =
    `w-full h-36 ${theme.radii.md} ${theme.colors.surface} border ${theme.colors.border} 
     px-3 py-2 outline-none transition 
     focus:ring-2 ${theme.colors.ring} resize-vertical`

  return (
    <Section id="contact" className={theme.colors.softGrad}>
      <Container>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">Contact</h2>
          <p className="mt-2 text-brand-slate">
            Send me a note and I'll get back to you!
          </p>

          {/* FormSubmit: replace with your email below */}
          <form
            action="https://formsubmit.co/TORILEE7935@GMAIL.COM"
            method="POST"
            className={`mt-6 p-6 ${theme.radii.md} ${theme.colors.surface} border ${theme.colors.border} ${theme.shadow.soft}`}
          >
            {/* FormSubmit options */}
            <input type="hidden" name="_subject" value="Portfolio Contact — torilee7935.github.io" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            {/* redirect after submit (optional): update this to your thanks anchor or page */}
            <input type="hidden" name="_next" value="https://torilee7935.github.io/#contact" />
            {/* spam honeypot */}
            <input type="text" name="_honey" className="hidden" aria-hidden="true" />

            <div className="grid gap-4">
              <div>
                <label className={label} htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required className={input} />
              </div>

              <div>
                <label className={label} htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className={input} />
              </div>

              <div>
                <label className={label} htmlFor="message">Message</label>
                <textarea id="message" name="message" required className={textarea} />
              </div>

              <button
                type="submit"
                className={`inline-flex items-center justify-center h-11 px-5 ${theme.radii.md} ${theme.colors.primary} ${theme.shadow.soft} ${theme.shadow.hover} focus:outline-none focus:ring-2 ${theme.colors.ring}`}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </div>
          </form>

        </div>
      </Container>
    </Section>
  )
}
