import {useState,useEffect} from 'react'
import axios from 'axios'
const UseFetch = () => {
    
    const[data,setData] = useState([]);

    useEffect(()=>{
        axios.get('https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database.json')
        .then(response => {
            setData(response.data.data);
        }, error => {
          console.log(error);
        });
    
      },[]);

    return {data};
}
 
export default UseFetch;