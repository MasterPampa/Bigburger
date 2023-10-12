import Header from "../../components/header/Header"
import Cart from "../../components/cart/Cart"
import Product from "../../components/product/Product"
import React, {useState} from 'react';
import {getBasket, addBasket, getTotalPrice} from '../../actions/basket.js'

function Home(){
    const [isAdmin, setIsAdmin] = useState(false);
    const [total, setTotal] = useState(getTotalPrice());
    const [cart, setCart] = useState(getBasket());

    const toggleAdmin = () => {
        setIsAdmin(!isAdmin); 
        console.log(isAdmin)
    };
    const handleAddToBasket = (product) => {
        console.log(getBasket())
        addBasket(product);
        setCart(getBasket());
        setTotal(getTotalPrice());
    }

    return(
        <span>
            <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} toggleAdmin={toggleAdmin}/>
            <main>
                <Cart cart={cart} setCart={setCart} handleAddToBasket={handleAddToBasket} total={total} setTotal={setTotal} getTotalPrice={getTotalPrice}/>
                <Product isAdmin={isAdmin} cart={cart} handleAddToBasket={handleAddToBasket}/>
            </main>
        </span>
    )   
}
export default Home;