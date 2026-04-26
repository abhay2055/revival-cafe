const Location = () => {
  return (
    <section id="location" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.textColumn}>
          <h2 style={styles.heading}>Where is the Cart?</h2>
          <p style={styles.text}>
            We're a mobile coffee bar, so we move around Savannah! 
            From Forsyth Park to Starland District, catch us at your favorite spots.
          </p>
          <p style={styles.highlight}>
            Follow our daily stories to find our current location.
          </p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.button}>
            Check Instagram @RevivalCoffeeGA
          </a>
        </div>
        <div style={styles.imageColumn}>
          <img 
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Coffee Cart Location" 
            style={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#fff",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "50px",
  },
  textColumn: {
    flex: "1 1 400px",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    fontFamily: "'Helvetica Neue', sans-serif",
    color: "#d4a373",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    marginBottom: "20px",
    color: "#555",
  },
  highlight: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#2c3e50",
  },
  button: {
    display: "inline-block",
    padding: "15px 30px",
    backgroundColor: "#2c3e50",
    color: "white",
    textDecoration: "none",
    borderRadius: "30px",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
  imageColumn: {
    flex: "1 1 400px",
  },
  image: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
};

export default Location;
