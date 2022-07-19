import Rating from './components/RatingState/Rating'
import Thank from './components/ThankYouState/Thank'
import {useState} from 'react'


function App() {



  const[rating,setRating] = useState();
  const[visible,setVisible] = useState();

  return (
     <main className="main">
          <Rating stRating={item=>setRating(item)}
                  setVsb={(vsb)=>setVisible(vsb)}/> 
          <Thank rt={rating}
                 vsb={visible}/>
    </main>
  );
}

export default App;
