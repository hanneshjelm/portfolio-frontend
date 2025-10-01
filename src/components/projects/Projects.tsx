import './Projects.css'
import projects_data from '../../assets/projects/projects_data.tsx'

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <header className="projects-title">
                <h2 className= "reverse">My Projects</h2>
            </header>
            <div className="projects-container">
                {projects_data.map((item, index) => {
                    return (<div key={index} className="project-item">
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <img src={item.img} alt={item.name} />
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p> <br/>
                                        <span className="view-project">View Project →</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects