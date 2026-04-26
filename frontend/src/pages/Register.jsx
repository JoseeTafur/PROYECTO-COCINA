import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css'; // Usamos el mismo archivo base o uno nuevo

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Usuario Registrado:", formData);
    navigate('/login'); 
  };

  return (
    <main className="login-container">
      <div className="login-card">
        <span className="brand-accent">Crea tu cuenta en</span>
        <h2 className="brand-name">CULINARIA</h2>
        <p className="login-subtitle">Únete a nuestra comunidad de chefs y apasionados.</p>
        
        <form onSubmit={handleRegister} className="login-form">
          <div className="input-group">
            <label>Nombre Completo</label>
            <input 
              type="text" 
              name="nombre"
              placeholder="Ej. Jose Limo" 
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-group">
            <label>Correo Electrónico</label>
            <input 
              type="email" 
              name="email"
              placeholder="ejemplo@correo.com" 
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-group">
            <label>Teléfono / WhatsApp</label>
            <input 
              type="tel" 
              name="telefono"
              placeholder="+51 900 000 000" 
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              name="password"
              placeholder="Mínimo 8 caracteres" 
              onChange={handleChange}
              required 
            />
          </div>

          <button type="submit" className="btn-login">CREAR CUENTA</button>
        </form>
        
        <div className="login-footer">
          <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
        </div>
      </div>
    </main>
  );
};

export default Register;