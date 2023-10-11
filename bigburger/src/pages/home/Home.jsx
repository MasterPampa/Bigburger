import Header from "../../components/header/Header"
import Cart from "../../components/cart/Cart"
import Product from "../../components/product/Product"
import React, {useState} from 'react';
import {getBasket, addBasket} from '../../actions/basket.js'

function Home(){
    const [isAdmin, setIsAdmin] = useState(false);
    const toggleAdmin = () => {
        setIsAdmin(!isAdmin); 
        console.log(isAdmin)
    };
    const [cart, setCart] = useState(getBasket());
    const handleAddToBasket = (product) => {
        console.log(getBasket())
        addBasket(product);
        setCart(getBasket());
        console.log(getBasket())
    }

    return(
        
        <span>
            <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} toggleAdmin={toggleAdmin}/>
            <main>
                <Cart cart={cart} setCart={setCart} handleAddToBasket={handleAddToBasket}/>
                <Product isAdmin={isAdmin} cart={cart} handleAddToBasket={handleAddToBasket}/>
            </main>
        </span>
    )   
}
export default Home