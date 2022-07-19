import './Card.css'

const Card = ({info}) => {
    return ( 
        <div className="card">
            <figure>
                <img src={info.img} alt="logo for the specificactions" />
            </figure>
            <div className="cardInfo">
                <h3>{info.title}</h3>
                <p>{info.info}</p>
            </div>
        </div>
     );
}
 
export default Card;