import './Header.css'

const Header = ({logo}) => {
    return ( 

        <header className="header">
                <figure className="figureLogo">
                    <img src={logo} alt="logo web" />
                </figure>
                <nav className="nav">
                    <ul>
                        <li>Features</li>
                        <li>Team</li>
                        <li>Sign in</li>
                    </ul>
                </nav>
        </header>
     );
}
 
export default Header;