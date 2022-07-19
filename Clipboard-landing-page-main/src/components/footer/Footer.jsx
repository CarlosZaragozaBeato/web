
import './Footer.css';

const Footer =({logo,facebook,twitter,instagram})=>{
    return(
            <footer className="footer">
                <div className="firstGroup">
                <figure className="figureIconFooter">
                    <img src={logo} alt="logo icon" className="imgIcon" />
                </figure>
                <div className="navFooter">
                    <div className="navGrp1 grpFooter">
                        <p>FAQs</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="navGrp2 grpFooter"> 
                        <p>Privacy Policy</p>
                        <p>Press Kit</p>
                    </div>
                    <div className="navGrp3 grpFooter">
                        <p>Install Guide</p>
                    </div>
                </div>
                </div>
                <div className="figureGrpFooter">
                    <figure className="figureLogoFooter">
                        <img src={facebook} alt="facebook icon"/>
                    </figure>
                    <figure className="figureLogoFooter">
                        <img src={twitter} alt="twitter icon"/>
                    </figure>
                    <figure className="figureLogoFooter"> 
                        <img src={instagram} alt="instagram icon" />
                    </figure>
                </div>

            </footer>
    );
}
export default Footer;