import React, { useEffect, useState } from 'react';
import './index.css';
import BarraNav from './Componentes/BarraNav';
import Personajes from './Componentes/Personajes';
import Footer from './Componentes/Footer';

const urlRM = 'https://rickandmortyapi.com/api/character';

function App() {
  const [personajes, setPersonajes] = useState([]);

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(urlRM);
  }, []);
  return (
    <>
      <BarraNav />
      <div className="container-fluid">
        <Personajes characters={personajes} />
      </div>
      <Footer />
    </>
  );
}

export default App;
