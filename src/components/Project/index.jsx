import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard( { project } ) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <a href=''><Button variant="primary">Repo</Button></a>
        <a href=''><Button variant="primary">Deployed site</Button></a>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;