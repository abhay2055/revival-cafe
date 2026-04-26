const Services = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Our Services</h2>
      <p style={styles.subHeading}>Bringing the cafe experience to you, wherever you are in Savannah.</p>
      
      <div style={styles.grid}>
        {/* Service 1 */}
        <div style={styles.card}>
          <div style={styles.imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Espresso Bar" 
              style={styles.image}
            />
          </div>
          <h3 style={styles.cardTitle}>Mobile Espresso Bar</h3>
          <p style={styles.cardText}>
            We bring a full-service espresso bar to your location. 
            Enjoy handcrafted lattes, cappuccinos, and more, made with premium beans.
          </p>
        </div>

        {/* Service 2 */}
        <div style={styles.card}>
          <div style={styles.imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1511795409835-a960427cfbd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Weddings & Events" 
              style={styles.image}
            />
          </div>
          <h3 style={styles.cardTitle}>Weddings & Corporate Events</h3>
          <p style={styles.cardText}>
            Planning a special event? Our mobile cart adds a touch of elegance and energy.
            Perfect for weddings, corporate gatherings, and parties.
          </p>
        </div>

        {/* Service 3 */}
        <div style={styles.card}>
          <div style={styles.imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Neighborhood Service" 
              style={styles.image}
            />
          </div>
          <h3 style={styles.cardTitle}>Neighborhood Pop-ups</h3>
          <p style={styles.cardText}>
            Catch us brewing in your neighborhood! We bring the community together
            with great coffee and good vibes. Check our schedule for locations.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#333",
    fontFamily: "'Helvetica Neue', sans-serif",
  },
  subHeading: {
    fontSize: "1.2rem",
    color: "#666",
    marginBottom: "50px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  imageContainer: {
    height: "250px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  cardTitle: {
    fontSize: "1.5rem",
    margin: "20px 0 10px",
    color: "#2c3e50",
  },
  cardText: {
    padding: "0 20px 30px",
    color: "#555",
    lineHeight: "1.6",
  },
};

export default Services;
