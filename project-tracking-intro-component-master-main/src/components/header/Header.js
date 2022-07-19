import {useState} from 'react'

import logo from '../../images/logo.svg'
import menu from '../../images/icon-hamburger.svg'
import closeMenu from '../../images/icon-close.svg'
import './header.css'


const Header = ()=>{

    const[barVisible, setBarVisible]=useState(false);

    return(
    <header className="header">
        <figure className="figureLogo"> 
            <img src={logo} alt="Logo" className="logo"/>
        </figure>

        <nav className="nav">
            <figure className="figureMenu" onClick={()=>setBarVisible(!barVisible)}>
                <img src={barVisible? closeMenu:menu} alt="menu hamburguer" className="menuImg" />
            </figure>
            <ul className={`bar ${barVisible?"barVisible":""}`}>
                <li className="barItem">Product</li>
                <li className="barItem">Features</li>
                <li className="barItem">Pricing</li>
                <li className="barItem">Login</li>
            </ul>
        </nav>
    </header>
    );
}
export default Header;