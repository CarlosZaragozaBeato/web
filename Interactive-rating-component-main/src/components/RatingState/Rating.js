import starIcon from '../../images/icon-star.svg'
import './Rating.css'
import {useState,useEffect} from 'react'
const Rating = ({stRating,setVsb})=>{
const [rt,setRt] = useState(0);
const [visible,setVisible]= useState(false);

useEffect(()=>{
  
    setVsb(visible)
},[visible])


   const preventForm = (e)=>{
        e.preventDefault();
        if(rt>0){   
            setVisible(true);
        }else{
            setVisible(false);
        }
     
   } 
    return(
        <>
        <div className={`Card ${visible===false?"visible":"hidden"}`}>
            <figure className="figureImg">
                <img src={starIcon} alt="star icon" />
            </figure>

            <div className="info">
                <h1 className="title">How did we do?</h1>
                <p className="description">
                    Please let us know how we did with your support request. All feedback is appreciated 
                    to help us improve our offering!
                </p>
            </div>
            

            <form className="form">

                <div className="ratings">
                    <label htmlFor="choice1" className={`choice ${rt===1?"checked":""}`}>
                    <input type="radio" id="choice1"
                    name="rating" value="1" className="radio" onClick={()=>{stRating(1); setRt(1)}}/>
                    1</label>
                    
                    <label htmlFor="choice2"className={`choice ${rt===2?"checked":""}`}>
                    <input type="radio" id="choice2"
                    name="rating" value="2" className="radio" onClick={()=>{stRating(2); setRt(2)}}/>
                    2</label>


                    <label htmlFor="choice3" className={`choice ${rt===3?"checked":""}`}>
                    <input type="radio" id="choice3"
                    name="rating" value="3" className="radio" onClick={()=>{stRating(3); setRt(3)}}/>
                    3</label>
                    
                    
                    <label htmlFor="choice4" className={`choice ${rt===4?"checked":""}`}>
                    <input type="radio" id="choice4"
                    name="rating" value="4" className="radio" onClick={()=>{stRating(4); setRt(4)}}/>
                    4</label>

                    <label htmlFor="choice5" className={`choice ${rt===5?"checked":""}`}>
                    <input type="radio" id="choice5"
                    name="rating" value="5" className="radio" onClick={()=>{stRating(5); setRt(5)}}/>
                    5</label>
                </div>

            <button type="submit" className="btn" onClick={(e)=>{preventForm(e);}}>
                Submit
            </button>
            </form>
       

        </div>

            
        
        </>


    ); 

}
export default Rating;








