import Project from '../Project';
import projects from '../../projects.json'

const ProjectGallery = () => {

  return (
  <>
    <h1>These are my projects!</h1>

    {projects.map(proje => (
      <Project key={project.id} project={project} />
    ))}
  </>
  )
}

export default ProjectGallery;