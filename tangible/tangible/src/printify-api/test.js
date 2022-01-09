import axios from "axios";
import{useState, useEffect} from 'react'; 
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjI2YmM4MTg1ZTRiYTRjNzA3NDAwODljYzY2Njg4MzQ1NTdjNjY5OGFlYzRiY2JmOGVlMDVjZTVkMGU4YTY5OGU1ZjQwNDQ5ZGQ4ZDgwZWQ1IiwiaWF0IjoxNjQxNTM1MTgxLCJuYmYiOjE2NDE1MzUxODEsImV4cCI6MTY3MzA3MTE4MSwic3ViIjoiOTE2ODc0MSIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.Au0BojaaHj3uF_ghpEOyG_xcE-HSagLN7ETemoCH7LphflYLncFP7zUx48CWbm-ReBiwILJ330I_d0Raync'

const ChangeProductImage = (shop_id, product_id, image, image_id, background) => {

    const data = {
        "print_areas": [
            {
              "variant_ids": [70647, 70648, 70649, 70650, 70651, 70652, 70653, 70654],
              background: `${background}`,
              "placeholders": [
                {
                  "position": "front",
                  "images": [
                      {
                        "angle": 0,
                        "height": 1400,
                        "width": 1400,
                        "id": `${image_id}`, 
                        "name": `${image}`,
                        "scale": 0.39878356757179984,
                        "type": "image/jpeg",
                        "x": 0.49764881006166284, 
                        "y": 0.49999804028849115, 
                      }
                  ]
                }
              ]
            }
          ]
    }

    const printify = axios.create({
        baseURL: 'https://api.printify.com/v1/',
        headers: {'Authorization': `Bearer ${token}`}
    })

    const [info, setInfo] = useState('')

    useEffect(() => {
        async function changeImage() {

          let changeImage = await printify.put(
              `/shops/${shop_id}/products/${product_id}.json`,
              data
          )

          setInfo(changeImage.data.images[0].src)
          window.location.reload(false)
          return changeImage.data
        }
        
        changeImage()
    }, [image, image_id])

    return info
}

export default ChangeProductImage