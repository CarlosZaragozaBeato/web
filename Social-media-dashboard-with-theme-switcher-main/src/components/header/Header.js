import { useState, useEffect } from "react";
import './header.css'
const Header = ({modeProp})=>{


const [modeHandler,setModeHandler]=useState(true)

useEffect(()=>{   
    modeProp(modeHandler)
},[modeHandler])

    return(
            <header className={`header ${modeHandler?"darkHeader":"lightHeader"}`}>
                
                <div className="titleHeader">
                    <h1 className="title">Social Media Dashboard</h1>
                    <p className="descriptionFollowers">Total Followers: 23,004</p>
                </div>

            <form className="form">
                
                <label htmlFor="mode" className="mode" aria-labelledby="mode">
                    {modeHandler?"Dark Mode":"Light Mode"}
                </label>

                <div 
                className={`inputMode ${modeHandler?"darkInputMode":"lightInputMode"}`}> 

                    <div className={`ball ${modeHandler?"ballDarkMode":"ballLightMode"}`}></div>

                    <input type="radio"  
                           id="mode1" 
                           name="pageMode" 
                           value="darkMode" 
                           onChange={()=>setModeHandler(true)}
                           ar/>

                    <input type="radio"  
                           id="mode2" 
                           name="pageMode" 
                           value="lightMode" 
                           onChange={()=>setModeHandler(false)}/>
                </div>
                
            </form>
            </header>
    );
}
export default Header;