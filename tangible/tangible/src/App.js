import './App.css';
import Header from './components/Header';
import{useState, useEffect} from 'react'; 
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom'
import YourNftList from './components/YourNftList';
import Marketplace from './components/Marketplace';
import axios from 'axios';
import Product from './printify-api/Product';
import Uploads from './printify-api/Uploads';
import ChangeProductImage from './printify-api/ChangeProductImage';
import DeleteUploads from './printify-api/DeleteUploads';




function App() {

  // App data
  const [account, setAccount] = useState(0)
  const [yourNfts, setYourNfts] = useState([])
  const [selectedNft, setSelectedNft] = useState([])
  
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState()

  

  const shop_id = 3972751

  

  
  return (
    <Router>
      <div className="app">
        <Header setAccount={setAccount}/>
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <YourNftList setSelectedNft={setSelectedNft} />
              <Marketplace setSelectedProduct={setSelectedProduct} selectedNft={selectedNft} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
