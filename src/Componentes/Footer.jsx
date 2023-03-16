import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ImgLogo from '../img/logo.png';
// importamos el css del footer
import '../index.css';

function Footer() {
  return (
    <footer>
      <div className="footer-bottom">
        <div className="container-footer-inf container-fluid">
          <div className="row">
            <div className="col-md-6 footer-copyright">
              © Pagina creada por Cristina Alcántara
              {' '}
              <a href="http://www.ies-azarquiel.es/">IES AZARQUIEL</a>
              <img className="logo-footer" src={ImgLogo} alt="logo" id="logo-footer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
