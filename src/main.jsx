import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/styles.css'
import App from './App.jsx'
import { ThemeProvider } from './components/context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <App/>
    </ThemeProvider>
  </StrictMode>,
)
