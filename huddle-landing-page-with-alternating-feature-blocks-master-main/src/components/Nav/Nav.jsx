import './Nav.css'
import React from 'react'
const Nav = ({logo}) => {
    return ( 
        <nav>
            <figure>
                <img src={logo} alt="page logo" width="120px" height="20px"/>
            </figure>

            <button>Try It Free</button>
        </nav>
     );
}
 
export default Nav;