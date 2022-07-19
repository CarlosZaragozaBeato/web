import './firstPart.css'

import {useState} from 'react'

const FirstPart = ({bgImage}) => {
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
        <div className="firstPart">
            <div className="firstPartInfo">
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p>Fylo stores your most important files in one secure location. 
                Access them wherever you need, share and collaborate with friends, 
                family, and co-workers.
                </p>
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
                <button onClick={()=>Validate()}>Get Started</button>
            </form>
            </div>
            <figure className="figureBg">
                <img src={bgImage} alt="background image" />
            </figure>
        </div>


    );
}
 
export default FirstPart;