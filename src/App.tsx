import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Inicio from './Pages/Inicio';
import Restaurant from './Pages/Restaurant';
import  Comensales  from './Pages/Comensales';
import { AboutUs } from './Pages/AboutUs';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="restaurants" element={<Restaurant />} />
          <Route path="comensales" element={<Comensales />} />
          <Route path="sobre-nosotros" element={<AboutUs />} />
        </Route>  
      </Routes>
    </Router>
  );
}

export default App;