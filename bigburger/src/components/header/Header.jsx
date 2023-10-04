import './header.css'
import Logo from '../../images/logo.png'

function Header(){
    return(
        <header>
            <div className='title'>
                <img className='logo' srcSet={Logo}></img>
                <h1>Big Burger</h1>
            </div>
            <nav>
                <div className='admin'>
                    <div className='admin__button'></div>
                    <p>Activer le mode admin</p>
                </div>
                <div className='profile'>
                </div>
            </nav>
        </header>
    )
}
export default Header