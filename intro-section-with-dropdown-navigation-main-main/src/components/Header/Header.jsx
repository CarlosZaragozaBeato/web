import './Header.css'
import {useState} from 'react'
const Header = ({logo,menuIcon,closeMenuIcon,arrowDown,todoLogo,calendarLogo,reminderLogo,planningLogo,arrowUp,bg}) => {
    
    const [features,setFeatures]=useState(false);
    const [company,setCompany]=useState(false);
    const [visibleMenu, setVisibleMenu] = useState(false)
    
    return ( 

        <header className="header">
            <div className="headerContainer">  
            <div className="firstPartNav">  
                <figure className="logoNav">
                    <img src={logo} alt="Page Logo" />
                </figure> 

                <nav className="nav">
                        <figure className="menuIcon" >
                            <img src={visibleMenu?closeMenuIcon:menuIcon} alt="menu icon" onClick={()=>{setVisibleMenu(!visibleMenu);bg(visibleMenu)}} />
                        </figure>
                    <div className={`bar ${visibleMenu?"menuVisible":""}`}>
                    
                        <div className="firstBar childBar">
                            <div className="features titleBar" onClick={()=>setFeatures(!features)}>
                                <p>Features</p>
                                <figure>
                                    <img src={features?arrowUp:arrowDown} alt="arrow icon" />
                                </figure>
                            </div>
                            <ul className={`submenu ${features?"visibleFeature visible":"invisibleFeature invisible"}`}>
                                <li>
                                    <figure>
                                        <img src={todoLogo} alt="todo logo" />
                                    </figure>
                                    Todo List
                                </li>
                                <li>
                                    <figure>
                                        <img src={calendarLogo} alt="calendar logo" />
                                    </figure>
                                    Calendar
                                </li>
                                <li>
                                    <figure>
                                        <img src={reminderLogo} alt="reminder logo" />
                                    </figure>
                                    Reminders
                                </li>
                                <li>
                                    <figure>
                                        <img src={planningLogo} alt="planning logo" />
                                    </figure>
                                    Planning
                                </li>
                            </ul>
                        </div>  
                        <div className="secondBar childBar">
                            <div className="Company titleBar" onClick={()=>setCompany(!company)}>
                                <p>Company</p>
                                <figure>
                                    <img src={company?arrowUp:arrowDown} alt="arrow icon" />
                                </figure>
                            </div>
                            <ul className={`submenu ${company?"visibleCompany visible":"invisible"}`}>
                                <li>
                                    History
                                </li>
                                <li>
                                    Our Team
                                </li>
                                <li>
                                    Blog
                                </li>
                            </ul>
                        </div>  
                        <div className="thirdBar childBar">
                            <p>Careers</p>
                        </div>
                        <div className="fourthBar childBar">
                            <p>About</p>
                        </div>
                    </div>

                </nav>
            </div>

            <div className="loginContainer">
                <button className="login">Login</button>
                <button className="register">Register</button>
            </div>
            </div>
        </header>
     );
}
 
export default Header;