import {Link } from "react-router-dom";
import './NavBar.css'

import {useState} from 'react'

const NavBar = ({logo,menuImg,close,bgHandler,active}) => {

const [visible, setVisible] = useState(false)    
console.log(active)

    return ( 


      <header className="header">
          <figure className="figureLogo">
            <Link to="space-tourism-website-main/" onClick={()=>bgHandler("home")}>
                <img src={logo} alt="logo space" />
              </Link>
          </figure>

          <nav className="nav">

            <figure className="burguerMenu">
                <img src={visible?close:menuImg} alt="menu icon" onClick={()=>setVisible(!visible)}/>
            </figure>

            <ul className={`${visible?"visible":""}`}>
                <li className={`${active==="home"?"homeActive":""}`}>
                    <Link to="space-tourism-website-main/" onClick={()=>bgHandler("home")}>
                        00 Home
                    </Link>
                </li>

                <li className={`${active==="destination"?"destinationActive":""}`}>
                    <Link  to="space-tourism-website-main/Destination" onClick={()=>bgHandler("destination")}>
                        01 Destination
                    </Link>
                </li>

                <li className={`${active==="crew"?"crewActive":""}`}>
                    <Link ClassName="active" to="space-tourism-website-main/Crew" onClick={()=>bgHandler("crew")}>
                        02 Crew
                    </Link>
                </li>

                <li className={`${active==="techonology"?"techonologyActive":""}`}>
                    <Link ClassName="active" to="space-tourism-website-main/Technology" onClick={()=>bgHandler("techonology")} >
                        03 Technology
                    </Link>
                </li>

            </ul>
          </nav>
      </header>
     );
}
 
export default NavBar;