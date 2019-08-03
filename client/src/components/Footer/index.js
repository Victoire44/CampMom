import React from "react";
import "./style.css";
import logo from '../Header/logo.png';

function Footer() {

    return (
        <footer className="footer">
            <img id="logo" src={logo} alt="CampMom" />
            <span>Camp.Mom 2019</span>
        </footer>
    );
}

export default Footer;