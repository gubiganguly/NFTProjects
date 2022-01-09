import axios from "axios";
import{useState, useEffect} from 'react'; 
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjI2YmM4MTg1ZTRiYTRjNzA3NDAwODljYzY2Njg4MzQ1NTdjNjY5OGFlYzRiY2JmOGVlMDVjZTVkMGU4YTY5OGU1ZjQwNDQ5ZGQ4ZDgwZWQ1IiwiaWF0IjoxNjQxNTM1MTgxLCJuYmYiOjE2NDE1MzUxODEsImV4cCI6MTY3MzA3MTE4MSwic3ViIjoiOTE2ODc0MSIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.Au0BojaaHj3uF_ghpEOyG_xcE-HSagLN7ETemoCH7LphflYLncFP7zUx48CWbm-ReBiwILJ330I_d0Raync'

/**
 * Gets a single product from a product_id
 * @param {*} shop_id 
 * @param {*} product_id 
 * @returns Json file of a single product
 */
const Product = (shop_id, product_id) => {

    const [product, setProduct] = useState([])

    const printify = axios.create({
    baseURL: 'https://api.printify.com/v1/',
    headers: {'Authorization': `Bearer ${token}`}
    })

    useEffect(() => {
        async function getProduct() {
          let product = await printify.get(`/shops/${shop_id}/products/${product_id}.json`)
          setProduct(product.data)
          return product.data
        }
        getProduct()
      }, [shop_id, product_id])

      return product
}

export default Product