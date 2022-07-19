import Card from "../Cards/Card";
import React,{useContext} from 'react'
import {AnimuContext}  from '../../Context/AnimuContext'
import { nanoid } from 'nanoid';
import './Main.css'
import SearchBar from "../SearchBar/SearchBar";
import CardInfo from "../CardInfo/CardInfo";
const Main = () => {

const {dataFilter,error,selected} = useContext(AnimuContext)

    return ( 

        <main className="main">
                
                {error!==1?(
                <div className="Introduce">
                <p>Introduzca un animu</p>
                <SearchBar/>
                </div>
                ):""}
                {
                dataFilter.map(animu=>
                <Card key={nanoid()}
                    info={animu}
                />
               )}
               {selected===undefined?"":(<CardInfo info={selected}/>)}
       
            
        </main>
     );
}
 
export default Main;