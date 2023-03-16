import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ImgLogo from '../img/logo.png';
// importamos el css del footer
import '../index.css';

function Footer() {
  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-sm-12 footer_izq">
          <div className="footer-copyright">
            <p>
              © Pagina creada por Cristina Alcántara del
              {' '}
              <a href="http://www.ies-azarquiel.es/">IES AZARQUIEL</a>
              .
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 footer_der">
          <img className="logo_footer" align="right" src={ImgLogo} alt="logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
