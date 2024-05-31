/*
  File:about.jsx
  Name:Anteneh Guta
  Student ID:301134828
  Date : 29/05/2024
*/

import './about.css';
import profileImage from '../assets/profile.jpg';
import resumePDF from '../assets/resume.pdf';

export default function AboutPage(){
    return(
        <div className="about-page">
        <h1>About Me</h1>
        <img src={profileImage} alt="Profile" className="profile-image" />
        <p>My name is Anteneh Guta. I am a software developer with expertise in web development and mobile applications. I am passionate about creating efficient and scalable software solutions.</p>
        <a href={resumePDF} download className="btn">Download My Resume</a>
    </div>
);
}