import { useState, useEffect } from "react";
import { useTheme } from './context/ThemeContext';

export default function Dashboard() {
    return (
        <div>
            <div>
            <h1>Good Morning</h1>
            <p>Here's what you have planned for today.</p>
            </div>
        </div>
    );
}