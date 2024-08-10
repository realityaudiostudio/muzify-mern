import './App.css';
// import Carousel from './components/Carousel/Carousel';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import MnProducts from './components/MnProducts/MnProducts';
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import ProInd from './pages/ProInd';
import ProfilePg from './pages/ProfilePg';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import WishList from './pages/WishList';
import { UserProvider } from './context/UserContext';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <UserProvider>
      <ProductProvider>
    <Router>
      <Routes>
      {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/proind" element={<ProInd />} />
        <Route path="/profile" element={<ProfilePg />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/wish" element={<WishList/>} />
        <Route path="/login" element={<Login></Login>}/>
        <Route path='/signup' element={<Signup/>}/>
          {/* <Route path="/welcome" element={ <ProtectedRoute> <Welcome/> </ProtectedRoute>}/> */}
        </Routes>
    </Router>
    </ProductProvider>
    </UserProvider>
  );
}

export default App;
