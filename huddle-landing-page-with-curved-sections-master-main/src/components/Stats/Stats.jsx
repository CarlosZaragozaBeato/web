import './Stats.css'

const Stats = ({info}) => {
    return ( 
        <div className="infoStats">
            <figure>
                <img src={info.img} alt="Info icon" />
            </figure>
            <h2>{info.stats}</h2>
            <p>{info.info}</p>
        </div>
     );
}
 
export default Stats;