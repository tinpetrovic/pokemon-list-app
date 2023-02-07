import React from 'react';
import { Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css"
import Landing from './components/Landing/Landing';
import Main from './components/Main/Main';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/pokemon" element={<Main />} />
      <Route path="/pokemon/:pokemonId" element={<PokemonInfo />} />
    </Routes>
    </>
  );
}

export default App;
