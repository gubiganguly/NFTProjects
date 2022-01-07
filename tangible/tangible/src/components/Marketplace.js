import React from 'react'
import './Marketplace.css'
import ProductList from './ProductList'
import axios from 'axios'
import{useState, useEffect} from 'react'; 
import Hoodie from '../printful-products/hoodie';


const Marketplace = ({ setSelectedProduct, selectedNft }) => {
    const token = 'hOx4e0OEZvWQva3RCTUdcKQL7eCrJZeV8DfngDff'


    // get info on a product
    async function getHoodieInfo() {
        const hoodie = await axios.get(
            `https://api.printful.com/store/products/${262232725}`, 
            { headers: {'Authorization': `Bearer ${token}`}  } 
        );
        return hoodie;
    }

    


    // Modify product
    useEffect(() => {
        const data = Hoodie(selectedNft[0])

        async function changeHoodie() {
            if(selectedNft[0] != 0) {
                await axios.put(
                    `https://api.printful.com/store/products/${262232725}`, 
                    data,
                    { headers: {'Authorization': `Bearer ${token}`}  } 
                );
            }
        }
        //console.log(data)
        changeHoodie()
    }, [selectedNft[0]])
    
      

    return (
        <div className="marketPlace">
            <div className="apparel">
                Apparel  
                <div className="imgContainer" >
                    <img src={selectedNft[0]} alt=''/>
                </div>
            </div>
            <ProductList setSelectedProduct={setSelectedProduct} />
        </div>
    )
}

export default Marketplace

