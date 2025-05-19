import './Register.css';
import { useState } from 'react';
import learningImage from '../assets/image2.svg';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullname, email, password, role }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('✅ Inscription réussie !');
      setFullname('');
      setEmail('');
      setPassword('');
      setRole('');
    } else {
      setMessage(`❌ ${data.error || 'Erreur lors de l’inscription'}`);
    }
  };

  return (
    <div className="register-container">
      <div className="form-section">
        <h2>Créer un compte</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nom complet" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">-- Sélectionnez un rôle --</option>
            <option value="etudiant">Étudiant</option>
            <option value="mentor">Mentor</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">S’inscrire</button>
        </form>
        {message && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{message}</p>}
      </div>

      <div className="image-section">
        <img src={learningImage} alt="Learning" />
      </div>
    </div>
  );
};

export default Register;
