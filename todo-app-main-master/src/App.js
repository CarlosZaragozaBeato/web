import {useState} from 'react'
/*Components*/ 
import Header from './components/header/Header'

import TodoList from './components/todoList/TodoList';
function App() {

const [mode, setMode]=useState(true);
const [cardsArray, setCardsArray]=useState([]);  
const [options, setOptions] = useState(0);
const [countTd, setCountTd] = useState(0);

  return (
  <>
    <div className={`appContainer ${mode?"darkModeBG":"lightModeBG"}`}>
        <Header mode={(md)=>setMode(md)}
                options={options}
                cards={cardsArray}
                setCards={setCardsArray}
                ctd={(ct)=>setCountTd(ct)}/>
                
      <div className="Content">
     
        <TodoList modeCard={mode}
                  todoArr={cardsArray}
                  setCard={setCardsArray}
                  options={options}
                  setOpcion={setOptions}
                  count={countTd}/>
      </div>
    </div>
  
  </>
  );
}

export default App;
