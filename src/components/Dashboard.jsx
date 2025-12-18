import { useState, useEffect } from 'react';
import { 
    CheckSquare, Plus, Send, Mail, Clipboard, Calendar, Clock, 
    MoreVertical, Pause, Play, RotateCcw, Bell, BellOff,
    Filter, Tag, Trash2, Star, TrendingUp, Zap, Target
} from 'lucide-react';
import { useTheme } from './context/ThemeContext';

export default function Dashboard() {
    const { isDarkMode } = useTheme();
    
    // State Management
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Finish the report', completed: true, time: null, category: null, priority: 'high' },
        { id: 2, text: 'Team meeting', completed: true, time: '3:00 PM', category: 'Work', priority: 'medium' },
        { id: 3, text: 'Workout for 30 minutes', completed: true, time: '6:00 PM', category: 'Personal', priority: 'low' },
        { id: 4, text: 'Review project plan', completed: false, time: null, category: null, priority: 'high' },
        { id: 5, text: 'Call with client', completed: false, time: null, category: null, priority: 'medium' }
    ]);
    
    const [newTaskText, setNewTaskText] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date());
    const [userName] = useState('Tom');
    const [filterType, setFilterType] = useState('all'); // all, active, completed
    const [activeTab, setActiveTab] = useState('inbox');
    
    // Focus Mode State
    const [focusTimer, setFocusTimer] = useState(25 * 60); // 25 minutes in seconds
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [focusSessions, setFocusSessions] = useState(3);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [timerMode, setTimerMode] = useState('focus'); // focus, shortBreak, longBreak
    
    // Update time every minute
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(timer);
    }, []);
    
    // Focus Timer
    useEffect(() => {
        let interval;
        if (isTimerRunning && focusTimer > 0) {
            interval = setInterval(() => {
                setFocusTimer(prev => prev - 1);
            }, 1000);
        } else if (focusTimer === 0) {
            setIsTimerRunning(false);
            if (soundEnabled) {
                // Timer completed
                setFocusSessions(prev => prev + 1);
            }
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, focusTimer, soundEnabled]);
    
    const getGreeting = () => {
        const hour = currentTime.getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };
    
    // Calculate stats
    const completedCount = tasks.filter(task => task.completed).length;
    const totalCount = tasks.length;
    const completionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    const highPriorityCount = tasks.filter(task => !task.completed && task.priority === 'high').length;
    const todayTasksCount = tasks.filter(task => !task.completed).length;
    
    // Filter tasks
    const getFilteredTasks = () => {
        switch(filterType) {
            case 'active':
                return tasks.filter(task => !task.completed);
            case 'completed':
                return tasks.filter(task => task.completed);
            default:
                return tasks;
        }
    };
    
    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };
    
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };
    
    const addTask = () => {
        if (newTaskText.trim()) {
            const newTask = {
                id: Date.now(),
                text: newTaskText,
                completed: false,
                time: null,
                category: null,
                priority: 'medium'
            };
            setTasks([...tasks, newTask]);
            setNewTaskText('');
        }
    };
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };
    
    // Focus Timer Controls
    const toggleTimer = () => setIsTimerRunning(!isTimerRunning);
    
    const resetTimer = () => {
        setIsTimerRunning(false);
        const duration = timerMode === 'focus' ? 25 * 60 : timerMode === 'shortBreak' ? 5 * 60 : 15 * 60;
        setFocusTimer(duration);
    };
    
    const switchTimerMode = (mode) => {
        setTimerMode(mode);
        setIsTimerRunning(false);
        const duration = mode === 'focus' ? 25 * 60 : mode === 'shortBreak' ? 5 * 60 : 15 * 60;
        setFocusTimer(duration);
    };
    
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    
    const getPriorityColor = (priority) => {
        if (priority === 'high') return '#ef4444';
        if (priority === 'medium') return '#f59e0b';
        return '#10b981';
    };

    // ==================== STYLES ====================
    
    const containerStyle = {
        minHeight: '100vh',
        backgroundColor: isDarkMode ? '#000000' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#000000',
        padding: '2rem'
    };
    
    const headerStyle = {
        textAlign: 'center',
        marginBottom: '2rem'
    };
    
    const greetingStyle = {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: isDarkMode ? '#ffffff' : '#000000',
        marginBottom: '0.5rem'
    };
    
    const subtitleStyle = {
        fontSize: '1.1rem',
        color: isDarkMode ? '#a3a3a3' : '#525252'
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
        backgroundColor: isDarkMode ? '#0a0a0a' : '#fafafa',
        border: `1px solid ${isDarkMode ? '#262626' : '#e5e5e5'}`,
        borderRadius: '16px',
        padding: '1.5rem',
        boxShadow: isDarkMode 
            ? '0 4px 6px rgba(0, 0, 0, 0.5)'
            : '0 1px 3px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease'
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
        color: isDarkMode ? '#ffffff' : '#000000'
    };
    
    const addButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: isDarkMode ? '#ffffff' : '#000000',
        color: isDarkMode ? '#000000' : '#ffffff',
        border: 'none',
        borderRadius: '8px',
        padding: '0.6rem 1.2rem',
        cursor: 'pointer',
        fontSize: '0.875rem',
        fontWeight: '600',
        transition: 'all 0.3s'
    };
    
    const filterContainerStyle = {
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1rem',
        flexWrap: 'wrap'
    };
    
    const filterButtonStyle = (active) => ({
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        border: `1px solid ${isDarkMode ? '#262626' : '#e5e5e5'}`,
        backgroundColor: active 
            ? (isDarkMode ? '#ffffff' : '#000000')
            : (isDarkMode ? '#0a0a0a' : '#fafafa'),
        color: active 
            ? (isDarkMode ? '#000000' : '#ffffff')
            : (isDarkMode ? '#a3a3a3' : '#525252'),
        cursor: 'pointer',
        fontSize: '0.875rem',
        fontWeight: '500',
        transition: 'all 0.2s'
    });
    
    const taskItemStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem',
        borderRadius: '10px',
        backgroundColor: isDarkMode ? '#171717' : '#f5f5f5',
        marginBottom: '0.75rem',
        transition: 'all 0.2s',
        border: `1px solid ${isDarkMode ? '#262626' : '#e5e5e5'}`,
        cursor: 'pointer'
    };
    
    const checkboxStyle = {
        width: '22px',
        height: '22px',
        borderRadius: '6px',
        border: `2px solid ${isDarkMode ? '#525252' : '#a3a3a3'}`,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'all 0.3s'
    };
    
    const taskTextStyle = (completed) => ({
        flex: 1,
        fontSize: '1rem',
        color: completed 
            ? (isDarkMode ? '#525252' : '#a3a3a3') 
            : (isDarkMode ? '#ffffff' : '#000000'),
        textDecoration: completed ? 'line-through' : 'none',
        fontWeight: '500'
    });
    
    const priorityIndicatorStyle = (priority) => ({
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: getPriorityColor(priority),
        flexShrink: 0
    });
    
    const timeTagStyle = {
        backgroundColor: isDarkMode ? '#262626' : '#e5e5e5',
        color: isDarkMode ? '#ffffff' : '#000000',
        padding: '0.25rem 0.75rem',
        borderRadius: '6px',
        fontSize: '0.85rem',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem'
    };
    
    const categoryTagStyle = {
        backgroundColor: isDarkMode ? '#262626' : '#e5e5e5',
        color: isDarkMode ? '#ffffff' : '#000000',
        padding: '0.25rem 0.75rem',
        borderRadius: '6px',
        fontSize: '0.85rem',
        fontWeight: '600'
    };
    
    const deleteButtonStyle = {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: isDarkMode ? '#525252' : '#a3a3a3',
        transition: 'color 0.2s',
        padding: '0.25rem'
    };
    
    const newTaskInputStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem',
        borderRadius: '10px',
        backgroundColor: isDarkMode ? '#171717' : '#f5f5f5',
        marginTop: '0.5rem',
        border: `2px solid ${isDarkMode ? '#262626' : '#e5e5e5'}`
    };
    
    const inputStyle = {
        flex: 1,
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        fontSize: '1rem',
        color: isDarkMode ? '#ffffff' : '#000000',
        padding: '0.5rem'
    };
    
    const sendButtonStyle = {
        backgroundColor: isDarkMode ? '#ffffff' : '#000000',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        color: isDarkMode ? '#000000' : '#ffffff',
        transition: 'all 0.2s',
        padding: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    
    const progressRingContainerStyle = {
        position: 'relative',
        width: '140px',
        height: '140px',
        margin: '1rem auto'
    };
    
    const statCardStyle = {
        backgroundColor: isDarkMode ? '#171717' : '#f5f5f5',
        borderRadius: '12px',
        padding: '1rem',
        border: `1px solid ${isDarkMode ? '#262626' : '#e5e5e5'}`,
        marginTop: '1rem'
    };
    
    const statRowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 0'
    };
    
    const statLabelStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.9rem',
        color: isDarkMode ? '#a3a3a3' : '#525252'
    };
    
    const statValueStyle = {
        fontSize: '1.1rem',
        fontWeight: '700',
        color: isDarkMode ? '#ffffff' : '#000000'
    };
    
    const tabContainerStyle = {
        display: 'flex',
        gap: '0.5rem',
        padding: '0.5rem',
        backgroundColor: isDarkMode ? '#171717' : '#f5f5f5',
        borderRadius: '12px'
    };
    
    const tabStyle = (isActive) => ({
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1rem',
        backgroundColor: isActive 
            ? (isDarkMode ? '#0a0a0a' : '#ffffff')
            : 'transparent',
        border: 'none',
        borderRadius: '8px',
        color: isActive 
            ? (isDarkMode ? '#ffffff' : '#000000') 
            : (isDarkMode ? '#525252' : '#737373'),
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: '600',
        transition: 'all 0.2s',
        boxShadow: isActive 
            ? (isDarkMode ? '0 2px 8px rgba(255, 255, 255, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.1)')
            : 'none'
    });
    
    const upcomingItemStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem',
        borderRadius: '10px',
        backgroundColor: isDarkMode ? '#171717' : '#f5f5f5',
        marginBottom: '0.75rem',
        color: isDarkMode ? '#ffffff' : '#000000',
        fontSize: '0.95rem',
        border: `1px solid ${isDarkMode ? '#262626' : '#e5e5e5'}`,
        transition: 'all 0.2s'
    };
    
    const focusModeStyle = {
        ...cardStyle,
        backgroundColor: isDarkMode ? '#0a0a0a' : '#000000',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        border: `1px solid ${isDarkMode ? '#262626' : '#000000'}`
    };
    
    const focusHeaderStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
    };
    
    const timerModeButtonsStyle = {
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.5rem'
    };
    
    const timerModeButtonStyle = (active) => ({
        flex: 1,
        padding: '0.5rem',
        borderRadius: '8px',
        border: `1px solid ${active ? '#ffffff' : '#525252'}`,
        backgroundColor: active ? '#ffffff' : 'transparent',
        color: active ? '#000000' : '#ffffff',
        cursor: 'pointer',
        fontSize: '0.85rem',
        fontWeight: '600',
        transition: 'all 0.2s'
    });
    
    const focusTimerStyle = {
        fontSize: '3rem',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '1.5rem',
        fontFamily: 'monospace',
        letterSpacing: '0.1em',
        color: '#ffffff'
    };
    
    const timerControlsStyle = {
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        marginBottom: '1.5rem'
    };
    
    const timerButtonStyle = {
        backgroundColor: '#ffffff',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s',
        color: '#000000'
    };
    
    const focusStatsStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '1rem',
        borderTop: '1px solid #262626'
    };
    
    const focusStatStyle = {
        textAlign: 'center'
    };

    // ==================== RENDER ====================
    
    return (
        <div style={containerStyle}>
            {/* Header */}
            <div style={headerStyle}>
                <h1 style={greetingStyle}>{getGreeting()}, {userName} ✨</h1>
                <p style={subtitleStyle}>You have {todayTasksCount} tasks remaining today</p>
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
                            <button 
                                style={addButtonStyle} 
                                onClick={addTask}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = '0.8';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                }}
                            >
                                <Plus size={16} />
                                Add Task
                            </button>
                        </div>
                        
                        {/* Filter Buttons */}
                        <div style={filterContainerStyle}>
                            <button 
                                style={filterButtonStyle(filterType === 'all')}
                                onClick={() => setFilterType('all')}
                            >
                                All ({tasks.length})
                            </button>
                            <button 
                                style={filterButtonStyle(filterType === 'active')}
                                onClick={() => setFilterType('active')}
                            >
                                Active ({tasks.filter(t => !t.completed).length})
                            </button>
                            <button 
                                style={filterButtonStyle(filterType === 'completed')}
                                onClick={() => setFilterType('completed')}
                            >
                                Completed ({tasks.filter(t => t.completed).length})
                            </button>
                        </div>
                        
                        {/* Task List */}
                        <div>
                            {getFilteredTasks().map(task => (
                                <div key={task.id} style={taskItemStyle}>
                                    <div 
                                        style={{
                                            ...checkboxStyle,
                                            backgroundColor: task.completed 
                                                ? (isDarkMode ? '#ffffff' : '#000000')
                                                : 'transparent',
                                            borderColor: task.completed 
                                                ? (isDarkMode ? '#ffffff' : '#000000')
                                                : (isDarkMode ? '#525252' : '#a3a3a3')
                                        }}
                                        onClick={() => toggleTask(task.id)}
                                    >
                                        {task.completed && (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path 
                                                    d="M2 7L6 11L12 3" 
                                                    stroke={isDarkMode ? '#000000' : '#ffffff'} 
                                                    strokeWidth="2.5" 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <div style={priorityIndicatorStyle(task.priority)} />
                                    <span style={taskTextStyle(task.completed)}>{task.text}</span>
                                    {task.time && (
                                        <span style={timeTagStyle}>
                                            <Clock size={12} />
                                            {task.time}
                                        </span>
                                    )}
                                    {task.category && <span style={categoryTagStyle}>{task.category}</span>}
                                    <button 
                                        style={deleteButtonStyle}
                                        onClick={() => deleteTask(task.id)}
                                        onMouseEnter={(e) => e.target.style.color = '#ef4444'}
                                        onMouseLeave={(e) => e.target.style.color = isDarkMode ? '#525252' : '#a3a3a3'}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        
                        {/* Add New Task Input */}
                        <div style={newTaskInputStyle}>
                            <Plus size={20} color={isDarkMode ? '#ffffff' : '#000000'} />
                            <input
                                type="text"
                                placeholder="Type a new task..."
                                value={newTaskText}
                                onChange={(e) => setNewTaskText(e.target.value)}
                                onKeyPress={handleKeyPress}
                                style={inputStyle}
                            />
                            <button 
                                style={sendButtonStyle} 
                                onClick={addTask}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = '0.8';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                }}
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                    
                    {/* Bottom Tabs */}
                    <div style={cardStyle}>
                        <div style={tabContainerStyle}>
                            <button 
                                style={tabStyle(activeTab === 'inbox')}
                                onClick={() => setActiveTab('inbox')}
                            >
                                <Mail size={18} />
                                Inbox
                            </button>
                            <button 
                                style={tabStyle(activeTab === 'templates')}
                                onClick={() => setActiveTab('templates')}
                            >
                                <Clipboard size={18} />
                                Templates
                            </button>
                            <button 
                                style={tabStyle(activeTab === 'calendar')}
                                onClick={() => setActiveTab('calendar')}
                            >
                                <Calendar size={18} />
                                Calendar
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Right Column */}
                <div style={rightColumnStyle}>
                    {/* Overview Card - Enhanced */}
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>
                            <div style={cardTitleStyle}>
                                <TrendingUp size={24} />
                                Overview
                            </div>
                            <MoreVertical size={20} color={isDarkMode ? '#a3a3a3' : '#525252'} />
                        </div>
                        
                        {/* Animated Progress Ring */}
                        <div style={progressRingContainerStyle}>
                            <svg width="140" height="140" style={{ transform: 'rotate(-90deg)' }}>
                                {/* Background circle */}
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="60"
                                    fill="none"
                                    stroke={isDarkMode ? '#262626' : '#e5e5e5'}
                                    strokeWidth="12"
                                />
                                {/* Progress circle */}
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="60"
                                    fill="none"
                                    stroke={isDarkMode ? '#ffffff' : '#000000'}
                                    strokeWidth="12"
                                    strokeLinecap="round"
                                    strokeDasharray={`${(completionRate / 100) * 377} 377`}
                                    style={{ transition: 'stroke-dasharray 0.5s ease' }}
                                />
                            </svg>
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                textAlign: 'center'
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '700',
                                    color: isDarkMode ? '#ffffff' : '#000000'
                                }}>
                                    {completionRate}%
                                </div>
                                <div style={{
                                    fontSize: '0.75rem',
                                    color: isDarkMode ? '#a3a3a3' : '#525252',
                                    marginTop: '-0.25rem'
                                }}>
                                    Complete
                                </div>
                            </div>
                        </div>
                        
                        {/* Stats */}
                        <div style={statCardStyle}>
                            <div style={statRowStyle}>
                                <span style={statLabelStyle}>
                                    <Target size={16} />
                                    Tasks Completed
                                </span>
                                <span style={statValueStyle}>{completedCount}/{totalCount}</span>
                            </div>
                            <div style={statRowStyle}>
                                <span style={statLabelStyle}>
                                    <Zap size={16} />
                                    High Priority
                                </span>
                                <span style={statValueStyle}>{highPriorityCount}</span>
                            </div>
                            <div style={statRowStyle}>
                                <span style={statLabelStyle}>
                                    <Star size={16} />
                                    Focus Sessions
                                </span>
                                <span style={statValueStyle}>{focusSessions}</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Upcoming Card */}
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>
                            <div style={cardTitleStyle}>
                                <Calendar size={24} />
                                Upcoming
                            </div>
                            <MoreVertical size={20} color={isDarkMode ? '#a3a3a3' : '#525252'} />
                        </div>
                        <div>
                            <h4 style={{ 
                                color: isDarkMode ? '#ffffff' : '#000000', 
                                marginBottom: '1rem',
                                fontSize: '0.95rem',
                                fontWeight: '600'
                            }}>
                                Tomorrow
                            </h4>
                            <div style={upcomingItemStyle}>
                                <span style={{ fontWeight: 'bold' }}>›</span>
                                <span>Plan next week's sprint</span>
                            </div>
                            <div style={upcomingItemStyle}>
                                <span style={{ fontWeight: 'bold' }}>›</span>
                                <span>Email project summary</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Focus Mode Card - Enhanced */}
                    <div style={focusModeStyle}>
                        <div style={focusHeaderStyle}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: 0 }}>Focus Mode</h3>
                            <button
                                style={{
                                    backgroundColor: '#ffffff',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '36px',
                                    height: '36px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#000000'
                                }}
                                onClick={() => setSoundEnabled(!soundEnabled)}
                            >
                                {soundEnabled ? <Bell size={18} /> : <BellOff size={18} />}
                            </button>
                        </div>
                        
                        {/* Timer Mode Selection */}
                        <div style={timerModeButtonsStyle}>
                            <button 
                                style={timerModeButtonStyle(timerMode === 'focus')}
                                onClick={() => switchTimerMode('focus')}
                            >
                                Focus
                            </button>
                            <button 
                                style={timerModeButtonStyle(timerMode === 'shortBreak')}
                                onClick={() => switchTimerMode('shortBreak')}
                            >
                                Short Break
                            </button>
                            <button 
                                style={timerModeButtonStyle(timerMode === 'longBreak')}
                                onClick={() => switchTimerMode('longBreak')}
                            >
                                Long Break
                            </button>
                        </div>
                        
                        <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '1rem', textAlign: 'center' }}>
                            Write project proposal
                        </p>
                        
                        {/* Timer Display */}
                        <div style={focusTimerStyle}>
                            {formatTime(focusTimer)}
                        </div>
                        
                        {/* Timer Controls */}
                        <div style={timerControlsStyle}>
                            <button 
                                style={timerButtonStyle}
                                onClick={toggleTimer}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = '0.8';
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                {isTimerRunning ? <Pause size={24} /> : <Play size={24} />}
                            </button>
                            <button 
                                style={timerButtonStyle}
                                onClick={resetTimer}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = '0.8';
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <RotateCcw size={24} />
                            </button>
                        </div>
                        
                        {/* Focus Stats */}
                        <div style={focusStatsStyle}>
                            <div style={focusStatStyle}>
                                <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{focusSessions}</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Sessions</div>
                            </div>
                            <div style={focusStatStyle}>
                                <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                                    {timerMode === 'focus' ? '25' : timerMode === 'shortBreak' ? '5' : '15'}
                                </div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Minutes</div>
                            </div>
                            <div style={focusStatStyle}>
                                <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                                    {Math.floor(focusSessions * 25 / 60)}h
                                </div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Total</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}