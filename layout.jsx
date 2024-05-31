/*
  File:layout.jsx
  Name:Anteneh Guta
  Student ID:301134828
  Date : 29/05/2024
*/

import { Link } from "react-router-dom";
import './layout.css';
import logo from '../assets/logo.png'; 

export default function Layout() {
    return (
        <>
            <header>
                <img src={logo} alt="Logo" className="logo" />
                <h1>My Portfolio</h1>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/project">Projects</Link> | <Link to="/contact">Contact</Link> | <Link to="/services">Services</Link>
                </nav>
            </header>
            <hr />
        </>
    );
}
