import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <a
                    href="https://github.com/hanneshjelm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github Profile"
                >
                    <FaGithub/>
                </a>
                <a
                    href="https://linkedin.com/in/hannes-hjelm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin Profile"
                >
                    <FaLinkedin/>
                </a>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p>© 2025 Hannes Hjelm</p>
            </div>
        </footer>
    )
}

export default Footer