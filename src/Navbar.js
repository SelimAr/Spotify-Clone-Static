import React, {useState} from 'react'
import './Styles/Navbar.css'
import Spotify from './Media/Spotify_Logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Nav() {

    const [open, setOpen] = useState(false);

    const wakeUp = () => setOpen(!open);

    return (
        <header className="navbar">
            <div className="navbar_content">
                <img className="navbar_logo" src={Spotify} alt=""/>
                <MenuIcon onClick={wakeUp} fontSize="large" className="BurgerMenu" />
                    {open ?
                        <div className="background_sidebar">
                            <div className="sidebar">
                                <CloseIcon onClick={() => setOpen(false)} fontSize="large" className="CloseIcon"/>
                                <li>Premium</li>
                                <li>Assistance</li>
                                <li>Télécharger</li>
                                <div className="tiret_sidebar"></div>
                                <li className="ins_con">S'inscrire</li>
                                <li className="ins_con">Connexion</li>
                                <img className="logo_sidebar" src={Spotify} alt=""/>
                            </div>
                        </div>
                    : null}
                    
                    
                <div className="navbar_text">
                    <p className="navbar_menu">Premium</p>
                    <p className="navbar_menu">Assistance</p>
                    <p className="navbar_menu">Télécharger</p>
                    <span className="span_menu">|</span>
                    <p className="navbar_menu">S'inscrire</p>
                    <p className="navbar_menu">Connexion</p>
                </div>
            </div>
        </header>
    )
}

export default Nav
