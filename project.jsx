/*
  File:project.jsx
  Name:Anteneh Guta
  Student ID:301134828
  Date : 29/05/2024
*/
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';

import './project.css';

const projects = [
    {
        image: project1Image,
        title: 'The Bug Smasher Game',
        description: 'A fun, interactive web-based game where players try to "smash" bugs that appear randomly on the screen by clicking on them.',
    },
    {
        image: project2Image,
        title: 'Photo Gallery Website - Auto Move',
        description: 'The Photo Gallery Website shows an assembly of images in a visually charming slideshow.',
    },
    {
        image: project3Image,
        title: 'The Heritage Sites of Ethiopia website',
        description: 'A platform that highlights the rich cultural and historical heritage of Ethiopia',
    },
];

export default function ProjectPage() {
    return (
        <div className="project-page">
            <h1>My Projects</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
