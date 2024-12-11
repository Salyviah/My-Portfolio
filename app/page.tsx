import { Nav } from "../components/nav"
import { Hero } from "../components/hero"
import { Achievements } from "../components/achievements"
import { Projects } from "../components/project"
import { Skills } from "../components/skills"
import { Contact } from "../components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Achievements />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}