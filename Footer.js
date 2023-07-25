import React from "react";
import '../assets/css/Footer.css';


function Footer () {
    let date = new Date();
  let year = date.getFullYear();
    return (
        <div className="footer footer-expand-lg footer-dark bg-dark" >
            <ul className="footer-nav">
                <li>About</li>
                <li>Projects</li>
                <li>Resume</li>
            </ul>
            <span className="footer-text">Copyright © {year} SB</span>
        </div>
    );
};
export default Footer;