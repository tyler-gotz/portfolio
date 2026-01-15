import React from "react"
import Hero from "./components/hero"
import About from "./components/about"

const App: React.FC = () => {
  return (
    <div className="size-full overflow-y-auto">
      <Hero />
      <About />
    </div>
  )
}

export default App
