import './cart.css';
import { getBasket, getTotalPrice, removeFromBasket } from '../../actions/basket';
import React from 'react';
import { useState } from 'react';

function Cart({cart, setCart}) {
    const [total, setTotal] = useState(getTotalPrice());

    const handleRemoveFromBasket = (product) => {
        removeFromBasket(product);
        setCart(getBasket());
        setTotal(getTotalPrice());
    };

    return (
        <div className="cart">
            <div className='cart__total'>
                <h2>Total :  {total.toFixed(2)}€</h2>
            </div>
            <div className='cart__cards'>
                {cart.map((basket, index) => (
                    <article className='cart__cards__card' key={index} onClick={() => handleRemoveFromBasket(basket)}>
                        <div className="selected">
                            <div className="selected__content">
                                <div className="selected__content__image center">
                                    <img src={basket.image} alt="minImage" />
                                </div>
                                <div className="selected__content__title center">
                                    <h4>{basket.title}</h4>
                                </div>
                            </div>
                            <div className="selected__count">{basket.quantity}</div>
                        </div>
                    </article>
                ))}
            </div>
            <div className='cart__footer center'>
                <h3>Coded with React.Js</h3>
            </div>
        </div>
    )
}
export default Cart;
