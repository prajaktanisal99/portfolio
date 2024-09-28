import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/footer.css";

const Footer = () => {
  const handlePhoneClick = () => {
    console.log("make a call");
    // In a real scenario, you might integrate with a phone service, or use 'tel:' for mobile.
    window.open("tel:+123456789"); // Example: opens phone dialer
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/prajakta-nisal/", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:nisalprajakta99@gmail.com");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/your-github-username", "_blank");
  };

  return (
    <footer className="footer">
      <p>Prajakta Nisal</p>

      <div className="contact">
        <FontAwesomeIcon icon={faPhone} onClick={handlePhoneClick} />
        <FontAwesomeIcon icon={faLinkedin} onClick={handleLinkedInClick} />
        <FontAwesomeIcon icon={faEnvelope} onClick={handleEmailClick} />
        <FontAwesomeIcon icon={faGithub} onClick={handleGithubClick} />
      </div>
    </footer>
  );
};

export default Footer;
