import { FaInstagram,FaFacebookF,FaTwitter} from 'react-icons/fa';
import './Footer.css'
import React from 'react'

const Footer = ({logoFooter,location,phone,email}) => {
    return ( 
        <footer className="footer">
            <div className="firstPartFooter">
            <figure>
                <img src={logoFooter} alt="Page logo" width="40px" height="30px" />
            </figure>
            <h2>Huddle</h2>
            </div>
         
            <div className="secondPartFooter">
                <div className="firstListFooter">
                    <div className="childFirstListFooter">
                        <figure>
                            <img src={location} alt="location icon" width="15px"height="15px"/>
                        </figure>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>

                    <div className="childFirstListFooter">
                        <figure>
                            <img src={phone} alt="phone icon" width="15px"height="15px" />
                        </figure>
                    <p>
                    +1-543-123-4567
                    </p>
                    </div>

                    <div className="childFirstListFooter">
                        <figure>
                            <img src={email} alt="email icon" width="15px"height="15px"/>
                        </figure>
                    <p>
                    example@huddle.com
                    </p>
                    </div>
                </div>
                <div className="groupList">
                    <div className="groupListChild">
                        <ul>
                            <li>About Us</li>
                            <li>What We Do</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="groupListChild">
                        <ul>
                            <li>Career</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>

                <div className="socialContainer">
                
                    <div className="iconContainer">
                        <FaFacebookF/>
                        <FaTwitter/>
                        <FaInstagram/>
                    </div>
                    <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
                </div>
            </div>


        </footer>
     );
}
 
export default Footer;