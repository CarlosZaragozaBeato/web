import { FaInstagram,FaFacebookF,FaTwitter} from 'react-icons/fa';
import {useState} from 'react'
import './Footer.css'
const Footer = ({logo,phone,mail}) => {
    const pattern =
    /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    const [email,setEmail] = useState("");
    const [error,setError] = useState(false)
    const prevent = (e)=>{
        e.preventDefault();
    }
    
    function Validate(){
        if(email.match(pattern)){
            setError(false)
            setEmail("")
        }else{
            setError(true)   
        }
    }

    return (    
        <footer className="footer">
            <div className="footerContainer">
                <div className="firstPartContainer">
                    <div className="logoFooter">
                        <figure>
                            <img src={logo} alt="logo icon" />
                        </figure>
                        <h3>Huddle</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
                    
                    <div className="contactGroup">
                    <div className="contact">
                        <figure>
                            <img src={phone} alt="phone icon" />
                        </figure>
                        <p>Phone: +1-543-123-4567</p>
                    </div>
                    <div className="contact">
                        <figure>
                            <img src={mail} alt="mail icon" />
                        </figure>
                        <p>example@huddle.com</p>
                    </div>
                    </div>
                    

                    <div className="socialIcons">
                        <FaFacebookF className="facebook"/>
                        <FaInstagram className="instagram"/>
                        <FaTwitter className="twitter"/> 
                    </div>
                </div>
                <div className="secondPartContainer">
                        <div className="newsletter">
                        <h3>Newsletter</h3>
                            <p>
                            To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address
                            </p>
                        </div>
                      
                        <form className="form" onSubmit={(e)=>prevent(e)}>
                        <label htmlFor="mail" className="mail">
                             <input type="text" 
                            name="mail" 
                            id="mail" 
                            placeholder="Enter your email" 
                            className={`inputMail ${error?"errorBorder":"" }`}
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}/>
                            
                    <p className={`${error?"errorVisible":"errorInvisible" }`}>Please check your email</p>
                </label>
                <button onClick={()=>Validate()}>Subscribe</button>
            </form>
                </div>
            </div>
        </footer>

     );
}
 
export default Footer;