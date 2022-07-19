import React, { useState, useEffect}  from 'react';
import Header from './components/header/Header'
import Main from './components/main/Main'
function App() {


const [info, setInfo] = useState([]);
const [valorPrt, setValorPrt] = useState("visible");
const [valorPrc, setValorPrc] = useState("invisible");


  fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
  .then(response => response.json())
  .then(json => setInfo(json))




  return (
      <>
         <Header propTextPrt = {cdt=>setValorPrt(cdt)}
                 propTextPrC = {cdt=>setValorPrc(cdt)}/>
         <Main   infoPropPRT={info} 
                 vsbPRT={valorPrt}
                 vsbPRC={valorPrc}
                 infoProp={info}/>
      </>
  );
}

export default App;
