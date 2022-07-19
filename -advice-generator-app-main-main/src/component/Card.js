
import DividerDesktop from '../images/pattern-divider-desktop.svg'
import DividerMobile from '../images/pattern-divider-mobile.svg'
import Dice from '../images/icon-dice.svg'
import {useState,useEffect} from 'react'
import './card.css'

const Card = ()=>{

    const[adviceS, setAdvice] = useState([]);
    const[click, setClick] = useState(true);

    useEffect(() => {
      fetch(
        `https://api.adviceslip.com/advice`
      )
        .then((res) => res.json())
        .then((data) => {
          setAdvice(data.slip);
        })
        .catch((err) => console.log(err));
    }, [click]);


    return(
        <main className="main">
                <div className="card">
                    <h1 className="adviceId"> 
                        Advice #{adviceS.id}
                    </h1>
                    <p className="advice">
                       "{adviceS.advice}"
                    </p>
            
                <div className="separator">    
                    <picture>
                        <source srcSet={DividerMobile} media="(max-width: 700px)"/>
                        <source srcSet={DividerDesktop} media="(min-width: 700px)"/>
                        <img src={DividerMobile} alt="Divider Image"/>
                    </picture>
                </div>
                <div className="diceContainer" onClick={()=>setClick(!click)}>
                    <figure className="diceFigure">
                        <img src={Dice} alt="Dice Icon"/>
                    </figure>
                </div>
                </div>
        </main>
    );

}
export default Card;