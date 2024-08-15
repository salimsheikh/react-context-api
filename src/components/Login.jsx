import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUser } = useContext(UserContext)


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (username.trim() === '' || password.trim() === '') {
      setError('Both fields are required.');
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