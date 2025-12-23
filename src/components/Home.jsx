import { useNavigate } from "react-router-dom";
import { useTheme } from "./context/ThemeContext.jsx";
import {CirclePlay} from 'lucide-react';

export default function Home() {
    const navigate = useNavigate();
    const { isDarkMode} = useTheme();

    const handleGetStarted = () => {
        navigate('/signup');
    };

    const handleWatchDemo = () => {
        navigate('/demo');
    };

    const buttonContainerStyle = {
        display: 'flex',
        flexDirection: window.innerWidth < 480 ? 'column' : 'row',
        gap: '1rem',
        marginTop: '1.5rem',
        width: '100%',
    };
    
    const primaryButtonStyle = {
        padding: '0.875rem 2rem',
        fontSize: '1rem',
        fontWeight: '600',
        borderRadius: '25px',
        border: 'none',
        backgroundColor: isDarkMode ? '#ffffff' : '#000000',
        color: isDarkMode ? '#000000' : '#ffffff',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        width: window.innerWidth < 480 ? '100%' : 'auto',
        minWidth: '140px',
    };

    const secondaryButtonStyle = {
        padding: '0.875rem 2rem',
        fontSize: '1rem',
        fontWeight: '600',
        borderRadius: '25px',
        border: `2px solid ${isDarkMode ? '#ffffff' : '#000000'}`,
        backgroundColor: 'transparent',
        color: isDarkMode ? '#ffffff' : '#000000',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        width: window.innerWidth < 480 ? '100%' : 'auto',
        minWidth: '140px',
    };
    
    const heroSectionStyle = {
        display: 'flex',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
        gap: window.innerWidth < 768 ? '2rem' : '3rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px',
        padding: window.innerWidth < 768 ? '2rem 0' : '3rem 0',
    };
    
    const textContainerStyle = {
        flex: 1,
        maxWidth: window.innerWidth < 768 ? '100%' : '500px',
        textAlign: window.innerWidth < 768 ? 'center' : 'left',
    };

    const imageContainerStyle = {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    };
    
    const featuresSectionStyle = {
        display: 'grid',
        gridTemplateColumns: window.innerWidth < 600 ? '1fr' : window.innerWidth < 900 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: '1.5rem',
        marginTop: '3rem',
        width: '100%',
        maxWidth: '1200px',
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: window.innerWidth < 768 ? '1rem' : '2rem',
        minHeight: '100vh',
        width: '100%',
    };

    return (
        <div style={containerStyle}>
            <div style={heroSectionStyle}>
                <div style={textContainerStyle}>
                    <h1 style={{ 
                        fontSize: 'clamp(1.75rem, 5vw, 3rem)', 
                        marginBottom: '1rem', 
                        lineHeight: '1.2',
                        fontWeight: '700',
                    }}>
                        Boost Your Productivity
                    </h1>
                    <p style={{ 
                        fontSize: window.innerWidth < 768 ? '1rem' : '1.1rem',
                        color: isDarkMode ? '#b0b0b0' : '#666',
                        marginBottom: '1.5rem',
                        lineHeight: '1.6',
                    }}>
                        Organize your tasks, take notes, and achieve your goals efficiently.
                    </p>
                    <div style={buttonContainerStyle}>
                        <button
                            onClick={handleGetStarted}
                            style={primaryButtonStyle}
                            onMouseEnter={(e) => {
                                e.target.style.opacity = '0.8';
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.opacity = '1';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                            }}
                        >
                            Get Started
                        </button>
                        <button
                            onClick={handleWatchDemo}
                            style={{...secondaryButtonStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = isDarkMode ? '#ffffff' : '#000000';
                                e.target.style.color = isDarkMode ? '#000000' : '#ffffff';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = isDarkMode ? '#ffffff' : '#000000';
                            }}
                        >
                            <CirclePlay size={20} /> Watch Demo
                        </button>
                    </div>
                </div>
                <div style={imageContainerStyle}>
                    <img 
                        src="/pic1.png" 
                        alt="Home" 
                        style={{ 
                            width: '100%',
                            maxWidth: window.innerWidth < 768 ? '100%' : '500px',
                            height: 'auto',
                            borderRadius: '10px',
                        }}
                    />
                </div>
            </div>
            <div style={featuresSectionStyle}>
                <img 
                    src="/pic2.png" 
                    alt="Task Management" 
                    style={{ 
                        width: '100%',
                        height: 'auto',
                        borderRadius: '15px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                />
                <img 
                    src="/pic3.png" 
                    alt="Notes & Ideas" 
                    style={{ 
                        width: '100%',
                        height: 'auto',
                        borderRadius: '15px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                />
                <img 
                    src="/pic4.png" 
                    alt="Collaboration" 
                    style={{ 
                        width: '100%',
                        height: 'auto',
                        borderRadius: '15px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                />
            </div>
        </div>
    );
}