import { useProjects } from '../../hooks/useProjects'
import Reveal from '../animations/Reveal'
import '../css/Projects.css'
import ProjectCard from './ProjectCard';

const Projects = () => {

    const { projects } = useProjects();

    return (
            <section className="projects-container" id='projects'>
                <Reveal>
                    <div className='title-container'>
                        <h2>Projetos</h2>
                        <div className='line'></div>
                    </div>
                </Reveal>
                <Reveal>
                    <p className='introduction-text'>Confira aqui todos os meus projetos desenvolvidos até o momento. São eles: Chat-bph, academy, generator password, localiza-cep, boxShadow.css, bank-ts e calculador. Projetos que utilizei conceitos importantes e linguagens: javascript, typescript, framework (react), etc.</p>
                </Reveal>
                <div className='projects'>
                    {projects.map((project) => (
                        <Reveal key={project.name}>
                            <ProjectCard image={project.image} name={project.name} description={project.description} path={project.path} technologies={project.technologies} />
                        </Reveal>
                    ))}
                </div>
            </section>
    )
}

export default Projects