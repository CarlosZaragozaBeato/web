
import './Footer.css'

const Footer = ({logo,phone,email,twitter,instagram,facebook,location}) => {
    return ( 

        <footer className="footer">
            <figure className="footerLogo">
                <img src={logo} alt="page logo" />
            </figure>
            <div className="secondPartFooter">
                <div className="location">
                    <figure>
                        <img src={location} alt="location logo" />
                    </figure>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="firstListFooter">
                    <ul>
                        <li>
                            <figure>
                                <img src={phone} alt="phone logo" />
                            </figure>
                            <p>+1-543-123-4567</p>
                        </li>
                        <li>
                            <figure>
                                <img src={email} alt="email logo" />
                            </figure>
                            <p>example@fylo.com</p>
                        </li>
                    </ul>
                </div>
                
                <div className="listsFooter">
                <div className="secondListFooter">
                    <ul>
                        <li>
                            About Us
                        </li>
                        <li>
                            Jobs
                        </li>
                        <li>
                            Press
                        </li>
                        <li>
                            Blog
                        </li>
                    </ul>
                </div>
                <div className="thirdListFooter">
                    <ul>
                        <li>
                            Contact Us
                        </li>
                        <li>
                            Terms
                        </li>
                        <li>
                            Privacy
                        </li>
                    </ul>
                </div>
                </div>
                <div className="socialIcon">
                    <figure>
                        <img src={facebook} alt="facebook logo" />
                    </figure>
                    <figure>
                        <img src={twitter} alt="twitter logo" />
                    </figure>
                    <figure>
                        <img src={instagram} alt="instagram logo" />
                    </figure>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;