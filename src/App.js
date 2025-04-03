import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import necklace_banner from './Components/Assets/banner_daychuyen.png';
import bracelet_banner from './Components/Assets/banner_vongtay.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/necklaces' element={<ShopCategory banner={necklace_banner} category='necklaces'/>}/>
          <Route path='/bracelets' element={<ShopCategory banner={bracelet_banner} category='bracelets'/>}/>
          <Route path='product' elemnet={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
