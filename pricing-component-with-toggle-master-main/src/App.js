import {useState} from 'react'
import Card from './components/Cards/Card';

import Header from './components/Header/Header';

function App() {
  
  const [plans] = useState([
    {
        planYear:"$199.99",
        plan:"Basic",
        price:"$19.99",
        storage:"500 GB Storage",
        users:"2 Users Allowed",
        sendUp:"Send up to 3 GB",
        class:"whiteCard"
    },
    {
      planYear:"$249.99",
      plan:"Professional",
      price:"$24.99",
      storage:"1 TB Storage",
      users:"5 Users Allowed",
      sendUp:"Send up to 10 GB",
      class:"blueCard"

  }, 
  {
    planYear:"$399.99",
    plan:"Master",
    price:"$39.99",
    storage:"2 TB Storage",
    users:"10 Users Allowed",
    sendUp:"Send up to 20 GB",
    class:"whiteCard"
  }
])
  
const [prd, setPrd]=useState(false)
  return (

     <>
         <Header setInfo={(param)=>setPrd(param)}
                />
         <main>
           {plans.map((plan)=>(
             <Card info={plan}
                   time={prd}/>
           ))}
      
        </main>
     </>

  

  
  );
}

export default App;
