import './App.css';
import Header from './components/Header';
import{useState, useEffect} from 'react'; 
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom'
import YourNftList from './components/YourNftList';
import ProductList from './components/ProductList';
import Marketplace from './components/Marketplace';
import axios from 'axios';
import Hoodie_Mockup from './printful-products/hoodie-mockup';





function App() {

  const [selectedNft, setSelectedNft] = useState([0, ''])
  const [selectedProduct, setSelectedProduct] = useState([])

  
   const token = 'hOx4e0OEZvWQva3RCTUdcKQL7eCrJZeV8DfngDff'
  
  
  // CREATE MOCKUP IMAGE
  
  
  // useEffect(() => {
  //   const data = Hoodie_Mockup()
  //   async function createTask() {
  //     let res = await axios.post(
  //       "https://api.printful.com/mockup-generator/create-task/388",
  //       data,
  //       {headers: {'Authorization': `Bearer ${token}`}} 
  //     )
  //     console.log(res.data.result)
  //     return res;
  //   }
  //   createTask()
  // }, [])


  // useEffect(() => {
  //   async function getMockup() {
  //     let mockup = await axios.get(
  //       "https://api.printful.com/mockup-generator/task?task_key=x59e48def6f5a0f185a584ad730e41c4",
  //       {headers: {'Authorization': `Bearer ${token}`}} 
  //     )
  //     console.log(mockup.data.result)
  //     return mockup
  //   }
  //   getMockup()
  // }, [])

  return (
    <Router>
      <div className="app">
        <Header />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <YourNftList setSelectedNft={setSelectedNft} />
              <Marketplace setSelectedProduct={setSelectedProduct} selectedNft={selectedNft}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
