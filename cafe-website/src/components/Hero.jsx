import hero1 from '../images/photo_2026-02-15_23-45-50.jpg'; 
import hero2 from '../images/photo_2026-02-15_23-45-56.jpg'; 
import hero3 from '../images/photo_2026-02-15_23-57-17.jpg'; 
import logo from '../images/logo.png';

const Hero = () => {
  return (
    <section style={styles.section}>
      {/* Split Background Images */}
      <div style={styles.bgContainer}>
        {/* Left Image */}
        <div style={{
          ...styles.bgImage, 
          backgroundImage: `url(${hero1})`,
          backgroundPosition: 'center left'
        }}></div>
        
        {/* Middle Image */}
        <div style={{
          ...styles.bgImage, 
          backgroundImage: `url(${hero3})`,
          backgroundPosition: 'center'
        }}></div>

        {/* Right Image */}
        <div style={{
          ...styles.bgImage, 
          backgroundImage: `url(${hero2})`,
          backgroundPosition: 'center right'
        }}></div>
      </div>

      <div style={styles.overlay}></div>
      
      <div style={styles.content}>
        <img src={logo} alt="Revival Coffee GA" style={styles.heroLogo} />
        <h1 style={styles.title}>Revival Coffee GA</h1>
        <p style={styles.subtitle}>
          Savannah's Premier Mobile Coffee Cart & Espresso Bar
        </p>
        <p style={{...styles.subtitle, fontSize: "1.2rem", fontStyle: "italic"}}>
          Bringing the finest brews to your neighborhood & events.
        </p>

        <div style={styles.buttons}>
          <button style={styles.primaryBtn}>Find Our Location</button>
          <button style={styles.secondaryBtn}>Book Us for Events</button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    height: "100vh",
    position: "relative",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "'Helvetica Neue', sans-serif",
    overflow: "hidden",
  },
  bgContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex", // Creates the side-by-side layout
    zIndex: 0,
  },
  bgImage: {
    width: "33.33%", // Each takes up a third
    height: "100%",
    backgroundSize: "cover", // Fills the space without distortion
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)", 
    background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
    zIndex: 1, // Above images, below text
  },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "900px",
    padding: "40px",
    animation: "fadeIn 1.5s ease-out",
  },
  heroLogo: {
    maxWidth: "200px",
    width: "100%",
    marginBottom: "20px",
    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))", // Makes it pop against any background
  },
  title: {
    fontSize: "4.5rem",
    marginBottom: "1rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    fontWeight: "700",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
    lineHeight: "1.6",
    maxWidth: "700px",
    margin: "0 auto 2rem auto",
  },
  buttons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    padding: "15px 40px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    backgroundColor: "#d4a373", // Coffee color
    color: "white",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 15px rgba(212, 163, 115, 0.4)",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  secondaryBtn: {
    padding: "15px 40px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "background-color 0.2s, color 0.2s",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
};

export default Hero;
