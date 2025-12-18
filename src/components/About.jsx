import { useTheme } from './context/ThemeContext';
import { Check } from 'lucide-react';

export default function About() {
    const { isDarkMode } = useTheme();

    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
         
    }
  return (
    <div style={containerStyle}>
        <div style={headerStyle}>
            <h1>About Focus Flow</h1>
            <p>Focus flow is a productivity app designed to help you stayfocused <br />
            on what matters most without unnecessary complexity.</p>
        </div>
      
      </div>
  );
}