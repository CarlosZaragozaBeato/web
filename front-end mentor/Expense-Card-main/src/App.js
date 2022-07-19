import Balance from "./components/Balance/Balance";
import { Context } from './Context/Context';
import { useState } from 'react';
import CardBody from "./components/cardBody/CardBody";
function App() {

  const [data, setData] = useState([
    
        {
          day: "mon",
          amount: 17.45,
          height: 37.5
        },
        {
          day: "tue",
          amount: 34.91,
          height: 57.5
        },
        {
          day: "wed",
          amount: 52.36,
          height: 85
        },
        {
          day: "thu",
          amount: 31.07,
          height: 47.5
        },
        {
          day: "fri",
          amount: 23.39,
          height: 39.5
        },
        {
          day: "sat",
          amount: 43.28,
          height: 72.5
        },
        {
          day: "sun",
          amount: 25.48,
          height: 42.5
        }
      
 ])
  console.log(data) 
  return (
    <>
      <Context.Provider value={{data}}>
      <div className="card-container">
        <Balance />
        <CardBody/>
      </div>
    </Context.Provider>
    </> 
  );
}

export default App;
