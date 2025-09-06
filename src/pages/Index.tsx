import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Background } from "@/components/Background";
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { theme } from "@/theme"
import React from "react"

export default function IndexPage() {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${theme.colors.bg} ${theme.colors.text.primary}`}>
      {/* Subtle starry background dots */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.08]" style={{
        backgroundImage:
          "radial-gradient(circle at 10% 10%, white 1px, transparent 1px)," +
          "radial-gradient(circle at 30% 20%, white 1px, transparent 1px)," +
          "radial-gradient(circle at 70% 30%, white 1px, transparent 1px)," +
          "radial-gradient(circle at 90% 80%, white 1px, transparent 1px)",
        backgroundSize: "120px 120px, 160px 160px, 180px 180px, 140px 140px",
      }}/>

      <Navbar/>
      <Hero/>
      <Background /> 
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
