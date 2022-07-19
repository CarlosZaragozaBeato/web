import {useState} from 'react'
import './Destination.css'

const Destination = ({info}) => {
    
    const [imageDestination, setImageDestination]= useState(0);

    

    return ( 
                <div className="destinationContainer">
                    <div className="firstPartDestination">
                        <h3><span>01</span> Pick your destination</h3>
                        <figure>
                            <img src={info[imageDestination].image} alt="planet image" />
                        </figure>
                    </div>

                    <div className="secondPartDestination">
                        <ul className="barDestination">
                            <li className={imageDestination ===0?"activeMoon":"" } onClick={()=>setImageDestination(0)}>Moon</li>
                            <li className={imageDestination ===1?"activeMars":"" } onClick={()=>setImageDestination(1)}>Mars</li>
                            <li className={imageDestination ===2?"activeEuropa":"" } onClick={()=>setImageDestination(2)}>Europa</li>
                            <li className={imageDestination ===3?"activeTitan":"" } onClick={()=>setImageDestination(3)}>Titan</li>
                        </ul>
                        <h2>
                            {info[imageDestination].name}
                        </h2>
                        <p className="info">
                            {info[imageDestination].info}
                        </p>
                        <div className="infoDestination">
                            <div className="avgDistance secondaryInfo">
                                <p>Avg. distance</p>
                                <h3>{info[imageDestination].avgDistance}</h3>
                            </div>
                            <div className="travelTime secondaryInfo">
                                <p>Est. travel time</p>
                                <h3>{info[imageDestination].travelTime}</h3>
                            </div>
                        </div>
                    </div>
                
                </div>
     );
}
 
export default Destination;