import React from 'react'
import './Details.css'
import{ useEffect, useState } from 'react'; 
import axios from 'axios';

const Details = () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjI2YmM4MTg1ZTRiYTRjNzA3NDAwODljYzY2Njg4MzQ1NTdjNjY5OGFlYzRiY2JmOGVlMDVjZTVkMGU4YTY5OGU1ZjQwNDQ5ZGQ4ZDgwZWQ1IiwiaWF0IjoxNjQxNTM1MTgxLCJuYmYiOjE2NDE1MzUxODEsImV4cCI6MTY3MzA3MTE4MSwic3ViIjoiOTE2ODc0MSIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.Au0BojaaHj3uF_ghpEOyG_xcE-HSagLN7ETemoCH7LphflYLncFP7zUx48CWbm-ReBiwILJ330I_d0Raync'
    const shop_id = 3972751
    
    const product = JSON.parse(localStorage.getItem('selectedProduct'))
    const images = product.images
    const sizes = product.options[0].values
    const [size, setSize] = useState()
    const [color, setColor] = useState('#000000')
    //console.log(sizes)

    //console.log(product)


    function getSize(s) {
        return () =>  {
            
            setSize(s.title)
        }
    }

    function getColor() {
        var input = document.getElementById('colorInput').value
        setColor(input)
    }

    console.log(color)

    

    function addToCart() {
        
    }


    return (
        <div className='details'>

            <div className='productImageContainer'>
                <img src={images[0].src+`?v=${Date.now()}`} alt='' />
                {
                    images.map(img => (
                        <img className='subImages' src={img.src} alt='' />
                    ))
                }
            </div>


            <div className='optionsContainer'>
                <div className='options'>
                    <h1 className='title'>{product.title}</h1>
                    <p className='cost'>${product.variants[0].price/100}</p>
                    <p className='sizeTitle'>Select Size</p>
                    <div className='sizeContainer'>
                    {
                        sizes.map(size => (
                            <div id={size.id} className='box' onClick={getSize(size)}>
                                {size.title}
                            </div>
                        ))
                    }
                    </div>
                    <p>Custom Color</p>
                    <div className='changeColorContainer'>
                        <div className='colorInputBar'>
                            <input id='colorInput' className='colorInput' placeholder='Hex Color: i.e #66feea' maxlength="7"/>
                        </div>
                        <button id='colorButton' className='colorButton' onClick={getColor}>
                            
                        </button>
                        <div className='addToCart' onClick={addToCart}>
                            Cart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
