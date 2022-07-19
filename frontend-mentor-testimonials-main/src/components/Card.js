

const Card = ({nameProp,account,intro,body,image,classCssProp}) =>{

    return(
        
        <div className={`cardClass ${classCssProp}`}>
            <div className="headerCard">
                <figure className="figureClass">
                    <img src={image} alt="profile Img" />
                </figure>
                <div className="profileInfo">
                    <h2 className="titleCard">{nameProp}</h2>
                    <p className="accountType">{account}</p>
                </div>
            </div>
            <div className="mainInfo"> 
                <p className="introInfo">{intro}</p>
                <p className="bodyInfo">{body}</p>
            </div>

        </div>
    );

}
export default Card;