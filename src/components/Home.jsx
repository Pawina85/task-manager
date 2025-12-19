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
        gap: '1rem',
        marginTop: '1rem',
    };
    const primaryButtonStyle = {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: isDarkMode ? '#ffffff' : '#000000',
    color: isDarkMode ? '#000000' : '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  };

  const secondaryButtonStyle = {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '25px',
    border: `2px solid ${isDarkMode ? '#ffffff' : '#000000'}`,
    backgroundColor: 'transparent',
    color: isDarkMode ? '#ffffff' : '#000000',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };
  const heroSectionStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    padding: '3rem 0',
  };
  const textContainerStyle = {
    flex: 1,
    maxWidth: '500px',
  };

  const imageContainerStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  };
    const featuresSectionStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    marginTop: '4rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };
  

return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' , padding: '2rem' , minHeight: '100vh' }}>
      <div style={heroSectionStyle}>
        <div style={textContainerStyle}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', lineHeight: '1.2' }}>Boost Your Productivity</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>Organize your tasks, take notes, and achieve your goals efficiently.</p>
        <div style={buttonContainerStyle}>
            <button
            onClick={handleGetStarted}
            style={primaryButtonStyle}
            onMouseEnter={(e) => {
                e.target.style.opacity = '0.8',
                e.target.style.transform = 'translateY(-2px)',
                e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)'
            }}
            onMouseLeave={(e) => {
                e.target.style.opacity = '1',
                e.target.style.transform = 'translateY(0)',
                e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'
            }}
            >Get Started</button>
            <button
            onClick={handleWatchDemo}
            style={{...secondaryButtonStyle, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = isDarkMode ? '#ffffff' : '#000000',
                e.target.style.color = isDarkMode ? '#000000' : '#ffffff';
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent',
                e.target.style.color = isDarkMode ? '#ffffff' : '#000000';
            }} > <CirclePlay size={20} /> Watch Demo</button>
        </div>
        </div>
        {/* <div style={imageContainerStyle}> */}
        <img src="/pic1.png" alt="Home" style={{ maxWidth: '50%', height: 'auto' }}/>
        {/* </div> */}
      </div>
        <div style={featuresSectionStyle}>
        <img src="/pic2.png" alt="pic2" style={{ maxWidth: '300px', height: 'auto', borderRadius: '15px' }}/>
        <img src="/pic3.png" alt="pic3" style={{ maxWidth: '300px', height: 'auto', borderRadius: '15px' }}/>
        <img src="/pic4.png" alt="pic4" style={{ maxWidth: '300px', height: 'auto', borderRadius: '15px' }}/>
        </div>
    </div>
  );
}