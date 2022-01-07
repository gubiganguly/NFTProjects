import React from 'react'
import ProductCard from './ProductCard'
import './ProductList.css'
import axios from 'axios';
import{useState, useEffect} from 'react'; 

const ProductList = ({ setSelectedProduct }) => {

    // get all products from printful store
    const token = 'hOx4e0OEZvWQva3RCTUdcKQL7eCrJZeV8DfngDff'
    useEffect(() => {
      const getProducts = async () => {
        const printfulProducts  = await axios.get(
          "https://api.printful.com/store/products",
          { 
            headers: {"Authorization": `Bearer ${token}`}
          }
        )
        localStorage.setItem('products', JSON.stringify(printfulProducts.data.result))
      }
      return getProducts()
    }, [])


    let products = JSON.parse(localStorage.getItem('products'))

    console.log(products)


    return (
        <div className="productList">
            {
                products.map(product => (
                    <div key={product.id}>
                        <ProductCard
                            image={product.thumbnail_url}
                            name={product.name}
                            price={"$50"}
                            id={product.id}
                            setSelectedProduct={setSelectedProduct}
                        />
                    </div>))
            }            
        </div>
    )
}

export default ProductList
