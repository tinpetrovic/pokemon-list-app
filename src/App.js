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
      <Route path="/pokemon-list-app/" element={<Landing />} />
      <Route path="/pokemon-list-app/pokemon" element={<Main />} />
      <Route path="/pokemon-list-app/pokemon/:pokemonId" element={<PokemonInfo />} />
    </Routes>
    </>
  );
}

export default App;
