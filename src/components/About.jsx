import { useTheme } from './context/ThemeContext';
import { Check } from 'lucide-react';

export default function About() {
    const { isDarkMode } = useTheme();

    const containerStyle = {
        minHeight: '100vh',
        padding: '3rem 2rem',
        backgroundColor: isDarkMode ? '#0d1117' : '#ffffff',
        color: isDarkMode ? '#e0e0e0' : '#333',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '3rem',
        maxWidth: '900px',
        margin: '0 auto 3rem auto',
        paddingBottom: '3rem',
        borderBottom: isDarkMode ? '1px solid #30363d' : '1px solid #e0e0e0',
    };

    const titleStyle = {
        fontSize: '2.75rem',
        fontWeight: '600',
        marginBottom: '1.5rem',
        color: isDarkMode ? '#ffffff' : '#1a1a1a',
        letterSpacing: '-0.5px',
    };

    const subtitleStyle = {
        fontSize: '1.125rem',
        lineHeight: '1.7',
        color: isDarkMode ? '#c9d1d9' : '#586069',
        maxWidth: '750px',
        margin: '0 auto',
    };

    const contentWrapperStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
    };

    const topGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem',
    };

    const bottomGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem',
    };

    const cardStyle = {
        backgroundColor: isDarkMode ? '#161b22' : '#f6f8fa',
        padding: '2rem',
        borderRadius: '8px',
        border: isDarkMode ? '1px solid #30363d' : '1px solid #d0d7de',
    };

    const cardTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: '600',
        marginBottom: '1.25rem',
        color: isDarkMode ? '#ffffff' : '#1a1a1a',
    };

    const cardTextStyle = {
        fontSize: '0.95rem',
        lineHeight: '1.7',
        color: isDarkMode ? '#c9d1d9' : '#586069',
        marginBottom: '1rem',
    };

    const listItemStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '0.85rem',
        fontSize: '0.95rem',
        lineHeight: '1.5',
        color: isDarkMode ? '#c9d1d9' : '#586069',
    };

    const checkIconStyle = {
        color: '#4CAF50',
        flexShrink: 0,
    };

    const principlesCardStyle = {
        ...cardStyle,
        position: 'relative',
    };

    const menuIconStyle = {
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        color: isDarkMode ? '#6e7681' : '#999',
        cursor: 'pointer',
        fontSize: '1.25rem',
        letterSpacing: '2px',
    };

    const creatorCardStyle = {
        ...cardStyle,
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'flex-start',
    };

    const avatarStyle = {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundColor: isDarkMode ? '#30363d' : '#e1e4e8',
        flexShrink: 0,
    };

    return (
        <div style={containerStyle}>
            {/* Header Section */}
            <div style={headerStyle}>
                <h1 style={titleStyle}>About Focus Flow</h1>
                <p style={subtitleStyle}>
                    Focus Flow is a productivity app designed to help you stay focused
                    on what matters most—without unnecessary complexity.
                </p>
            </div>

            <div style={contentWrapperStyle}>
                {/* Top Grid - Why & Principles */}
                <div style={topGridStyle}>
                    {/* Why Focus Flow Exists */}
                    <div style={cardStyle}>
                        <h2 style={cardTitleStyle}>Why Focus Flow Exists</h2>
                        <p style={cardTextStyle}>
                            Productivity tools of today's headlinwof many features or hotifications makes
                            it harder to stay focused. Our goal will never make focused.
                        </p>
                        <p style={cardTextStyle}>
                            We believe that productivity tools should simplify your work, not complicate it.
                            Focus Flow was created to offer a minimalist, focused approach to task and
                            time management.
                        </p>
                    </div>

                    {/* Our Principles */}
                    <div style={principlesCardStyle}>
                        <span style={menuIconStyle}>⋯</span>
                        <h2 style={cardTitleStyle}>Our Principles</h2>
                        <div style={listItemStyle}>
                            <Check size={18} style={checkIconStyle} />
                            <span>Simplicity over complexity</span>
                        </div>
                        <div style={listItemStyle}>
                            <Check size={18} style={checkIconStyle} />
                            <span>Focus before features</span>
                        </div>
                        <div style={listItemStyle}>
                            <Check size={18} style={checkIconStyle} />
                            <span>Calm and clean design</span>
                        </div>
                        <div style={listItemStyle}>
                            <Check size={18} style={checkIconStyle} />
                            <span>Productivity without pressure</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Grid - How & Creator */}
                <div style={bottomGridStyle}>
                    {/* How Focus Flow Helps */}
                    <div style={cardStyle}>
                        <h2 style={cardTitleStyle}>How Focus Flow Helps</h2>
                        <div style={listItemStyle}>
                            <Check size={18} style={checkIconStyle} />
                            <span>
                                Stay organized with <strong>simple task management.</strong>
                            </span>
                        </div>
                        <div style={listItemStyle}>
                            <Check size={18} style={checkIconStyle} />
                            <span>
                                Minimize distractions with a <strong>focus-first design.</strong>
                            </span>
                        </div>
                        <div style={listItemStyle}>
                            <Check size={18} style={checkIconStyle} />
                            <span>
                                See what matters most with <strong>clear progress tracking.</strong>
                            </span>
                        </div>
                    </div>

                    {/* About the Creator */}
                    <div style={creatorCardStyle}>
                        <img
                            src="/aomki.png"
                            alt="Creator Avatar"
                            style={avatarStyle}
                        />
                        <div>
                            <h2 style={cardTitleStyle}>About the Creator</h2>
                            <p style={cardTextStyle}>
                                Focus Flow is built by a passionate frontend developer dedicated to
                                creating intuitive and effective productivity tools. Our mission is
                                to help you work smarter, not harder.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}