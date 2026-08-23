import '../css/ProjectCard.css'
import IconGithub from '../../assets/icons/github.png'

const ProjectCard = ({key, image, name, description, technologies, path}) => {
    return (
        <div className='project-card' key={key}>
            <div className='project-image-container'>
                <img src={image} alt="" />
            </div>
            <div className='project-informations-container'>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className='technologies-and-repository-container'>
                    <div className='technologies'>
                        {technologies.map((technology) => (
                            <div key={technology} className='technology'>
                                {technology}
                            </div>
                        ))}
                    </div>
                    <a href={path.repository} target='_blank'><img src={IconGithub} className='icon-github' />Repositório</a>
                </div>
            </div>
            <a className='project-view-button' href={path.deploy} target='_blank'>VER PROJETO</a>
        </div>
    )
}

export default ProjectCard