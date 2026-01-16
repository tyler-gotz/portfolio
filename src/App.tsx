import React from "react"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"

const App: React.FC = () => {
  return (
    <div className="size-full overflow-y-auto">
      <Hero />
      <About />
      <Skills />
    </div>
  )
}

export default App
