import Header from "../../components/header/Header"
import Cart from "../../components/cart/Cart"
import Product from "../../components/product/Product"
import React, {useState} from 'react';


function Home(){
    const [isAdmin, setIsAdmin] = useState(false);
    const toggleAdmin = () => {
        setIsAdmin(!isAdmin); // Inverse la valeur de isAdmin
        console.log(isAdmin)
    };

    return(
        <span>
            <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} toggleAdmin={toggleAdmin}/>
            <main>
                <Cart />
                <Product />
            </main>
        </span>
    )   
}
export default Home