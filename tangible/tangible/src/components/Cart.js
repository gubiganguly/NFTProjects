import React from 'react'
import './Cart.css'
import CartItem from './CartItem'

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div className='cart'>
            <div className='cartTitle'>
                Your Products
            </div>
            <div className="cartList">
            {
                cart.map(productInfo=> (
                    <div key={productInfo[2]}>
                        <CartItem image={productInfo[0].images[0].src} price={productInfo[0].variants[0].price/100}/>
                    </div>
                ))
            }
            </div> 
        </div>
    )
}

export default Cart
