import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
export default function Nav() {
  return (
       
       <header>
            <div className="headerContainer">

        
            <h1>
                Clock App
            </h1>
            <nav>
                <ul>
                   <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/DigitalClock">
                            Digital Clock
                        </Link>
                    </li>
                
             
                </ul>
            </nav>
            </div>
       </header>
      
  )
}
