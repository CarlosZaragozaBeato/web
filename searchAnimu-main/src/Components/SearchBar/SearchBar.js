
import React,{useState, useEffect,useContext} from 'react'
import UseFetch from "../../CustomHooks/UseFetch";
import {AnimuContext}  from '../../Context/AnimuContext'
import { FcSearch } from 'react-icons/fc';
import {AiOutlineClose} from 'react-icons/ai'; 
import './SearchBar.css'
const SearchBar = () => {


    const {setDataFilter,setError} = useContext(AnimuContext); 
    
    const {data} = UseFetch();
    const [action,setAction] = useState(false)
    const [animu,setAnimu] = useState("");
    const [img, setImg] = useState(true)
    useEffect(()=>{
      filter()
    },[action])
  
    useEffect(()=>{
      if(animu.length>0){
        setImg(false)
      }else{
        setImg(true)
      }
    },[animu])
  
    function filter (){
        
        if(animu!==""){
            const dataFiltered =data.filter(e=>e.title.toLowerCase().includes(animu))
            if(dataFiltered===null){
              setDataFilter([])
              setAnimu("")
            }
            else{
              setDataFilter(dataFiltered)
              setAnimu("")
              setError(1)
              if(dataFiltered.length===0){
                setError(0)
              }
            }
        }else{
            setError(0)
            setDataFilter([])
        }     
    }
    const preventForm=(e)=>{
        e.preventDefault()
    }

    return (
    <div className="searchBar">
        <form onSubmit={(e)=>preventForm(e)} className="form">
            <label htmlFor="inputText">
                <input type="text" name="inputText" id="inputText" value={animu} onChange={(e)=>setAnimu(e.target.value)} />
                {img?(<FcSearch onClick={()=>setAction(!action)}/>):(<AiOutlineClose onClick={()=>{setAnimu("")}}/>)}
            </label>  
            <button onClick={()=>setAction(!action)}>Search</button>
        </form>
       
    </div>
      );
}
 
export default SearchBar;