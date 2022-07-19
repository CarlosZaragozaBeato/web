import React, { useState, useEffect}  from 'react';


const CardPrototype = ({infoProp})=>{









    return(
         <div className={`cardPrt ${infoProp.name}`}>
             <h2>{infoProp.name}</h2>
             <figure className="figureDrink">
                 <img src={infoProp.image} alt="Drink icon"  className="imgIcon"/>
             </figure>
         </div>
    );

}
export default CardPrototype;