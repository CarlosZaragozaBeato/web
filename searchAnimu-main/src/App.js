
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Form from './Components/Form/Form';
import {AnimuContext} from './Context/AnimuContext'
import React,{useState} from 'react'
import UseFetch from "./CustomHooks/UseFetch";
function App() {

const [selected, setSelected] = useState();
const [dataFilter, setDataFilter] = useState([]);
const [error,setError] = useState(0);
const [form, setForm] = useState("false")
const [email,setEmail] = useState("");
const [password, setPassword] = useState("") 
const [user,setUser] = useState()
const {data}=UseFetch();

  return (
  <>
    <AnimuContext.Provider value={{dataFilter,email,password,setDataFilter,error,setError,selected,setSelected,data,setForm,form,setPassword,setEmail,user,setUser}}> 
  
    <div className="container">

      <Header/>
      {
             form==="login" || form==="register" ?(<Form/>):""
      }
      <Main/>
      </div>
    </AnimuContext.Provider>
  </>
  );
}

export default App;
