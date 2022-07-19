import './Card.css'
import React,{useContext} from 'react'
import {AnimuContext} from '../../Context/AnimuContext'
const Card = ({info}) => {

    const {setSelected} = useContext(AnimuContext);
    const getCard = (e)=>{
        setSelected(e);
    }   


    return ( 
        <div className="card">
            <figure>
                <img src={info.picture} alt="" />
            </figure>
            <div className="cardInfo">
                <div className="info">
                    <h3>{info.title}</h3>
                    <p>{info.type}</p>
                </div>
                <button onClick={()=>getCard(info)}>More</button>
            </div>
        </div>
     );
}
 
export default Card;