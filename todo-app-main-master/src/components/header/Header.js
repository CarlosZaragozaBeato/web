
/** Hooks **/
import {useState,useEffect} from 'react'

/*Css*/
import './header.css' 
/*Images*/ 
import bgDesktopDark from '../../images/bg-desktop-dark.jpg'
import bgMobileDark from '../../images/bg-mobile-dark.jpg'

import bgDesktopLight from '../../images/bg-desktop-light.jpg'
import bgMobileLight from '../../images/bg-mobile-light.jpg'

import sunImg from '../../images/icon-sun.svg'
import moonImg from '../../images/icon-moon.svg'

 import uuid from 'react-uuid'

const Header = ({mode,cards,setCards,options,ctd})=>{

const formPrvt = (e)=>{
    e.preventDefault();
}


const [text, setText]=useState("");  
const [clickMode, setClickMode] = useState(true)
const [count,setCount] = useState(0);
const [completed, setCompleted] =useState([])

useEffect(()=>{   
    mode(clickMode)
    },[clickMode])   
useEffect(()=>{
       
        switch(options){
            case 0:
                ctd(cards.length)
            break;
            case 1: 
                ctd(completed.length)           
            break;
            case 2:
                ctd((cards.length-completed.length));
            break;
        }
   
    },[options,cards,completed]);
useEffect(()=>{
        setCompleted(cards.filter(item => item.completed==true))
    },[cards]);

const addTodo = ()=>{
    setCards([
            ...cards,
            {
                text:text,
                completed:false,
                active:true,
                id:uuid()
            }
    ])
    setText("")
}

return(
    <header className={`header ${clickMode?"cardDarkBg":"cardlightBg"}`}>
            <picture>
            <source srcSet={clickMode?bgDesktopDark:bgDesktopLight} media="(min-width: 1000px)"/>
            <source srcSet={clickMode?bgMobileDark
            :bgMobileLight} media="(max-width: 1000px)"/>
            <img src={bgMobileDark} alt="background image"/>
            </picture>
    
    <div className="formContainer">   
        <div className="headerForm">
            <h1 className="title">TODO</h1>
            <figure>
                <img src={clickMode?sunImg:moonImg} alt="mode icon" onClick={()=>setClickMode(!clickMode)}/>
            </figure>
        </div>

        <form className="form" onClick={(e)=>formPrvt(e)}>
            <label htmlFor="checkExample" className="inputContainer">
                <button className="btn" onClick={()=>{addTodo()
                                                    setCount(count+1)}}
                                                    aria-label="add Tag"> </button>  
                <label htmlFor="text" className="labelText">
                <input type="text" name="text" placeholder="Create a new todo..." className="inputText"
                    value={text} onChange={(e)=>setText(e.target.value)}
                    maxLength={50}/>
                </label>
            </label>
            
        </form>

    </div>
    </header>
    );
}
export default Header;