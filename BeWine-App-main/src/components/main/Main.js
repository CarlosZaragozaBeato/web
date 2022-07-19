import React, { useEffect, useState }  from 'react';
import BeerImg from './card/imagesMain/beer.webp';
import CokeImg from './card/imagesMain/coke.webp';
import WaterImg from './card/imagesMain/water.webp';
import WineImg from './card/imagesMain/wine-bottle.webp';
import CardPrototype from './card/CardPrototype';
import CardPrc from './card/CardPrc'; 
import "./main.css";


const Main = ({infoProp,vsbPRT,vsbPRC})=>{
    





const[drink,setDrink]= useState([
        {

            name:"Wine",
            image:WineImg
        },
        {
            name:"Beer",
            image:BeerImg
        },
        {
            name:"Refreshment",
            image:CokeImg
        },
        {
            name:"Water",
            image:WaterImg
        }]);
    return(
        <main className="main">

            <div className={`cardsContainerPrt ${vsbPRT}`}>   
                {drink.map(crd =>(
                    <CardPrototype 
                        infoProp={crd}
                        key={crd.name}
                       />
                ))}
            </div>
            <div className={`cardsContainerPrincipal ${vsbPRC}`}>
            {infoProp.map(info => (
                <CardPrc 
                infPrp={info}
                key={info.userId}
                /> ))
                    
                }
            </div>
        </main>
    );
}
export default Main;