import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="chef-header">
      <div className="container-centered header-flex">
        
        {/* LADO IZQUIERDO: Navegación Principal */}
        <nav className="nav-menu">
          <ul>
            <li><Link to="/categoria/ollas">COLECCIONES</Link></li>
            <li><Link to="/categoria/cuchillos">CUCHILLERÍA</Link></li>
            <li><Link to="/historial">HISTORIAL</Link></li>
          </ul>
        </nav>

        {/* CENTRO: Logo Gourmet */}
        <div className="logo-area">
          <Link to="/" className="brand-link">
            <span className="brand-accent">Culinaria</span>
            <h1 className="brand-name">STORE</h1>
          </Link>
        </div>

        {/* LADO DERECHO: Buscador y Bolsa */}
        <div className="header-actions">
          <div className="search-box">
            <input type="text" placeholder="Buscar pieza..." />
            <span className="search-icon">🔍</span>
          </div>
          
          <Link to="/carrito" className="cart-btn">
            <span className="cart-text">MI BOLSA</span>
            <div className="cart-icon-container">
              <span className="cart-emoji">👜</span>
              <span className="cart-count">0</span>
            </div>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;