import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // ✅

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('✅ Connexion réussie');
      localStorage.setItem('token', data.token);
      navigate('/dashboard'); // ✅ redirection vers le tableau de bord
    } else {
      setMessage(`❌ ${data.error || 'Échec de connexion'}`);
    }
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <h2>Se connecter</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Connexion</button>
        </form>
        {message && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
