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

const About = () => {
    return (
        <section id="about" className="About">
            <header className="about-title">
                <h2>About Me</h2>
            </header>
            <article className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="profile_image" />
                </div>
                <div className="about-right">
                    <p className="about-paragraph">
                        I am a Java Developer currently studying at Nackademin, where I’m gaining hands-on
                        experience in modern software development. My focus areas include Java, object-oriented
                        programming, backend development with Spring Boot, REST APIs, Hibernate, and Thymeleaf,
                        as well as frontend fundamentals (HTML, CSS, JavaScript). I have also worked with databases
                        (MySQL, MongoDB), explored DevOps practices, and gained insights into IT security and
                        software design patterns.
                    </p>
                    <p className="about-paragraph">
                        Before studying I've had experience with
                        running a company and working in industrial production, which taught me the value of
                        responsibility, communication, and structured problem-solving. These experiences, combined
                        with my technical training, give me a unique ability to approach challenges from both a
                        practical and technical perspective.
                    </p>
                </div>

                <div className="about-skills">
                    <div className="skill-item skill-item-one">
                        <img src={java_logo} alt="java logo"/>
                        <p>Java</p>
                    </div>
                    <div className="skill-item skill-item-two">
                        <img src={springboot_logo} alt="html logo"/>
                        <p>Spring Boot</p>
                    </div>
                    <div className="skill-item skill-item-three">
                        <img src={mysql_logo} alt="mysql logo"/>
                        <p>MySQL</p>
                    </div>
                    <div className="skill-item skill-item-four">
                        <img src={git_logo} alt="git logo"/>
                        <p>Git</p>
                    </div>
                    <div className="skill-item skill-item-five">
                        <img src={css_logo} alt="css logo"/>
                        <p>CSS</p>
                    </div>
                    <div className="skill-item skill-item-six">
                        <img src={react_logo} alt="React logo"/>
                        <p>React</p>
                    </div>
                    <div className="skill-item skill-item-seven">
                        <img src={html_logo} alt="html logo"/>
                        <p>HTML</p>
                    </div>
                    <div className="skill-item skill-item-eight">
                        <img src={js_logo} alt="html logo"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-item skill-item-nine">
                        <img src={mongodb_logo} alt="html logo"/>
                        <p>MongoDB</p>
                    </div>
                </div>

            </article>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h2>2+</h2>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h2>15+</h2>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h2>10+</h2>
                    <p>TECHNOLOGIES LEARNED</p>
                </div>
            </div>
        </section>
    )
}

export default About