import './NavBar.css';
import { useEffect, useState } from "react";

const NavBar = () => {
    const [menu, setMenu] = useState("home");

    useEffect(() => {
        const sectionIDs = ["home", "about", "projects", "contact"];

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && sectionIDs.includes(entry.target.id)) {
                    setMenu(entry.target.id);
                }

                if (
                    entry.isIntersecting &&
                    entry.target.matches(
                        ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, header h2"
                    )
                ) {
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.6 });

        sectionIDs.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        const revealElements = document.querySelectorAll(
            ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, header h2"
        );
        revealElements.forEach(element => observer.observe(element));

        return () => observer.disconnect();
    }, []);


    return (
        <nav className="navbar">
            <ul className="nav-menu">
                <li className={menu === "home" ? "nav-item active" : "nav-item"}>
                    <a href="#home">Home</a>
                </li>
                <li className={menu === "about" ? "nav-item active" : "nav-item"}>
                    <a href="#about">About</a>
                </li>
                <li className={menu === "projects" ? "nav-item active" : "nav-item"}>
                    <a href="#projects">Projects</a>
                </li>
                <li className={menu === "contact" ? "nav-item active" : "nav-item"}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
