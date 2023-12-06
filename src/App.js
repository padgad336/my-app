
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home-page';
import ListPokemon from './pages/list-pokemon';

function App() {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={ListPokemon} path="/list" />
      </Routes>
    </>
  );
}

export default App;
