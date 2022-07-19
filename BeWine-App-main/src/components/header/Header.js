import SearchImage from './imagesHeader/search.webp';
import "./header.css";
import React, { useState}  from 'react';
const Header = ({propTextPrC,propTextPrt})=>{

    
    const [text, setText] = useState("");
    const [crdVisiblePRT, setCrdVisiblePRT] = useState("visible");
    const [crdVisiblePRC, setCrdVisiblePRC] = useState("invisible");



const sendData=()=>{
  
    if(text===""){
        setCrdVisiblePRT("visible");  
        setCrdVisiblePRC("invisible");    
    }
    if(text!==""){
        setCrdVisiblePRT("invisible");  
        setCrdVisiblePRC("visible");  
    }
       
    propTextPrt(crdVisiblePRT);
    propTextPrC(crdVisiblePRC);   
}



const formSbmt=(e)=>{
    e.preventDefault();
    sendData()
}

 
    return(
        <header className="header">

                <h1 className="titleHeader">
                    BeWine
                </h1>
                <nav className="nav">
              
                    <form action="" className="form" onSubmit={formSbmt}>
                       
                        <label 
                        htmlFor="searchInput" 
                        id="searchInput" 
                        className="labelSearch">
                            
                            <input 
                            type="text" 
                            name="searchInput" 
                            className="inputSearch"
                            onChange={(e)=>{setText(e.target.value)}}/>
                        </label>
                   
                    <button onClick={()=>sendData()}>
                        <figure className="searchFigure">
                            <img src={SearchImage} alt="icon search" className="imgSearch" />
                        </figure>
                    </button>
                    </form>
            </nav>
            
        </header>
    );
}

export default Header;