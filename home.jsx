/*
  File:home.jsx
  Name:Anteneh Guta
  Student ID:301134828
  Date : 29/05/2024
*/


import { Link } from "react-router-dom";
import './home.css';

export default function HomePage(){
    return (
        <div className="home-page">
            <h1>Welcome to My Portfolio</h1>
    <p>Hello! My name is Anteneh Guta, a Software engineering -AI Technology Student. </p>
    <p>I love coding ,I am learning Web application Development. </p>
    <p> My goal in future ,as a dedicated,imaginative software programmer, to use technology in order to solve problems which make life better</p>
    <Link to="/about" className="btn">Click to Know more about me</Link>
    </div>
    );
}