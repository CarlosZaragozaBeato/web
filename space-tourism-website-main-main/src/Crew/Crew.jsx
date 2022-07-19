import {useState} from 'react'
import './Crew.css'
const Crew = ({info}) => {
    
    const [counterCrew, setCounterCrew] = useState(0)  
    return ( 

        <div className="crewContainer">
                <div className="containerCrew">
                    <div className="infoCrew">
                        <h3 className="spaceSection"><span>02</span> Meet your crew</h3>

                        <div className="mainContentCrew">
                            <h3 className="rolCrew">{info[counterCrew].rol}</h3>
                            <h2 className="nameCrew">{info[counterCrew].name}</h2>
                            <p className="aboutCrew">{info[counterCrew].info}</p>
                        </div>
                        

                        <form className="form">
                        
                        <label for="option1" className="radioContainer">
                             <input type="radio" id="option1"
                                    name="option" value="option1" className="radioOptions"  onChange={()=>setCounterCrew(0)}/>
                                    
                        </label>

                        <label for="option2" className="radioContainer">
                            <input type="radio" id="option2"
                                   name="option" value="option2" className="radioOptions" onChange={()=>setCounterCrew(1)}/>
                        </label>

                        <label for="option3" className="radioContainer">
                                <input type="radio" id="option3"
                                       name="option" value="option3" className="radioOptions" onChange={()=>setCounterCrew(2)}/>
                        </label>
                        
                        <label for="option4" className="radioContainer">
                                <input type="radio" id="option4"
                                       name="option" value="option4" className="radioOptions" onChange={()=>setCounterCrew(3)}/>
                        </label>

                        </form>
                     
                    </div>
                </div>
                <div className="imageCrew">
                    <figure className="figureCrew">
                        <img src={info[counterCrew].image} alt="crew image" />
                    </figure>
                </div>

        </div>
     );
}
 
export default Crew;