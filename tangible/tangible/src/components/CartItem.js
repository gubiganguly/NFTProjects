import React from 'react'
import './CartItem.css'
import {IoIosAddCircle} from 'react-icons/io'
import {IoIosRemoveCircle} from 'react-icons/io'
import{useState} from 'react'; 

const CartItem = ({image, price}) => {

    // const [quantity, setQuantity] = useState(1)

    // let quantity = 1;

    // function addQuantity() {
    //     quantity++
    // }



    function goToProduct() {
        // go tto product page
    }
    return (
        <div className='cartItem' onClick={goToProduct}>
            <div className='imageContainer' style={{width: "300px", height: "300px"}}>
                <img className='productImage' src={image} alt='' />
                <div className='price'>
                    {`$${price}`}
                </div>
                <div className='quantity'>
                    <IoIosRemoveCircle size={30}/>{1}<IoIosAddCircle size={30}/>
                </div>
            </div>
            
        </div>
    )
}

export default CartItem
