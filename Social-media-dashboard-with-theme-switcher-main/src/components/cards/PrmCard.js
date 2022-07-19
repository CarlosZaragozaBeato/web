
import './cardPrm.css'

const PrmCard  = ({infoProp,modePrp})=>{

    return(
        <div className={`prmCard ${infoProp.classNameProp} ${modePrp?"darkCard":"lightCard"}`}>
            <div className="titleCard">
                <figure className="figureCardTitle">
                    <img src={infoProp.socialImg} alt="social media icon" className="icon" />
                </figure>
                <p>{infoProp.name}</p>
            </div>
            <div className="bodyCard">
                <h2 className="numberFollowers">{infoProp.followers}</h2>
                <p className>{infoProp.nmFollower}</p>
            </div>
            <div className="footerCard">
                <figure className="figureCardFooter">
                    <img src={infoProp.followersState} alt="arrow icon" className="iconArrow" />
                </figure>
                <p>{infoProp.liveFollowers}</p>
            </div>
        </div>

    );
}
export default PrmCard;