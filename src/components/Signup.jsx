import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

export default function Signup() {
  const [name , setName] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ showPassword, setShowPassword ] = useState(false);
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);
  const [ error, setError ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      setIsLoading(false);
      return;
    }
    if (name.trim().length < 2) {
      setError('Name must be at least 2 characters long.');
      setIsLoading(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      setIsLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setIsLoading(false);
      return;
    }
    try {
      await new Promise(resilve => setTimeout(resolve, 1000));

      localStorage.setItem('user', JSON.stringify({ name, email }));
      navigate('/dashboard');
    } catch (error) {
      setError('An error occurred during signup. Please try again.');
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
        <h1 style={styles.title}>Create Account</h1>
        <p style={styles.subtitle}>Sign up to get started</p>
      </div>
      {error && (
        <div style={styles.error}>
          {error}
          </div>
      )}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Full Name</label>
          <div style={styles.inputWrapper}>
            <User size={20} style={styles.icon} />
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            style={styles.input}
            disabled={isLoading}
            />
          </div>
        </div>
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
            placeholder="Create a password (min. 8 characters"
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
      <div style={styles.inputGroup}>
          <label style={styles.label}>Confirm Password</label>
          <div style={styles.inputWrapper}>
            <Lock size={20} style={styles.icon} />
            <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
            style={styles.input}
            disabled={isLoading}
          />
          <button type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeButton}
            disabled={isLoading} >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          </div>
      <button
      type="submit"
      style={{...styles.submitButton, ...(isLoading ? styles.submitButtonDisabled : {})}}
      disabled={isLoading}>
        {isLoading ? 'Signing Up...' : 'Sign Up'}
      </button>
      </form>

      <div style={styles.footer}>
        <p style={styles.footerText}>
          Already have an account?{' '}
          <Link to="/login" style={styles.link}> Log In</Link>
        </p>
      </div>
    </div>
  </div>
  );
}

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f5f7fa',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '3rem',
    width: '100%',
    maxWidth: '450px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1a202c',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#718096',
    fontSize: '1rem',
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
    fontWeight: '600',
    color: '#374151',
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
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.2s',
    outline: 'none',
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
    alignItems: 'center',
  },
    submitButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
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
    color: '#6b7280',
    fontSize: '0.875rem',
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: '600',
  },
};