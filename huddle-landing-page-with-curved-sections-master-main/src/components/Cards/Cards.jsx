import './Cards.css'

const Cards = ({dataCard}) => {
    return ( 
        <div className={`cardMain ${dataCard.class}`}>

            <div className="cardContent">
            <div className="cardInfo">
                <h3>{dataCard.title}</h3>
                <p>{dataCard.info}</p>
            </div>

            <figure>
                <img src={dataCard.img} alt="illustration background" />
            </figure>
            </div>

        </div>
     );
}
 
export default Cards;