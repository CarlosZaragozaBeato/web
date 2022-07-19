
import './Footer.css'

const Footer = ({phone,mail,logo}) => {
    return ( 

        <footer className="footer">
            <figure className="figureFooter">
                <img src={logo} alt="logo image" />
                <figcaption>Fylo</figcaption>
            </figure>
            
            
            <div className="navFooter">
                <div className="firstList footerList">
                    <ul>
                        <li>
                            <figure>
                                <img src={phone} alt="phone icon" />
                            </figure> 
                            Phone: +1-543-123-4567
                        </li>
                        <li>
                            <figure>
                                <img src={mail} alt="mail icon" />
                            </figure> 
                            example@fylo.com
                        </li>
                    </ul>
                </div>
                
                <div className="secondList footerList">
                    <ul>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="thirdList footerList">
                    <ul>
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>

                <div className="socialMediaIcons">
                         <i class="fa-brands fa-facebook-f"></i>
                         <i class="fa-brands fa-twitter"></i>
                         <i class="fa-brands fa-instagram"></i>
                </div>

            </div>

        </footer>

     );
}
 
export default Footer;