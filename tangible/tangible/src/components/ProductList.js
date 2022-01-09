import React from 'react'
import ProductCard from './ProductCard'
import './ProductList.css'
import Products from '../printify-api/Products'
 

const ProductList = ({ selectedNft, setSelectedProduct }) => {

    const shop_id = 3972751

    let products = Products(shop_id)

    //console.log(products)

    return (
        <div className="productList">
            {
                products.map(product => (
                    <div key={product.id}>
                        <ProductCard
                            product={product}
                            setSelectedProduct={setSelectedProduct}
                            selectedNft={selectedNft}
                        />
                    </div>))
            }            
        </div>
    )
}

export default ProductList
