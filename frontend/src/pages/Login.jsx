import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // LÓGICA TEMPORAL:
    if (email === 'admin@culinaria.com') {
      navigate('/admin'); // Perfil Admin
    } else {
      navigate('/'); // Perfil Usuario normal
    }
  };

  return (
    <main className="login-container">
      <div className="login-card">
        <span className="brand-accent">Bienvenido a</span>
        <h2 className="brand-name">CULINARIA</h2>
        <p className="login-subtitle">Ingresa para gestionar tus pedidos y colecciones.</p>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label>Correo Electrónico</label>
            <input 
              type="email" 
              placeholder="ejemplo@correo.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn-login">ENTRAR</button>
        </form>
        
        <div className="login-footer">
          <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
        </div>
      </div>
    </main>
  );
};

export default Login;