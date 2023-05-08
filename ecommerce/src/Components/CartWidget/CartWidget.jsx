import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
    const imgCarrito = "../cartLogo.png"
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="carrito" />

        </div>
    )
}

export default CartWidget