import { NavLink} from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
        width: '100%',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
            position: 'fixed',
            top: 0,
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'background-color 0.3s ease'
        }}>            
      <div className="nav-logo">
        <a href="home" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            textDecoration: 'none',
             color: 'inherit'
        }}>
            <img src="/logo.png"
            alt="logo"
            style={{width: '100%',maxWidth: '60px',
                height: 'auto', objectFit: 'contain',
                borderRadius: '100%'
            }}
            />
            <p style={{fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            margin: 0,
            fontWeight: 'bold',
            color: '#251c25ff'}}>Focus flow</p>
        </a>
      </div>
        <div className="nav-links">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/features">Features</NavLink>
                </li>
                <li>
                    <NavLink to="/Dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/About">About</NavLink>
                </li>
            </ul>
            </div>
    
    </nav>
  );
}