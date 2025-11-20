import React from "react";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer =()=> {
    return(
        <footer className="footer">
            <div className="footer-container d-flex justify-content-between">
                <h2 className="logo">PortFolio</h2>

                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/youssef-noaman-b21a4729b"><img src={navIcon1} alt="" /></a>
                    <a href="https://www.facebook.com/share/1a7FomWuuW/"><img src={navIcon2} alt="" /></a>
                    <a href="#"><img src={navIcon3} alt="" /></a>
                    <a href="https://github.com/YoussefNoaman96" target="_blank" rel="noreferrer" className="github-icon">
                        <FontAwesomeIcon icon={faGithub}  />
                    </a>
                </div>
            </div>
            <p className="copy">© Copyrights 2025 — All Rights Reserved Here By Youssef Noaman</p>
        </footer>
    )
}

