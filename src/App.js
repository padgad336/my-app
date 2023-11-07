
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home-page';

function App() {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/" />
      </Routes>
    </>
  );
}

export default App;
