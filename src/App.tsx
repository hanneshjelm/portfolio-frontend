import './App.css'
import NavBar from "./components/navbar/NavBar.tsx";
import Hero from "./components/hero/Hero.tsx";
import About from "./components/about/About.tsx";
import Projects from "./components/projects/Projects.tsx";
import Contact from "./components/contact/Contact.tsx";

function App() {
  return (
      <div>
          <NavBar/>
          <Hero/>
          <About/>
          <Projects/>
          <Contact/>
      </div>
  )
}

export default App
