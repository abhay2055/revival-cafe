import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, isAdmin, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.scrolled : {}) }}>
      <div style={styles.logoContainer} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <h1 style={{...styles.logoText, ...(scrolled ? styles.scrolledLogoText : {})}}>Revival Coffee GA</h1>
      </div>
      <ul style={styles.links}>
        <li><a href="#" style={styles.link}>Home</a></li>
        <li><a href="#services" style={styles.link}>Services</a></li>
        <li><a href="#order" style={styles.link}>Order Online</a></li>
        <li><a href="#location" style={styles.link}>Location</a></li> 
        <li><a href="#contact" style={styles.cta}>Book Us</a></li>
        {isAdmin && (
          <li>
            <button onClick={() => navigate('/admin-dashboard')} style={styles.adminBtn}>Admin Panel</button>
          </li>
        )}
        {!isLoggedIn ? (
          <>
            <li>
              <button onClick={() => navigate('/login')} style={styles.loginBtn}>Login</button>
            </li>
            <li>
              <button onClick={() => navigate('/register')} style={styles.registerBtn}>Register</button>
            </li>
          </>
        ) : (
          <li>
            <button onClick={logout} style={styles.logoutBtn}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
    backgroundColor: 'transparent',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    color: 'white',
  },
  scrolled: {
    backgroundColor: 'rgba(44, 62, 80, 0.95)',
    padding: '10px 50px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  logoText: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#fff',
    margin: 0,
    fontFamily: '"Playfair Display", serif',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    transition: 'all 0.3s ease',
  },
  scrolledLogoText: {
    fontSize: '24px',
  },
  links: {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    alignItems: 'center',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '16px',
    transition: 'color 0.3s',
  },
  cta: {
    backgroundColor: '#d4a373',
    padding: '10px 20px',
    borderRadius: '25px',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  loginBtn: {
    backgroundColor: '#d4a373',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '25px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  registerBtn: {
    backgroundColor: 'transparent',
    border: '2px solid #d4a373',
    padding: '10px 20px',
    borderRadius: '25px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  adminBtn: {
    backgroundColor: '#e74c3c',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '25px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  logoutBtn: {
    backgroundColor: 'transparent',
    border: '2px solid #e74c3c',
    padding: '10px 20px',
    borderRadius: '25px',
    color: '#e74c3c',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  }
};

export default Navbar;
