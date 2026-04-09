import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const particlesLoaded = async (container?: Container) => {
        console.log("Particles loaded!", container);
    };

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                backgroundColor: "#161513"
            }}
            options={{
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 30,
                        density: {
                            enable: true,
                            width: 315
                        }
                    },
                    color: {
                        value: ["#ffffff", "#ffffff", "#ffffff", "#84ff70", "#6FCF61"]
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: { min: 0.2, max: 0.5 },
                        animation: {
                            enable: true,
                            speed: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: { min: 0.1, max: 3 },
                        animation: {
                            enable: true,
                            speed: 1,
                            sync: false
                        }
                    },
                    links: {
                        enable: false
                    },
                    move: {
                        enable: true,
                        speed: 0.3,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: "out"
                    }
                },
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onHover: {
                            enable: false,
                            mode: "repulse"
                        },
                        onClick: {
                            enable: false,
                            mode: "push"
                        },
                        resize: { enable: true }
                    }
                },
                retina_detect: true
            }}
        />
    );
};

export default ParticleBackground;