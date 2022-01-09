import React from 'react'
import './Marketplace.css'
import ProductList from './ProductList'


const Marketplace = ({ setProducts, products, setSelectedProduct, selectedNft }) => {
    
    return (
        <div className="marketPlace">
            <div className="apparel">
                Apparel  
                <div className="imgContainer" >
                    <img src={selectedNft.image} alt=''/>
                </div>
            </div>
            <ProductList setProducts={setProducts} selectedNft={selectedNft} setSelectedProduct={setSelectedProduct} />
        </div>
    )
}

export default Marketplace

