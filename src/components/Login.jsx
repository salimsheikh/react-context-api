import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUser } = useContext(UserContext)

  const validateForm = () => {
    // Validation rules
    if (username.trim() === '') {
      return 'Username is required.';
    }
    if (username.length < 4) {
      return 'Username must be at least 4 characters long.';
    }

    if (password.trim() === '') {
      return 'Password is required.';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter.';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number.';
    }

    return null; // Return null if all validations pass
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    // Clear error and proceed if validation passes
    setError('');
    setUser({ username, password });
  }
  return (
    <div className='login'>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}

      />
      <input type='text'
        value={password}
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login