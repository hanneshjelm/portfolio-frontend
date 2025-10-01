import './About.css'
import profile_img from '../../assets/profile_img.jpeg'
import java_logo from '../../assets/logos/java_logo.png'
import mysql_logo from '../../assets/logos/mysql-5-logo-png-transparent.png'
import git_logo from '../../assets/logos/git-icon-logo-png-transparent.png'
import css_logo from '../../assets/logos/css logo.png'
import html_logo from '../../assets/logos/Html logo.png'
import react_logo from '../../assets/logos/react logo.png'
import js_logo from '../../assets/logos/js logo.png'
import mongodb_logo from '../../assets/logos/MongoDB.png'
import springboot_logo from '../../assets/logos/springboot_logo.png'
import postgres_logo from '../../assets/logos/postgres_logo.png'

const About = () => {
    return (
        <section id="about" className="About">
            <header className="about-title">
                <h2>About Me</h2>
            </header>
            <article className="about-sections">
                <div className="about-left scroll-reveal-left">
                    <img src={profile_img} alt="profile_image" />
                </div>
                <div className="about-right scroll-reveal-right">
                    <p className="about-paragraph">
                        I am a Java Developer currently studying at Nackademin, where I'm gaining hands-on
                        experience in modern software development. My focus areas include Java, object-oriented
                        programming, backend development with Spring Boot, REST APIs, Hibernate, and Thymeleaf,
                        as well as frontend fundamentals (HTML, CSS, JavaScript). I have also worked with databases
                        (MySQL, MongoDB), explored DevOps practices, and gained insights into IT security and
                        software design patterns.
                    </p>
                    <p className="about-paragraph">
                        Alongside my studies, I have gained experience running my own company and working in
                        industrial production, which has strengthened my skills in responsibility, communication,
                        and structured problem-solving. Combined with my technical training, these experiences give
                        me a balanced perspective, allowing me to approach challenges both practically and technically.
                    </p>
                </div>

                <div className="about-skills">
                    <div className="skill-item scroll-reveal-scale scroll-reveal-delay-1">
                        <img src={java_logo} alt="java logo"/>
                        <p>Java</p>
                    </div>
                    <div className="skill-item scroll-reveal-scale scroll-reveal-delay-2">
                        <img src={springboot_logo} alt="spring boot logo"/>
                        <p>Spring Boot</p>
                    </div>
                    <div className="skill-item scroll-reveal-scale scroll-reveal-delay-3">
                        <img src={mysql_logo} alt="mysql logo"/>
                        <p>MySQL</p>
                    </div>
                    <div className="skill-item scroll-reveal-scale scroll-reveal-delay-4">
                        <img src={git_logo} alt="git logo"/>
                        <p>Git</p>
                    </div>
                    <div className="skill-item scroll-reveal-scale scroll-reveal-delay-1">
                        <img src={css_logo} alt="css logo"/>
                        <p>CSS</p>
                    </div>
                    <div className="skill-item scroll-reveal-scale scroll-reveal-delay-2">
                        <img src={react_logo} alt="React logo"/>
                        <p>React</p>
                    </div>
                    <div className="skill-item scroll-reveal-scale scroll-reveal-delay-3">
                        <img src={html_logo} alt="html logo"/>
                        <p>HTML</p>
                    </div>
                    <div className="skill-item scroll-reveal-scale scroll-reveal-delay-4">
                        <img src={js_logo} alt="javascript logo"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-item scroll-reveal-scale scroll-reveal-delay-1">
                        <img src={mongodb_logo} alt="mongodb logo"/>
                        <p>MongoDB</p>
                    </div>
                    <div className="skill-item scroll-reveal-scale scroll-reveal-delay-2">
                        <img src={postgres_logo} alt="postgresql logo"/>
                        <p>PostgreSQL</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default About