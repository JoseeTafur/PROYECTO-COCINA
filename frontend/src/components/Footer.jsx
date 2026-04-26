import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container-centered footer-content">
        
        {/* Columna 1: Identidad */}
        <div className="footer-column brand-col">
          <h2 className="footer-logo">CULINARIA<span>STORE</span></h2>
          <p className="footer-tagline">Equipando los sueños de cada chef en casa con piezas de alta gama.</p>
          <div className="social-links">
            <span>FB</span> <span>IG</span> <span>YT</span>
          </div>
        </div>

        {/* Columna 2: Navegación */}
        <div className="footer-column">
          <h4>EXPLORAR</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/categoria/ollas">Colecciones</Link></li>
            <li><Link to="/categoria/cuchillos">Cuchillería</Link></li>
            <li><Link to="/historial">Mi Historial</Link></li>
          </ul>
        </div>

        {/* Columna 3: Soporte */}
        <div className="footer-column">
          <h4>SERVICIO</h4>
          <ul>
            <li><a href="#">Centro de Ayuda</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Libro de Reclamaciones</a></li>
            <li><a href="#">Políticas de Envío</a></li>
          </ul>
        </div>

        {/* Columna 4: Contacto Local */}
        <div className="footer-column">
          <h4>CONTACTO</h4>
          <p>📍 Chiclayo, Lambayeque - Perú</p>
          <p>📞 +51 987 654 321</p>
          <p>✉️ hola@culinariastore.com</p>
          <div className="payment-methods">
            💳 🏦 📱
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container-centered">
          <p>&copy; 2026 Culinaria Store. Todos los derechos reservados. Diseñado para Chefs.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;