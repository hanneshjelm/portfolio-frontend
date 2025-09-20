import './App.css'
import NavBar from "./components/navbar/NavBar.tsx";
import Hero from "./components/hero/Hero.tsx";
import About from "./components/about/About.tsx";
import Projects from "./components/projects/Projects.tsx";

function App() {
  return (
      <div>
          <NavBar/>
          <Hero/>
          <About/>
          <Projects/>
      </div>
  )
}

export default App
