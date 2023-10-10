import './product.css'
import Burger from '../../images/burger.png'
function Product(){
    return(
        <div className="product">
            <div className="product__cards">
                <article className="product__cards__card">
                    <div className='product__content'>
                        <div className='product__content__image'>
                            <img src={Burger} alt="burger" />
                        </div>
                        <div className='product__content__title'>Bacon burger</div>
                        <div className='product__content__details'>
                            <div className="price">5,50€ </div>
                            <div className="btn">Ajouter</div>
                        </div>
                        <div className="close"><i class="fa-solid fa-circle-xmark fa-xl"></i></div>
                    </div>
                </article>
                
            </div>
        </div>
    )
}
export default Product