import {useState} from 'react'
import './Technology.css'
const Techonology = ({info}) => {

    const [technologyCounter, setTechnologyCounter] = useState(0)

    return ( 

        <div className="technologyContainer">
            <div className="infoTechnology">
                <div className="technologyContent">
                    <h3 className="spaceSection"><span>02</span> Space Launch 101</h3>
                    <div className="mainInfoTc">
                    <form className="formTec">
                        
                        <label for="option1Tec" className={`radioContainerTec ${technologyCounter===0?"radioContainerTecCheck":""}`}>
                            1
                             <input type="radio" id="option1Tec"
                                    name="option" value="option1Tec" className="radioOptionsTec"  onChange={()=>setTechnologyCounter(0)}/>
                                 
                        </label>

                        <label for="option2Tec" className={`radioContainerTec ${technologyCounter===1?"radioContainerTecCheck":""}`}>
                            2
                            <input type="radio" id="option2Tec"
                                   name="option" value="option2Tec" className="radioOptionsTec" onChange={()=>setTechnologyCounter(1)}/>
                                
                        </label>

                        <label for="option3Tec" className={`radioContainerTec ${technologyCounter===2?"radioContainerTecCheck":""}`}>
                            3
                            <input type="radio" id="option3Tec"
                                       name="option" value="option3Tec" className="radioOptionsTec" onChange={()=>setTechnologyCounter(2)}/>
                            
                        </label>
    
                        </form>

                        <div className="technologyData">
                            <h3 className="terminology">The terminology</h3>
                            <h2 className="nameTc">{info[technologyCounter].name}</h2>
                            <p className="descriptionTc">{info[technologyCounter].info}</p>
                        </div>
                    </div>
                    
                </div>
              
            </div>
            <div className="technologyImage">
                <picture>
                    <source media="(max-width:900px)" srcset={info[technologyCounter].imageLandScape} />
                    <source media="(max-width:600px)" srcset={info[technologyCounter].imagePortrait} />
                    <img src={info[technologyCounter].imagePortrait} alt="Technology equipment"  />
                </picture>
            </div>
        </div>

     );
}
 
export default Techonology;