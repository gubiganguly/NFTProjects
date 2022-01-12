import './App.css';
import Header from './components/Header';
import{useState, useEffect} from 'react'; 
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom'
import YourNftList from './components/YourNftList';
import Marketplace from './components/Marketplace';
import axios from 'axios';
import Product from './printify-api/Product';
import Uploads from './printify-api/Uploads';
import DeleteUploads from './printify-api/DeleteUploads';
import Products from './printify-api/Products';
import Details from './components/Details';
import Cart from './components/Cart';




function App() {

  // App data
  const [yourNfts, setYourNfts] = useState([])
  const [selectedNft, setSelectedNft] = useState([])
  
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState([])
  const [cart, setCart] = useState([])

  //console.log(products)

  //console.log(cart)

  return (
    <Router>
      <div className="app">
        <Header cart={cart}/>
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <YourNftList yourNfts={yourNfts} setYourNfts={setYourNfts} setSelectedNft={setSelectedNft} />
              <Marketplace setProducts={setProducts} products={products} setSelectedProduct={setSelectedProduct} selectedNft={selectedNft} />
            </Route>
            <Route exact path="/details">
              <Details cart={cart} setCart={setCart}/>
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
