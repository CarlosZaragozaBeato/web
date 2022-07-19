
import './Nav.css'


const Nav = ({logo}) => {
    return ( 

        <header className="headerNav">
            <figure>
                <img src={logo} alt="Page Logo" />
            </figure>
       
        <nav className="nav">
            <ul>
                <li>Features</li>
                <li>Team</li>
                <li>Sign In</li>
            </ul>
        </nav>
        </header>

     );
}
 
export default Nav;