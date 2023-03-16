/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// importamos nuestro css
import '../index.css';

function BarraNav({ brand }) {
  return (
    <div className="container_navbar">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="">{brand}</a>
          <h1 className="titulo">Rick Y Morty</h1>
        </div>
      </nav>
    </div>

  );
}

export default BarraNav;
