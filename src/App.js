import './App.css';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MnProducts from './components/MnProducts/MnProducts';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <MnProducts></MnProducts>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  );
}

export default App;
