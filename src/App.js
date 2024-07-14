import './App.css';
// import Carousel from './components/Carousel/Carousel';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import MnProducts from './components/MnProducts/MnProducts';
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
          {/* <Route path="/welcome" element={ <ProtectedRoute> <Welcome/> </ProtectedRoute>}/> */}
        </Routes>
    </Router>
  );
}

export default App;
