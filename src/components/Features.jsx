import {Check, BookOpen, TrendingUp } from 'lucide-react';
import { useTheme } from './context/ThemeContext';
import { useNavigate } from 'react-router-dom';

export default function Features() {
    const { isDarkMode } = useTheme();
    const navigate = useNavigate();

    const features =[
        {
            icon: <Check size={28} />,
            title: 'Task Management',
            description: "Create, organize, and prioritize your tasks with a clean, distraction-free interface.",
            image: '/fea1.png'
        },
        { 
            icon: <BookOpen size={28} />,
            title: "Notes & Ideas",
            description: "Capture thoughts instantly and keep them to connected with your work.",
            image: '/feature2.png'
        },
        {
            icon: <TrendingUp size={28} />,
            title: "Goal Tracking",
            description: "Set, track, and achieve your goals effectively with visual progress indicators.",
            image: "/fea3.png" // Replace with your actual image path
        }
    ]

    const containerstyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 2rem',
        backgroundColor: isDarkMode ? '#0d1117' : '#ffffff',
        color: isDarkMode ? '#e0e0e0' : '#333'
    }
    const headerStyle = {
        textAlign: 'center',
        marginBottom: '3rem',
        maxWidth: '800px'
    }
    const titleStyle = {
        fontSize: '3rem',
        fontWeight: '700',
        marginBottom: '1rem',
        color: isDarkMode ? '#ffffff' : '#1a1a1a',
    }
    const subtitleStyle = {
        fontSize: '1.2rem',
        color: isDarkMode ? '#9ca3af' : '#666',
        marginBottom: '0',
    }

    const cardsContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        width: '100%',
        maxWidth: '900px',
        marginBottom: '3rem',
    }
    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        backgroundColor: isDarkMode ? '#161b22' : '#f8f9fa',
        borderRadius: '12px',
        padding: '2rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    }
    const iconContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '60px',
        backgroundColor: isDarkMode ? '#21262d' : '#ffffff',
        borderRadius: '10%',
        flexShrink: 0,
        border: `1px solid ${isDarkMode ? '#30363d' : '#e0e0e0'}`,
    }
    const contentStyle = {
        flex: 1,
        minWidth: 0
    }
    const featureTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
        color: isDarkMode ? '#ffffff' : '#1a1a1a',
    }
    const featureDescriptionStyle = {
        fontSize: '1rem',
        color: isDarkMode ? '#9ca3af' : '#666',
        lineHeight: '1.6'
    }
const imageContainerStyle = {
    width: '200px',
    height: '150px',
    flexShrink: 0,
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: isDarkMode ? '#0d1117' : '#e0e0e0',
}
const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    
}

const ctaContainerStyle = {
    textAlign: 'center',
    marginTop: '2rem',
}
const ctaTitleStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: isDarkMode ? '#ffffff' : '#1a1a1a',
}
 const ctaButtonStyle = {
        backgroundColor: isDarkMode ? '#ffffff' : '#000000',
        color: isDarkMode ? '#000000' : '#ffffff',
        padding: '0.875rem 2rem',
        fontSize: '1.1rem',
        fontWeight: '500',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = isDarkMode ? '0 10px 30px rgba(0, 0, 0, 0.5)' : '0 10px 30px rgba(0, 0, 0, 0.15)';
    };
    
    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
    };

    const handleButtonEnter = (e) => {
        e.currentTarget.style.opacity = '0.8';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = isDarkMode ? '0 5px 15px rgba(255, 255, 255, 0.2)' : '0 5px 15px rgba(0, 0, 0, 0.3)';
    }
    const handleButtonLeave = (e) => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
    }

    return (
        <div style={containerstyle}>
            <div style={headerStyle}>
                <h1>Features</h1>
                <p>Everything you need to stay productive and focused.</p>
            </div>
            <div style={cardsContainerStyle}>
                {features.map((feature, index) => (
                    <div key={index} style={cardStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                        <div style={iconContainerStyle}>
                            {feature.icon}
                        </div>
                        <div style={contentStyle}>
                            <h3 style={featureTitleStyle}>{feature.title}</h3>
                            <p style={featureDescriptionStyle}>{feature.description}</p>
                        </div>
                        <div style={imageContainerStyle}>
                            <img src={feature.image} alt={feature.title} style={imageStyle} />
                        </div>
                    </div>          
                       ) )}

            </div>

            <div style={ctaContainerStyle}>
                <h2 style={ctaTitleStyle}>
                Ready to boost your productivity?
                </h2>
                <button
                style={ctaButtonStyle}
                onMouseEnter={handleButtonEnter}
                onMouseLeave={handleButtonLeave}
                onClick={() => navigate('/signup')}
                >
                    Get Started
                </button>
            </div>

        </div>
    )
}
