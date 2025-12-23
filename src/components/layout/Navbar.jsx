import { NavLink} from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {CirclePlay} from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const { isDarkMode, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        flexWrap: 'wrap',
        gap: '1rem',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: isDarkMode ? '#e0e0e0' : '#333',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
        fontWeight: '500',
        display: 'block',
        width: '100%',
    };

    const buttonStyle = {
        padding: '0.625rem 1.5rem',
        borderRadius: '20px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        fontSize: '0.95rem',
        whiteSpace: 'nowrap',
    };

    const loginButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'transparent',
        color: isDarkMode ? '#e0e0e0' : '#333',
        border: `2px solid ${isDarkMode ? '#e0e0e0' : '#333'}`,
    };

    const signupButtonStyle = {
        ...buttonStyle,
        backgroundColor: isDarkMode ? '#ffffff' : '#000000',
        color: isDarkMode ? '#000000' : '#ffffff',
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

    const navLinksContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
    };

    return (
        <nav style={navStyle}>
            <div className="nav-logo">
                <NavLink to="/" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'inherit'
                }}>
                    <img src="/logo.png"
                        alt="logo"
                        style={{
                            width: '100%',
                            maxWidth: '50px',
                            height: 'auto',
                            objectFit: 'contain',
                            borderRadius: '100%',
                            marginRight: '0.5rem'
                        }}
                    />
                    <p style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                        margin: 0,
                        fontWeight: 'bold',
                        color: isDarkMode ? '#ffffff' : '#000000'
                    }}>
                        Focus flow
                    </p>
                </NavLink>
            </div>
            <div className="nav-links" style={navLinksContainerStyle}>
                <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    gap: '0.25rem',
                    margin: 0,
                    padding: 0,
                    flexWrap: 'wrap',
                }}>
                    <li>
                        <NavLink to="/"
                            style={({ isActive }) => ({
                                ...linkStyle,
                                backgroundColor: isActive ? isDarkMode ? '#333' : '#e0e0e0' : 'transparent',
                                width: 'auto',
                            })}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/features" 
                            style={({ isActive}) => ({
                                ...linkStyle,
                                backgroundColor: isActive ? isDarkMode ? '#333' : '#e0e0e0' : 'transparent',
                                width: 'auto',
                            })}>Features</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Dashboard" 
                            style={({ isActive }) => ({
                                ...linkStyle,
                                backgroundColor: isActive ? isDarkMode ? '#333' : '#e0e0e0' : 'transparent',
                                width: 'auto',
                            })}
                        >Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" 
                            style={({ isActive}) => ({
                                ...linkStyle,
                                backgroundColor: isActive ? isDarkMode ? '#333' : '#e0e0e0' : 'transparent',
                                width: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                            })}
                        >
                            About <CirclePlay size={18} />
                        </NavLink>
                    </li>
                </ul>
                <button onClick={toggleTheme} style={themeToggleStyle} title="Toggle Theme">
                    {isDarkMode ? '🌞' : '🌙'}
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'nowrap' }}>
                    <button onClick={() => (window.location.href = '/login')}
                        style={loginButtonStyle}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = isDarkMode ? '#333' : '#e0e0e0';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                        }}
                    >
                        Login
                    </button>

                    <button onClick={() => (window.location.href = '/signup')}
                        style={signupButtonStyle}
                        onMouseEnter={(e) => {
                            e.target.style.opacity = '0.8';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.opacity = '1';
                        }}>
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
}