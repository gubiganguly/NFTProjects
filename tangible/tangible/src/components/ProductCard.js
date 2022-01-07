import React from 'react'
import './ProductCard.css'
import { useHistory } from "react-router-dom";
import{useState, useEffect} from 'react'; 

const ProductCard = ({image, name, price, id, setSelectedProduct}) => {

    async function clickView() {
        setSelectedProduct(id)
    }

    return (
        <div className='productCard' onClick={clickView}>
            <div className='imageContainer' style={{width: "300px", height: "300px"}}>
                <img  src={image} alt='' /> 
                <div className='price'>
                        {price}
                </div>
            </div>
            <div className='productName'> 
                {name}
            </div>
        </div>
    )
}

export default ProductCard
