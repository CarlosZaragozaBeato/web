import {useState} from 'react'
import './ThirdPart.css'
const ThirdPart = () => {
    const pattern =
    /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [email,setEmail] = useState("");
    const [error,setError] = useState(false)
    const prevent = (e)=>{
        e.preventDefault();
    }
    
    function Validate(){
        if(email.match(pattern)){
            setError(false)
            setEmail("")
        }else{
            setError(true)   
        }
    }
  
    return ( 

        <div className="thirdPart">
            <div className="thirdPartTitle">
                <h2>
                    Get early access today
                </h2>
                <p>
                    It only takes a minute to sign up and our free starter tier is extremely generous. 
                    If you have any questions, our support team would be happy to help you.
                </p>
            </div>
           
            <form className="form thirdPartForm" onSubmit={(e)=>prevent(e)}>
                <label htmlFor="mail2" className="mail">
                    <input type="text" 
                            name="mail2" 
                            id="mail2" 
                            placeholder="email@example.com" 
                            className={`inputMail ${error?"errorBorder":"" }`}
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}/>

                    <p className={`${error?"errorVisible":"errorInvisible" }`}>Please check your email</p>
                </label>
                <button onClick={()=>Validate()}>Get Started For Free</button>
            </form>
        </div>

     );
}
 
export default ThirdPart;