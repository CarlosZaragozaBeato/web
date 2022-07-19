import {useState,useEffect} from 'react'
import './header.css'

const Header = ({setInfo}) => {



const[period, setPeriod] = useState(false)    

useEffect(() =>{
    setInfo(period)
    
},[period])
    return ( 



        <header>
            <h1>Our Pricing</h1>

            <form id={`${period?"monthlyClicked":"form"}`}>
                <label htmlFor="option1Annually">Annually</label>
                <div className="options">
                       <input type="radio" id="option1Annually"
                            name="option" value="option1Annually" 
                            className="radioOptionsDate" 
                            onChange={()=>
                                {setPeriod(!period)}}
                        
                        />
                        
                   
               
        
                        <input type="radio" id="option2Monthly"
                            name="option" value="option2Monthly" 
                            className="radioOptionsDate" 
                            onChange={()=>
                                {setPeriod(!period)}}
                        />                  
               
                </div>
                <label htmlFor="option2Monthly">Monthly</label>
            </form>
        </header>

     );
}
 
export default Header;
