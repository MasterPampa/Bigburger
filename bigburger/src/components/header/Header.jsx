import './header.css'
import Logo from '../../images/logo.png'


function Header({ isAdmin, toggleAdmin }) {
   
    return(
        <header>
            <div className='title'>
                <img className='logo' srcSet={Logo}></img>
            </div>
            <nav>
                <div className={isAdmin ? 'admin connected' : 'admin'}>
                    <div className={isAdmin ? 'admin__button switch' : 'admin__button'} onClick={toggleAdmin}></div>
                    <p>{isAdmin ? 'Désactiver le mode admin' : 'Activer le mode admin'}</p>
                </div>
                <div className='profile'>
                    <div className='profile__intro'>
                        <h4>Hey, <span className='username'>$username</span></h4>
                        <p>Se déconnecter</p>
                    </div>
                    <div className='profile__button'><i className="fa-regular fa-circle-user "></i></div>
                </div>
            </nav>
        </header>
    )
};
export default Header;