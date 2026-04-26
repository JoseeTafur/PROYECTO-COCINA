import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Carrito from './pages/Carrito';
import Historial from './pages/Historial';
import Footer from './components/Footer';
import Login from './pages/Login';      
import Register from './pages/Register'; 
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        
        {/* El contenido de las páginas */}
        <Routes>
  <Route path="/" element={<Home />} />

  <Route path="/carrito" element={<Carrito />} />
  <Route path="/historial" element={<Historial />} />
  <Route path="/login" element={<Login />} />       {/* Ahora funcionará */}
  <Route path="/register" element={<Register />} /> {/* Ahora funcionará */}
</Routes>

        <Footer /> {/* <--- Lo colocamos aquí */}
      </div>
    </Router>
  );
}

export default App;