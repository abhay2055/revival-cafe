import React from 'react';
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer id="contact" style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.info}>
          <img src={logo} alt="Revival Coffee GA" style={styles.footerLogo} />
          <p style={styles.text}>Savannah, Georgia, USA</p>
          <p style={styles.text}>Mobile Coffee Cart & Espresso Bar</p>
          <br/>
          <p style={styles.text}>Email: hello@revivalcoffeega.com</p>
          <p style={styles.text}>Phone: (912) 555-0123</p>
        </div>
        
        <div style={styles.socials}>
          <h4 style={styles.socialHeading}>Follow Us</h4>
          <div style={styles.links}>
            <a href="#" style={styles.link}>Instagram</a>
            <a href="#" style={styles.link}>Facebook</a>
            <a href="#" style={styles.link}>TikTok</a>
          </div>
        </div>
      </div>
      <div style={styles.copyright}>
        &copy; {new Date().getFullYear()} Revival Coffee GA. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "60px 20px 20px",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "40px",
    marginBottom: "40px",
  },
  footerLogo: {
    height: "100px",
    marginBottom: "20px",
    filter: "brightness(0) invert(1)", // Makes the logo white (if it's black/colored), assuming dark bg
  },
  brand: {
    fontSize: "1.8rem",
    marginBottom: "15px",
    color: "#d4a373",
  },
  text: {
    marginBottom: "5px",
    opacity: 0.9,
  },
  socialHeading: {
    fontSize: "1.2rem",
    marginBottom: "15px",
    color: "#faedcd",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  copyright: {
    textAlign: "center",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "20px",
    fontSize: "0.9rem",
    opacity: 0.7,
  },
};

export default Footer;
