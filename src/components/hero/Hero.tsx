import './Hero.css'
import resume from '../../assets/Hannes Hjelm CV.pdf'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <h1>Hello, I'm <span>Hannes</span>, a Java developer based in Sweden.</h1>
            <div className="hero-body">
                <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-resume-button"
                    download="Hannes_Hjelm_CV.pdf"
                >
                    My Resume
                </a>
            </div>
        </section>
    )
}

export default Hero