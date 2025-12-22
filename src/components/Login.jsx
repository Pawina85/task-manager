import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';


export default function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ showPassword, setShowPassword ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields.');
      setIsLoading(false);
      return;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
  }

  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/dashboard');
  }
  catch (err) {
    setError('Login failed. Please try again.');
  }
  finally {
    setIsLoading(false);
  }
  };
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles}>Sign in to your account</p>
      </div>
      {error && (
        <div style={styles.error}>
          {error}
          </div>
      )}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <div style={styles.inputWrapper}>
            <Mail size={20} style={styles.icon} />
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={styles.input}
            disabled={isLoading}
            />
          </div>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <div style={styles.inputWrapper}>
            <Lock size={20} style={styles.icon} />
            <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={styles.input}
            disabled={isLoading}
            />
            <button type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
            disabled={isLoading} >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
      </div>
      <button
      type="submit"
      style={{...styles.submitButton, ...(isLoading ? styles.submitButtonDisabled : {})}}
      disabled={isLoading}>
        {isLoading ? 'Signing In...' : 'Sign In'}
      </button>
      </form>

      <div style={styles.footer}>
        <p style={styles.footerText}>
          Don't have an account?{' '}
          <Link to="/signup" style={styles.link}> Sign Up</Link>
        </p>
      </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '80vh',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#f5f7fa',
  },
  card: {
    backgroundColor: '#fff',
    padding: '3rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '450px',
  },
  header: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1a202c',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#718096',
  },
  error: {
    backgroundColor: '#fee',
    color: '#c33',
    padding: '0.75rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    fontSize: '0.875rem',
    border: '1px solid #fcc',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.875rem',
    color: '#374151',
    fontWeight: '600',
  }, 
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: '1rem',
    color: '#9ca3af',
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem 0.75rem 3rem',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  eyeButton: {
    position: 'absolute',
    right: '1rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#9ca3af',
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center'
  },
  submitButton: {
    backgroundColor: '#3b82f6',
    color: '#fff',
    padding: '0.875rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '0.5rem',
  },
  submitButtonDisabled: {
    backgroundColor: '#93c5fd',
    cursor: 'not-allowed',
  },
  footer: {
    marginTop: '2rem',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: '600',
  },
};
  