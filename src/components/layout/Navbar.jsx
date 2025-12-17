import { NavLink} from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {CirclePlay} from 'lucide-react';

export default function Navbar() {
    const { isDarkMode, toggleTheme } = useTheme();

    // const toggleTheme = () => {
    //     setIsDarkMode(!isDarkMode);

    //     document.body.style.className = isDarkMode ? 'light-mode' : 'dark-mode';
    // }

      const navStyle = {
    width: '100%',
    padding: '1rem 2rem',
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f8f9fa',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    flexWrap: 'wrap', // Allow wrapping on smaller screens
    gap: '1rem',
  };

   const linkStyle = {
    textDecoration: 'none',
    color: isDarkMode ? '#e0e0e0' : '#333',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    fontWeight: '500',
  };

    const buttonStyle = {
    padding: '0.5rem 1.5rem',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    marginLeft: '0.5rem',
  };

  const loginButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    color: isDarkMode ? '#e0e0e0' : '#333',
    border: `2px solid ${isDarkMode ? '#e0e0e0' : '#333'}`,
  };

  const signupButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50',
    color: 'white',
  };

  const themeToggleStyle = {
    backgroundColor: isDarkMode ? '#333' : '#ddd',
    border: 'none',
    borderRadius: '20px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
  };


  return (
    <nav style={navStyle}>
                   
      <div className="nav-logo">
        <a href="home" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            textDecoration: 'none',
             color: 'inherit'
        }}>
            <img src="/logo.png"
            alt="logo"
            style={{width: '100%',maxWidth: '60px',
                height: 'auto', objectFit: 'contain',
                borderRadius: '100%', marginRight: '0.5rem'
            }}
            />
            <p style={{fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            margin: 0,
            fontWeight: 'bold',
            color: isDarkMode ? '#f5b5e9ff' : '#251c25ff'}}>Focus flow</p>
        </a>
      </div>
        <div className="nav-links" style={{display: 'flex', alignItems: "center", gap: '1rem'}}>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                gap: '0.5rem',
                margin: 0,
                padding: 0
            }}>
                <li>
                    <NavLink to="/"
                    style={({ isActive }) => ({
                        ...linkStyle,
                        backgroundColor: isActive ? isDarkMode ?
                        '#333' : '#e0e0e0' : 'transparent'
                    })}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/features" 
                    style={({ isActive}) => ({
                        ...linkStyle,
                        backgroundColor: isActive ?
                        isDarkMode
                        ? '#333'
                        : '#e0e0e0'
                        : 'transparent'
                    })}>Features</NavLink>
                </li>
                <li>
                    <NavLink to="/Dashboard" 
                    style={({ isActive }) => ({
                        ...linkStyle,
                        backgroundColor: isActive
                        ? isDarkMode
                        ? '#333'
                        : '#e0e0e0'
                        : 'transparent'
                    })}
                    >Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/About" 
                    style={({ isActive}) => ({
                        ...linkStyle,
                        backgroundColor: isActive ?
                        isDarkMode
                        ? '#333'
                        : '#e0e0e0'
                        : 'transparent'
                    })}
                    >About</NavLink>
                </li>
            </ul>
                    <button onClick={toggleTheme} style={themeToggleStyle} title="Toggle Theme">
                        {isDarkMode ? '🌞' : '🌙'}
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <button onClick={() => (window.location.href = '/login')}
                            style={loginButtonStyle}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = isDarkMode ? '#333' : '#e0e0e0';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent'
                            }}
                            >
                            Login
                        </button>

                        <button onClick={() => (window.location.href = '/signup')}
                            style={signupButtonStyle}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#f5b5e9ff';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#f5b5e9ff'
                            }}>
                            
                            Sign Up
                        </button>
                    </div>

            </div>
    
    </nav>
  );
}