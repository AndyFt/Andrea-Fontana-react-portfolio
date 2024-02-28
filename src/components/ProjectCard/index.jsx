import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import "./ProjectCardStyles.css"

function ProjectCard( { project } ) {
  return (
    <Card className='project-card'>
    <Card.Img variant="top" fluid src={project.image} />
    <Card.Body className='project-body'>
      <Card.Title>{project.title}</Card.Title>
      <Card.Text>{project.description}</Card.Text>
      <div className='button-container'>
      <a  href={project.repoLink}> <Button variant='top'>View Code</Button></a>
      <a href={project.deployedLink}><Button variant="top">Deployed site</Button></a>
      </div>
    </Card.Body>
    </Card>
  );
}

export default ProjectCard;