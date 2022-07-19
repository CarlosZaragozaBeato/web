import './EarlyAccess.css'
import {useState} from 'react'

const EarlyAccess = () => {
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

        <div className="EarlyAccessCard">
            <h2>Get early access today</h2>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <form className="form" onSubmit={(e)=>prevent(e)}>
                <label htmlFor="mail" className="mail">
                    <input type="text" 
                            name="mail" 
                            id="mail" 
                            placeholder="Enter your email" 
                            className={`inputMail ${error?"errorBorder":"" }`}
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}/>
                            
                    <p className={`${error?"errorVisible":"errorInvisible" }`}>Please check your email</p>
                </label>
                <button onClick={()=>Validate()}>Get Started for free</button>
            </form>

        </div>

     );
}
 
export default EarlyAccess;