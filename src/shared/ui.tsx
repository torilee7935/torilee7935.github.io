import { theme } from "@/theme"
import React from "react"

export const Section: React.FC<{ id?: string; className?: string; children: React.ReactNode }> = ({ id, className = "", children }) => (
  <section id={id} className={`${theme.layout.padY} ${theme.layout.padX} ${className}`}>{children}</section>
)

export const Container: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = "", children }) => (
  <div className={`${theme.layout.maxW} mx-auto ${className}`}>{children}</div>
)

type FieldProps = {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  error?: string
}

export function Field({ label, name, type = "text", required = false, placeholder = "", value, onChange, error }: FieldProps) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-300 mb-2">
        {label}{required && <span className="text-sky-300"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${theme.radii.lg} w-full bg-slate-900/60 border border-slate-800 focus:border-sky-400 focus:ring-2 focus:ring-sky-300 outline-none text-slate-100 placeholder:text-slate-500 px-4 py-3 transition ${theme.shadow.soft}`}
      />
      {error && <span className="text-sm text-rose-300 mt-2 block">{error}</span>}
    </label>
  )
}
