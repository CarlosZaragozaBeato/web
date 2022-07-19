import {Link,NavLink } from "react-router-dom";
const NavBar = () => {
    return (  

        <nav>
            <ul>
                <Link to="/"><li>Home</li></Link> 
                <NavLink activeClassName="active" to="/about">
                About
                </NavLink>
                <Link to="/Contact"><li>Contact</li></Link> 
                <Link to="/Shop"><li>Shop</li></Link> 
            </ul>

        </nav>
    );
}
 
export default NavBar;