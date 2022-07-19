
import './CardReview.css'

const CardReview = ({info}) => {
    return ( 
        <div className="cardReview">
            <p>{info.comment}</p>
            <div className="profileContainer">
                <figure>
                    <img src={info.avatar} alt="profile image" />
                </figure>
                <div className="infoCardReview">
                    <h2>{info.nickname}</h2>
                    <h3>{info.rol}</h3>
                </div>
            </div>
        </div>
     );
}
 
export default CardReview;