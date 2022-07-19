import React, { useState, useEffect}  from 'react';

const CardPrc = ({infPrp})=>{
    



    return(
        <div className={`card`}>
            <div className="headerCard">
              
                <p className="infoCard">{infPrp.id}</p>
                <h2 className="titleCard">{infPrp.title}</h2>
            </div>
         
            <figure className="cardFigure">
                <img src={infPrp.url} alt="icon" className="iconImage" />
            </figure>
        </div>
    );
}
export default CardPrc;