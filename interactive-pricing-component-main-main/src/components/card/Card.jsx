import './Card.css'
import {useState,useEffect} from 'react'

const Card = ({check}) => {
    const[value,setValue]=useState(2);
    const[views,setViews]=useState("100") 
    const[bgSlider,setBgSlider]=useState("medium") 
    const[priceMonth,setPriceMonth]=useState(16);
    const [discount,setDiscount] = useState(false);

    useEffect(()=>{

        if(discount){
            switch(value){
                case "0":
                    setViews("10k")
                    setBgSlider("veryLow")
                    setPriceMonth(6)
                break;
                case "1":
                    setViews("50k")
                    setBgSlider("low")
                    setPriceMonth(9)
                break;
                case "2":
                    setViews("100k")
                    setBgSlider("medium")
                    setPriceMonth(12)
                break;
                case "3":
                    setViews("500k")
                    setBgSlider("high")
                    setPriceMonth(18)
                break;
                case "4":
                    setViews("1M")
                    setBgSlider("veryHigh")
                    setPriceMonth(27)
                break;
            }
        }else{
            switch(value){
                case "0":
                    setViews("10K")
                    setBgSlider("veryLow")
                    setPriceMonth(8)
                break;
                case "1":
                    setViews("50K")
                    setBgSlider("low")
                    setPriceMonth(12)
                break;
                case "2":
                    setViews("100K")
                    setBgSlider("medium")
                    setPriceMonth(16)
                break;
                case "3":
                    setViews("500K")
                    setBgSlider("high")
                    setPriceMonth(24)
                break;
                case "4":
                    setViews("1M")
                    setBgSlider("veryHigh")
                    setPriceMonth(36)
                break;
            }
        }
      
    },[value,discount])



    return ( 

        <main>
            <div className="cardContainer">
                <div className="card">
                 <div className="firstPartCard">
                    <h2> ${views} Pageviews</h2>
                    <div className="sliderContainer">
                        <label htmlFor="prices">
                            <input type="range" 
                                        min="0" 
                                        max="4"
                                        className={bgSlider} 
                                        step="1" 
                                        name="prices" 
                                        id="prices"
                                        
                                        onChange={(e)=>setValue(e.target.value)}
                                        value={value}/>
                        </label>
                    </div>
                </div>
                <h3 className="month">
                   ${priceMonth}<span>/ month</span>
                </h3>
                <div className="discountContainer">
                    <div className="discountInput">
                        <p>Monthly Billing</p>
                        <div className={`inputDsc ${discount?"discountActive":"discountDisable" }`}>
                        <label htmlFor="noDiscount">
                            <label htmlFor="noDiscount">
                            <input type="radio"  
                            id="noDiscount" 
                            name="discount" 
                            value="noDiscount" 
                            onChange={()=>setDiscount(!discount)}
                            />
                        </label> 
                        </label>    
                        
                        <label htmlFor="Discount">
                            <input type="radio"  
                                id="Discount" 
                                name="discount" 
                                value="Discount" 
                                onChange={()=>setDiscount(!discount)}
                                />
                        </label>
                        </div>
                    </div>
                    <div className="yearly">
                        <p>
                            Yearly Billing
                            <span className="percentage">-25%<span>discount</span></span>
                        </p>
                    </div>
                </div>
             </div>
             <div className="secondPartCard">
                <ul>
                    <li className="listItem">
                        <figure>
                            <img src={check} alt="Check icon" />
                        </figure>
                        Unlimited websites
                        </li>
                
                    <li className="listItem">
                        <figure>
                            <img src={check} alt="Check icon" />
                        </figure>
                        100% data ownership
                    </li>
                  
                    <li className="listItem">
                        <figure>
                            <img src={check} alt="Check icon" />
                        </figure>
                        Email reports
                    </li>
                  
                </ul>
                <button>Start my trial</button>
             </div>
            </div>
        </main>

     );
}
 
export default Card;