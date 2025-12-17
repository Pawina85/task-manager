import { useState, useEffect } from "react";

import { useTheme } from './context/ThemeContext';

export default function Dashboard() {
    const { isDarkmode } = useTheme();

    const [tasks, setTasks] = useState([
        { id:1, text: "Finish the report"},
        { id:2, text: "Attend team meeting"},
        { id:3, text: "Workout for 30 minutes"},
        { id:4, text: "Review project plan"},
        { id:5, text: "Call with client"},
    ]);

    const [newTaskText,setNewTaskText] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date());
    const [userName] = useState("User");

    useEffect(()=> {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(timer);
    }, [])

    const getGreeting = () => {
        const hour = currentTime.getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    }

    const completedCount = tasks.filter(task => task.completed).length;
    const totalCount = tasks.length;

    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    }

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
            setNewTaskText("");
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    const containerStyle = {
        minHeight: '100vh',
        backgroundColor: isDarkmode ? '#0d1117' : '#f6f8fa',
        color: isDarkmode ? '#e0e0e0' : '#1f2937',
        padding: '2rem',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '2rem',
    };

    const greetingStyle = {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: isDarkmode ? '#ffffff' : '#111827',
        marginBottom: '0.5rem',
    };

    const subtitleStyle = {
        fontSize: '1.1rem',
        color: isDarkmode ? '#9ca3af' : '#6b7280',
    };

    const mainContentStyle = {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '1.5rem',
        maxWidth: '1400px',
        margin: '0 auto',
    };

    const leftColumnStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    };

    const rightColumnStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    };

    const cardStyle = {
        backgroundColor: isDarkmode ? '#161b22' : '#ffffff',
        borderRadius: '12px',
        padding: '1.5rem',
        border: `1px solid ${isDarkmode ? '#30363d' : '#e5e7eb'}`,
        boxShadow: isDarkmode ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.1)'
    }

    const cardHeaderStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
    }

    const cardTitleStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontSize: '1.25rem',
        fontWeight: '600',
        color: isDarkmode ? '#ffffff' : '#1f2937',
    }

    const addButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: isDarkmode ? '#21262d' : '#f3f4f6',
        color: isDarkmode ? '#e0e0e0' : '#374151',
        border: 'none',
        borderRadius: '6px',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        fontSize: '0.875rem',
        fontWeight: '500',
        transition: 'all 0.2s ',
    }

     const taskItemStyle = {
        display: 'flex',
        alignItems: 'center',   
        gap: '1rem',
        padding: '0.875rem 0',
        borderBottom: `1px solid ${isDarkmode ?  '#21262d' : '#f3f4f6'}`,
        transition: 'all 0.2s',
     }

     const checkboxStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '4px',
        border: `2px solid ${isDarkmode ? '#30363d' : '#d1d5db'}`,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'all 0.2s',
     }

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
    return (
        <div>
            <div>
            <h1>Good Morning</h1>
            <p>Here's what you have planned for today.</p>
            </div>
        </div>
    );
}