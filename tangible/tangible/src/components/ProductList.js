import React from 'react'
import ProductCard from './ProductCard'
import './ProductList.css'
import axios from 'axios'
import{useState, useEffect} from 'react'; 
import TShirtData from '../printify-api/TShirtData';
import HoodieData from '../printify-api/HoodieData';

const ProductList = ({ setProducts, selectedNft, setSelectedProduct }) => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjI2YmM4MTg1ZTRiYTRjNzA3NDAwODljYzY2Njg4MzQ1NTdjNjY5OGFlYzRiY2JmOGVlMDVjZTVkMGU4YTY5OGU1ZjQwNDQ5ZGQ4ZDgwZWQ1IiwiaWF0IjoxNjQxNTM1MTgxLCJuYmYiOjE2NDE1MzUxODEsImV4cCI6MTY3MzA3MTE4MSwic3ViIjoiOTE2ODc0MSIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.Au0BojaaHj3uF_ghpEOyG_xcE-HSagLN7ETemoCH7LphflYLncFP7zUx48CWbm-ReBiwILJ330I_d0Raync'
    const shop_id = 3972751
    
    // get product list
    const [productList, setProductList] = useState([])
    const printify = axios.create({
        baseURL: 'https://api.printify.com/v1/',
        headers: {'Authorization': `Bearer ${token}`}
        })
    useEffect(async () => {
        if (selectedNft.length === undefined) { // change products if selectedNftChanded
            let tShirt = await printify.put(
                `/shops/${shop_id}/products/61d7d4e4a707991ade073074.json`,
                TShirtData(selectedNft)
            )
            let hoodie = await printify.put(
                `/shops/${shop_id}/products/61da385026014d12f62cbd44.json`,
                HoodieData(selectedNft)
            )
        }
        // update product list
        let productData = await printify.get(`/shops/${shop_id}/products.json`)
        setProductList(productData.data.data)
        setProducts(productList)
        
    }, [selectedNft])



    return (
        <div className="productList">
            {
                productList.map(product => (
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
