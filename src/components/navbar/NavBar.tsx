import './NavBar.css'
import {useEffect, useState} from "react";


const NavBar = () => {

    const [menu, setMenu] = useState("home")
    const handleMenuClick = (menuItem: string) => {
        setMenu(menuItem);
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["contact", "projects", "about", "home"];

            for (const sectionID of sections) {
                const element = document.getElementById(sectionID);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 350) {
                        setMenu(sectionID)
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="navbar">
            <ul className="nav-menu">
                <li className={menu === "home" ? "nav-item active" : "nav-item"}>
                    <a href="#home" onClick={() => handleMenuClick("home")}>Home</a>
                </li>

                <li className={menu === "about" ? "nav-item active" : "nav-item"}>
                    <a href="#about" onClick={() => handleMenuClick("about")}>About</a>
                </li>

                <li className={menu === "projects" ? "nav-item active" : "nav-item"}>
                    <a href="#projects" onClick={() => handleMenuClick("projects")}>Projects</a>
                </li>

                <li className={menu === "contact" ? "nav-item active" : "nav-item"}>
                    <a href="#contact" onClick={() => handleMenuClick("contact")}>Contact</a>
                </li>

            </ul>
        </nav>
    )
}

export default NavBar;