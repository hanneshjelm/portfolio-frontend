import NavBar from "./components/navbar/NavBar.tsx";
import Hero from "./components/hero/Hero.tsx";
import About from "./components/about/About.tsx";
import Projects from "./components/projects/Projects.tsx";
import Contact from "./components/contact/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";
import ParticleBackground from "./components/AnimatedBackground/Particles.tsx"

function App() {
  return (
      <>
          <ParticleBackground />
          <div style={{ position: 'relative', zIndex: 1 }}>
          <NavBar/>
          <Hero/>
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
      </div>
      </>

  )
}

export default App