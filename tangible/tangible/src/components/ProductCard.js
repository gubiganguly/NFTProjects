import React from 'react'
import './ProductCard.css'
import ChangeProductImage from '../printify-api/ChangeProductImage';
import TShirtData from '../printify-api/TShirtData';
import HoodieData from '../printify-api/HoodieData';


const ProductCard = ({product, setSelectedProduct, selectedNft}) => {

    const shop_id = 3972751

    //console.log(product)
 
    if(selectedNft.length === undefined) {
        ChangeProductImage(shop_id, product.id, TShirtData(selectedNft))
        ChangeProductImage(shop_id, product.id, HoodieData(selectedNft))
    }


    async function clickView() {
        setSelectedProduct(product.id)
    }

    return (
        <div className='productCard' onClick={clickView}>
            <div className='imageContainer' style={{width: "300px", height: "300px"}}>
                <img  src={product.images[0].src} alt='' /> 
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
