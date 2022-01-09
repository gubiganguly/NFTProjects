import React from 'react'
import './Marketplace.css'
import ProductList from './ProductList'
import axios from 'axios'
import{useState, useEffect} from 'react'; 
import ChangeProductImage from '../printify-api/ChangeProductImage';



const Marketplace = ({ setSelectedProduct, selectedNft }) => {
    
    return (
        <div className="marketPlace">
            <div className="apparel">
                Apparel  
                <div className="imgContainer" >
                    <img src={selectedNft.image} alt=''/>
                </div>
            </div>
            <ProductList selectedNft={selectedNft} setSelectedProduct={setSelectedProduct} />
        </div>
    )
}

export default Marketplace

