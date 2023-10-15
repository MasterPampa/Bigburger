import './cart.css';
import { getBasket, changeQuantity } from '../../actions/basket';
import React from 'react';
import { useState } from 'react';

function Cart({cart, setCart, getTotalPrice, total, setTotal, isCartOpen, toggleMobileCart}) {

    const handleChangeFromBasket = (product) => {
        changeQuantity(product);
        console.log(changeQuantity)
        setCart(getBasket());
        setTotal(getTotalPrice());
    };

    return (
        <div className={isCartOpen ? 'cart ' : 'cart mobileCartOpen' }>
            <div className='cart__total'>
                <h2>Total :  {total.toFixed(2)}€</h2>
            </div>
            <div className='cart__cards'>
                {cart.map((basket, index) => (
                    <article className='cart__cards__card' key={index} onClick={() => handleChangeFromBasket(basket)}>
                        <i class="fa-solid fa-circle-minus remove fa-xl"></i>
                        <div className="selected">
                            <div className="selected__content">
                                <div className="selected__content__image center">
                                    <img src={basket.image} alt="minImage" />
                                </div>
                                <div className="selected__content__title center">
                                    <h4>{basket.title}</h4>
                                </div>
                            </div>
                            <div className="selected__count">x{basket.quantity}</div>
                        </div>
                    </article>
                ))}
            </div>
            <div className='cart__footer center'>
                    {isCartOpen ?                  
                       <h2 className="cartButton" onClick={toggleMobileCart}><i class="fa-solid fa-cart-shopping"></i>Panier</h2>
                        : <h3>Coded with React.Js</h3> }
            </div>
        </div>
    )
}
export default Cart;
