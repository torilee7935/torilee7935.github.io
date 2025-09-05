import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Container, Section, Field } from "@/shared/ui"
import { theme } from "@/theme"

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<{ [k: string]: string }>({})
  const [sent, setSent] = useState(false)

  function validate() {
    const e: { [k: string]: string } = {}
    if (!form.name.trim()) e.name = "Please enter your name."
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email)) e.email = "Use a valid email address."
    if (form.message.trim().length < 10) e.message = "Message should be at least 10 characters."
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function onChange(ev: any) {
    setForm({ ...form, [ev.target.name]: ev.target.value })
  }

  async function onSubmit(ev: any) {
    ev.preventDefault()
    if (!validate()) return
    await new Promise(r => setTimeout(r, 400))
    setSent(true)
  }

  return (
    <Section id="contact">
      <Container>
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-100">Contact</h2>
          <p className="text-slate-400 mt-2">Shoot a note and I’ll get back soon. The form validates on the client; connect a service to actually send.</p>
        </div>

        <div className={`grid gap-6 md:grid-cols-3`}>
          <form onSubmit={onSubmit} className={`md:col-span-2 p-6 ${theme.radii.xl} ${theme.colors.surface} border border-slate-800/60 ${theme.shadow.soft}`}>
            <div className="grid gap-5">
              <Field label="Name" name="name" required placeholder="Your name" value={form.name} onChange={onChange} error={errors.name}/>
              <Field label="Email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={onChange} error={errors.email}/>
              <label className="block">
                <span className="block text-sm font-medium text-slate-300 mb-2">Message<span className="text-sky-300"> *</span></span>
                <textarea name="message" required placeholder="What’s up?"
                          value={form.message} onChange={onChange}
                          className={`${theme.radii.lg} w-full h-36 bg-slate-900/60 border border-slate-800 focus:border-sky-400 focus:ring-2 focus:ring-sky-300 outline-none text-slate-100 placeholder:text-slate-500 px-4 py-3 transition ${theme.shadow.soft}`}
                />
                {errors.message && <span className="text-sm text-rose-300 mt-2 block">{errors.message}</span>}
              </label>
              <button type="submit"
                      className={`inline-flex items-center justify-center px-5 py-3 ${theme.radii.lg} bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium transition transform hover:translate-y-[-1px] active:translate-y-[0px] ${theme.shadow.soft} ${theme.shadow.hover}`}>
                {sent ? "Sent – thank you!" : "Send Message"}
              </button>
            </div>
          </form>

          <div className={`p-6 ${theme.radii.xl} ${theme.colors.surface} border border-slate-800/60 ${theme.shadow.soft} space-y-4`}>
            <p className="text-slate-300">Prefer socials?</p>
            <div className="flex gap-3">
              <a aria-label="GitHub" href="https://github.com/torilee7935" target="_blank" rel="noreferrer" className="p-2 border border-slate-800/60 ${theme.radii.full}"><Github className="w-5 h-5 text-slate-300"/></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/torielizabethlee" target="_blank" rel="noreferrer" className="p-2 border border-slate-800/60 ${theme.radii.full}"><Linkedin className="w-5 h-5 text-slate-300"/></a>
              <a aria-label="Email" href="mailto:torilee7935@gmail.com" className="p-2 border border-slate-800/60 ${theme.radii.full}"><Mail className="w-5 h-5 text-slate-300"/></a>
            </div>
            <p className="text-sm text-slate-500">
              Update these links to your real profiles. The email icon can scroll to the form or open your mailto link.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
