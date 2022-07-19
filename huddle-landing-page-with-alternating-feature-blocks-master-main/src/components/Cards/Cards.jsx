import './Cards.css'
import React from 'react'
const Cards = ({data}) => {
    return ( 
        <div className={`card ${data.class}`}>
            <div className="infoCard"> 
                <h2>{data.title}</h2>
                <p>{data.info}</p>
            </div>
            <figure>
                <img src={data.img} alt="illustration background" width="500px" height="300px" />
            </figure>
        </div>
     );
}
 
export default Cards;