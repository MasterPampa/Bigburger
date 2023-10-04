import Header from "../../components/header/Header"
import Cart from "../../components/cart/Cart"
import Product from "../../components/product/Product"

function Home(){
    return(
        <span>
            <Header />
            <main>
                <Cart />
                <Product />
            </main>
        </span>
    )   
}
export default Home