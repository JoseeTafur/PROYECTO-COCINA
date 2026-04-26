import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <main className="home-wrapper">
      
      {/* 1. HERO CAROUSEL (Simulado con una sección de impacto) */}
      <section className="hero-slider">
        <div className="slider-item">
          <div className="container-centered slider-content">
            <span className="slider-tag">COLECCIÓN PROFESIONAL</span>
            <h1>El arte de la cocina <br /> en tus manos</h1>
            <p>Descubre herramientas diseñadas para durar toda la vida.</p>
            <button className="btn-gold">VER COLECCIÓN</button>
          </div>
        </div>
      </section>

      {/* 2. QUICK NAV (Categorías circulares estilo Falabella) */}
      <section className="container-centered quick-nav">
        {[
          { name: 'Ollas', icon: '🥘' },
          { name: 'Cuchillos', icon: '🔪' },
          { name: 'Electro', icon: '🔌' },
          { name: 'Bakehouse', icon: '🍰' },
          { name: 'Café', icon: '☕' },
          { name: 'Novedades', icon: '✨' }
        ].map((cat, i) => (
          <div key={i} className="q-item">
            <div className="q-circle">{cat.icon}</div>
            <span>{cat.name}</span>
          </div>
        ))}
      </section>

      {/* 3. PROMO GRID (Mosaico asimétrico) */}
      <section className="container-centered promo-grid">
        <div className="grid-main">
          <div className="overlay">
            <h3>Sets de Acero Inoxidable</h3>
            <p>Hasta 30% OFF</p>
            <button className="btn-outline">Comprar ahora</button>
          </div>
        </div>
        <div className="grid-side-top">
          <div className="overlay">
            <h4>Cuchillería Pro</h4>
          </div>
        </div>
        <div className="grid-side-bottom">
          <div className="overlay">
            <h4>Repostería</h4>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT SHELF (Vitrina de productos) */}
      <section className="container-centered product-shelf">
        <h2 className="section-title">Los más deseados por los Chefs</h2>
        <div className="product-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="product-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=300&q=80" alt="Producto" />
                <span className="badge-new">NUEVO</span>
              </div>
              <div className="product-info">
                <small className="brand">TRAMONTINA</small>
                <h4>Sartén de Hierro Fundido</h4>
                <div className="price-area">
                  <span className="current-price">S/ 189.00</span>
                  <span className="old-price">S/ 249.00</span>
                </div>
                <button className="btn-add">AÑADIR A LA BOLSA</button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Home;