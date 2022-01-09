import React from 'react'
import './ProductCard.css'
import { useHistory } from 'react-router'

const ProductCard = ({product, setSelectedProduct, selectedNft}) => {

    let history = useHistory();
    
    async function seeDetails() {
        localStorage.setItem('selectedProduct', JSON.stringify(product))
        history.push("/details");
    }

    return (
        <div className='productCard' onClick={seeDetails}>
            <div className='imageContainer' style={{width: "300px", height: "300px"}}>
                <img  src={product.images[0].src+`?v=${Date.now()}`} alt='' /> 
                <div className='price'>
                    {`$${(product.variants[0].price)/100}`}
                </div>
            </div>
            <div className='productName'> 
                {product.title}
            </div>
        </div>
    )
}

export default ProductCard
