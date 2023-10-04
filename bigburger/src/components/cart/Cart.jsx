import './cart.css'
function Cart(){
    return(
        <div className="cart">
            <div className='cart__total'>
                <h2>Total :</h2>
            </div>
            <div className='cart__cards'>
                <article className='cart__cards__card'></article>
            </div>
            <div className='cart__footer'>
                <h3>Coded with React.Js</h3>
            </div>
        </div>
    )
}
export default Cart