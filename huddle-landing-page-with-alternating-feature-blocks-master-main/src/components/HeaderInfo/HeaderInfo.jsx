import './HeaderInfo.css'
import React from 'react'
const HeaderInfo = ({img}) => {
    return ( 
        <div className="headerContainer">
            <div className="headerInfo">
                <h1>Build The Community Your Fans Will Love</h1>
                <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                <button>Get Started For Free</button>
            </div>
            <figure>
                <img src={img} alt="" width="600px" height="400px"/>
            </figure>
           
        </div>
     );
}
 
export default HeaderInfo;