import { useTheme } from './context/ThemeContext';
import { Check } from 'lucide-react';

export default function About() {
    const { isDarkMode } = useTheme();

    const containerStyle = {
        minHeight: '100vh',
        padding: '4rem 2rem',
        backgroundColor: isDarkMode ? '#0d1117' : '#ffffff',
        color: isDarkMode ? '#e0e0e0' : '#333'
         
    }
    const headerStyle = {
        textAlign: 'center',
        marginBottom: '4rem',
        maxWidth: '800px',
        margin: '0 auto 4rem auto',
    }


  return (
    <div style={containerStyle}>
        <div style={headerStyle}>
            <h1 style={titleStyle}>About Focus Flow</h1>
            <p style={subtitleStyle}>Focus flow is a productivity app designed to help you stay focused <br />
            on what matters most without unnecessary complexity.</p>
        </div>

        <div style={contentGridStyle}>
            <div style={cardStyle}>
                <h2 style={cardTitleStyle}>Why Focused Flow Exists</h2>
                <p style={cardTextStyle}> Productivity tools of today's headlinwof many features or hotifications makes
                        it harder to stay focused. Our goal will never make focused.</p>
            <p style={cardTextStyle}>We believe that productivity tools should simplify your work, not complicate it.
                        Focus Flow was created to offer a minimalist, focused approach to task and
                        time management.</p>
            </div>
            {/* Principles Card */}
            <div style={principlesCardStyle}>
              <div style={menuIconStyle}>⋮⋮⋮</div>
             <h2 style={cardTitleStyle}>Our Principles</h2>
             <div style={listItemStyle}>
                <Check size={20} style={checkIconStyle} />
                <span>Simplicity over complexity</span>
             </div>
            </div>
        </div>
      
      </div>
  );
}