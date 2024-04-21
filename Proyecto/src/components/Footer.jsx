// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css'; // Asegúrate de crear este archivo para estilos

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h5>Sobre Nosotros</h5>
            <p>Somos una tienda en línea comprometida con la calidad y el servicio al cliente.</p>
          </div>
          <div className="footer-section">
            <h5>Contacto</h5>
            <p>Email: contacto@nuestraecommerce.com</p>
            <p>Teléfono: +1 234 567 8900</p>
          </div>
          <div className="footer-section">
            <h5>Síguenos</h5>
            <p>Facebook | Twitter | Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
