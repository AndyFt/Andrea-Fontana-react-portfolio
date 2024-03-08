import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import "./ProjectCardStyles.css";

function ProjectCard({ project }) {
  const [showGif, setShowGif] = useState(false);
  const handleGif = () => {
    setShowGif(!showGif);
  };

  return (
    <>
      <Card className="project-card">
        <Card.Img variant="top" fluid src={project.image} />
        <Card.Body className="project-body">
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <div className="button-container">
            <a href={project.repoLink} target="_blank">
              {" "}
              <Button variant="top">View Code</Button>
            </a>
            {project.deployedLink && (
              <a href={project.deployedLink} target="_blank">
                <Button variant="top">Deployed site</Button>
              </a>
            )}
            {project.gifLink && (
              <a href='#' onClick={handleGif}>
                <Button variant="top">Mobile V</Button></a>
            )}
          </div>
        </Card.Body>
      </Card>

      <Modal show={showGif} onHide={handleGif}>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={project.gifLink} alt={`${project.title} gif`} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCard;
