import { useState, useEffect } from 'react';
import { CheckSquare, Plus, Send, Mail, Clipboard, Calendar, Clock, MoreVertical, Pause } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

export default function Dashboard() {
    const { isDarkMode } = useTheme();
    
    // State Management - stores the current data
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Finish the report', completed: true, time: null, category: null },
        { id: 2, text: 'Team meeting', completed: true, time: '3:00 PM', category: 'Work' },
        { id: 3, text: 'Workout for 30 minutes', completed: true, time: '6:00 PM', category: 'Personal' },
        { id: 4, text: 'Review project plan', completed: false, time: null, category: null },
        { id: 5, text: 'Call with client', completed: false, time: null, category: null }
    ]);
    
    const [newTaskText, setNewTaskText] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date());
    const [userName] = useState('Tom');
    
    // Update time every minute
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(timer);
    }, []);
    
    // Get greeting based on time of day
    const getGreeting = () => {
        const hour = currentTime.getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };
    
    // Calculate completed tasks
    const completedCount = tasks.filter(task => task.completed).length;
    const totalCount = tasks.length;
    
    // Toggle task completion
    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };
    
    // Add new task
    const addTask = () => {
        if (newTaskText.trim()) {
            const newTask = {
                id: Date.now(),
                text: newTaskText,
                completed: false,
                time: null,
                category: null
            };
            setTasks([...tasks, newTask]);
            setNewTaskText('');
        }
    };
    
    // Handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    // ==================== STYLES ====================
    
    const containerStyle = {
        minHeight: '100vh',
        backgroundColor: isDarkMode ? '#0d1117' : '#f6f8fa',
        color: isDarkMode ? '#e0e0e0' : '#1f2937',
        padding: '2rem'
    };
    
    const headerStyle = {
        textAlign: 'center',
        marginBottom: '2rem'
    };
    
    const greetingStyle = {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: isDarkMode ? '#ffffff' : '#1f2937',
        marginBottom: '0.5rem'
    };
    
    const subtitleStyle = {
        fontSize: '1.1rem',
        color: isDarkMode ? '#9ca3af' : '#6b7280'
    };
    
    const mainContentStyle = {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '1.5rem',
        maxWidth: '1400px',
        margin: '0 auto'
    };
    
    const leftColumnStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
    };
    
    const rightColumnStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
    };
    
    const cardStyle = {
        backgroundColor: isDarkMode ? '#161b22' : '#ffffff',
        border: `1px solid ${isDarkMode ? '#30363d' : '#e5e7eb'}`,
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: isDarkMode ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.1)'
    };
    
    const cardHeaderStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.5rem'
    };
    
    const cardTitleStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontSize: '1.25rem',
        fontWeight: '600',
        color: isDarkMode ? '#ffffff' : '#1f2937'
    };
    
    const addButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: isDarkMode ? '#21262d' : '#f3f4f6',
        color: isDarkMode ? '#e0e0e0' : '#374151',
        border: 'none',
        borderRadius: '6px',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        fontSize: '0.875rem',
        fontWeight: '500',
        transition: 'all 0.2s'
    };
    
    const taskItemStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.875rem 0',
        borderBottom: `1px solid ${isDarkMode ? '#21262d' : '#f3f4f6'}`,
        transition: 'all 0.2s'
    };
    
    const checkboxStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '4px',
        border: `2px solid ${isDarkMode ? '#30363d' : '#d1d5db'}`,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'all 0.2s'
    };
    
    const taskTextStyle = (completed) => ({
        flex: 1,
        fontSize: '1rem',
        color: completed ? (isDarkMode ? '#6b7280' : '#9ca3af') : (isDarkMode ? '#e0e0e0' : '#1f2937'),
        textDecoration: completed ? 'line-through' : 'none'
    });
    
    const timeTagStyle = {
        backgroundColor: isDarkMode ? '#21262d' : '#f3f4f6',
        color: isDarkMode ? '#9ca3af' : '#6b7280',
        padding: '0.25rem 0.75rem',
        borderRadius: '6px',
        fontSize: '0.875rem',
        fontWeight: '500'
    };
    
    const categoryTagStyle = {
        backgroundColor: isDarkMode ? '#21262d' : '#f3f4f6',
        color: isDarkMode ? '#9ca3af' : '#6b7280',
        padding: '0.25rem 0.75rem',
        borderRadius: '6px',
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer'
    };
    
    const newTaskInputStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.875rem 0',
        borderTop: `1px solid ${isDarkMode ? '#21262d' : '#f3f4f6'}`,
        marginTop: '0.5rem'
    };
    
    const inputStyle = {
        flex: 1,
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        fontSize: '1rem',
        color: isDarkMode ? '#9ca3af' : '#6b7280',
        padding: '0.5rem'
    };
    
    const sendButtonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: isDarkMode ? '#9ca3af' : '#6b7280',
        transition: 'color 0.2s'
    };
    
    const progressRingStyle = {
        width: '100px',
        height: '100px',
        position: 'relative',
        margin: '0 auto 1rem'
    };
    
    const overviewTextStyle = {
        textAlign: 'center',
        fontSize: '1rem',
        color: isDarkMode ? '#9ca3af' : '#6b7280'
    };
    
    const tabContainerStyle = {
        display: 'flex',
        gap: '1rem',
        borderBottom: `1px solid ${isDarkMode ? '#30363d' : '#e5e7eb'}`,
        marginTop: '1.5rem'
    };
    
    const tabStyle = (isActive) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1rem',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: isActive ? `2px solid #ec4899` : '2px solid transparent',
        color: isActive ? (isDarkMode ? '#ffffff' : '#1f2937') : (isDarkMode ? '#6b7280' : '#9ca3af'),
        cursor: 'pointer',
        fontSize: '0.95rem',
        fontWeight: '500',
        transition: 'all 0.2s',
        marginBottom: '-1px'
    });
    
    const upcomingItemStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.75rem 0',
        color: isDarkMode ? '#9ca3af' : '#6b7280',
        fontSize: '0.95rem'
    };
    
    const focusModeStyle = {
        ...cardStyle,
        background: isDarkMode 
            ? 'linear-gradient(135deg, #1f2937 0%, #374151 100%)'
            : 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
    };
    
    const focusTimerStyle = {
        fontSize: '2.5rem',
        fontWeight: '700',
        marginTop: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    };

    // ==================== RENDER ====================
    
    return (
        <div style={containerStyle}>
            {/* Header */}
            <div style={headerStyle}>
                <h1 style={greetingStyle}>{getGreeting()}, {userName}</h1>
                <p style={subtitleStyle}>Here's what you have planned for today.</p>
            </div>
            
            {/* Main Content Grid */}
            <div style={mainContentStyle}>
                {/* Left Column */}
                <div style={leftColumnStyle}>
                    {/* Today's Tasks Card */}
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>
                            <div style={cardTitleStyle}>
                                <CheckSquare size={24} />
                                <span>Today's Tasks</span>
                            </div>
                            <button style={addButtonStyle}>
                                <Plus size={16} />
                                Add Task
                            </button>
                        </div>
                        
                        {/* Task List */}
                        <div>
                            {tasks.map(task => (
                                <div key={task.id} style={taskItemStyle}>
                                    <div 
                                        style={{
                                            ...checkboxStyle,
                                            backgroundColor: task.completed ? '#ec4899' : 'transparent',
                                            borderColor: task.completed ? '#ec4899' : (isDarkMode ? '#30363d' : '#d1d5db')
                                        }}
                                        onClick={() => toggleTask(task.id)}
                                    >
                                        {task.completed && (
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        )}
                                    </div>
                                    <span style={taskTextStyle(task.completed)}>{task.text}</span>
                                    {task.time && <span style={timeTagStyle}>{task.time}</span>}
                                    {task.category && <span style={categoryTagStyle}>{task.category}</span>}
                                </div>
                            ))}
                        </div>
                        
                        {/* Add New Task Input */}
                        <div style={newTaskInputStyle}>
                            <Plus size={20} color={isDarkMode ? '#6b7280' : '#9ca3af'} />
                            <input
                                type="text"
                                placeholder="Type a new task..."
                                value={newTaskText}
                                onChange={(e) => setNewTaskText(e.target.value)}
                                onKeyPress={handleKeyPress}
                                style={inputStyle}
                            />
                            <button style={sendButtonStyle} onClick={addTask}>
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                    
                    {/* Bottom Tabs */}
                    <div style={cardStyle}>
                        <div style={tabContainerStyle}>
                            <button style={tabStyle(true)}>
                                <Mail size={18} />
                                Inbox
                            </button>
                            <button style={tabStyle(false)}>
                                <Clipboard size={18} />
                                Templates
                            </button>
                            <button style={tabStyle(false)}>
                                <Calendar size={18} />
                                Calendar
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Right Column */}
                <div style={rightColumnStyle}>
                    {/* Overview Card */}
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>
                            <div style={cardTitleStyle}>Overview</div>
                            <MoreVertical size={20} color={isDarkMode ? '#9ca3af' : '#6b7280'} />
                        </div>
                        <div style={progressRingStyle}>
                            {/* Simple progress display */}
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                border: `8px solid ${isDarkMode ? '#21262d' : '#f3f4f6'}`,
                                borderTopColor: '#ec4899',
                                borderRightColor: '#ec4899',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: isDarkMode ? '#ffffff' : '#1f2937'
                            }}>
                                {completedCount}
                            </div>
                        </div>
                        <p style={overviewTextStyle}>
                            {completedCount} of {totalCount} tasks completed
                        </p>
                    </div>
                    
                    {/* Upcoming Card */}
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>
                            <div style={cardTitleStyle}>Upcoming</div>
                            <MoreVertical size={20} color={isDarkMode ? '#9ca3af' : '#6b7280'} />
                        </div>
                        <div>
                            <h4 style={{ color: isDarkMode ? '#e0e0e0' : '#1f2937', marginBottom: '1rem' }}>Tomorrow</h4>
                            <div style={upcomingItemStyle}>
                                <span>›</span> Plan next week's sprint
                            </div>
                            <div style={upcomingItemStyle}>
                                <span>›</span> Email project summary
                            </div>
                        </div>
                    </div>
                    
                    {/* Focus Mode Card */}
                    <div style={focusModeStyle}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Focus Mode</h3>
                        <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>Write project proposal</p>
                        <div style={focusTimerStyle}>
                            <span>25.12</span>
                            <button style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}>
                                <Pause size={20} color="#ffffff" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}