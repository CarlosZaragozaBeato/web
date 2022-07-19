import './Cards.css'

const Card = ({info,time}) => {
    return ( 

        <div className={`card ${info.class}`}>   
                <h3 className="type">{info.plan}</h3>
                <h2 className="price">{time?info.planYear:info.price}</h2>
                <div className="infoCard">
                    <h4 className="storage">{info.storage}</h4>
                    <h4 className="users">{info.users}</h4>
                    <h4 className="sendUp">{info.sendUp}</h4>
                </div>
                <button className="btn">Learn More</button>
        </div>

     );
}
 
export default Card

