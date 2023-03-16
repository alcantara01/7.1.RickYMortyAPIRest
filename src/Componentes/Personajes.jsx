/* eslint-disable react/prop-types */
import React from 'react';
import '../index.css';

function Personajes({ characters }) {
  return (
    <div className="container container-fluid">
      <div className="row gx-4 justify-content-center">
        {
          characters.map((item) => (
            <div className="col col-lg-3 col-md-4 col-sm-6 col-12 ">
              <div className="card mt-3 text-center">
                <img src={item.image} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <hr />
                  <p>
                    Especie:
                    {' '}
                    {item.species}
                  </p>
                  <p>
                    Localización:
                    {' '}
                    { item.location.name}
                  </p>
                </div>
              </div>
              <br />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Personajes;
