
import './cardScd.css'

const ScdCard =({infoPropScd,modePrp})=>{

    return(
        <>
            <div className={`cardSc ${modePrp?"scdDark":"scdLight"}`}>
                <div className={`cardChild ${infoPropScd.prmClassNameProp}`}>                   
                    <div className="firstPartPrm firstPart">
                        <h3>
                            {infoPropScd.prmInteract}
                        </h3>
                        <figure className="figureSocialIcon">
                            <img src={infoPropScd.prmSocialImg} alt="social icon"
                            className="social" />
                        </figure>
                    </div>
                    <div className="secondPartPrm secondPart">
                        <h3>
                            {infoPropScd.prmNumber}
                        </h3>
                        <div className="status">
                            <figure className="figureArrowIcon">
                                <img src={infoPropScd.prmIconArrow} alt="arrow icon" />
                            </figure>
                            <p className={infoPropScd.prmClassName}>{infoPropScd.prmRatio}</p>                        
                        </div>                 
                    </div>
                </div>

                <div className={`cardChild ${infoPropScd.scdClassName}`}>
                <div className="firstPartSC firstPart">
                        <h3>
                            {infoPropScd.scdLikes}
                        </h3>
                        <figure className="figureSocialIcon">
                            <img src={infoPropScd.prmSocialImg} alt="social media icon" className="social"/>
                        </figure>
                    </div>
                <div className="secondPartSC secondPart">
                        <h3>
                            {infoPropScd.sctNumberLikes}
                        </h3>
                        <div className="status">
                            <figure className="figureArrowIcon">
                                <img src={infoPropScd.scdIconArrow} alt="arrow Icon" />
                            </figure>
                            <p className={infoPropScd.scdClassName}>{infoPropScd.scdRatio}</p>                        
                        </div>
                </div>
             </div>
            </div>
        </>
    );
}

export default ScdCard